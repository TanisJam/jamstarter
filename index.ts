#!/usr/bin/env node

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { cp, readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { glob } from 'glob';
import color from 'picocolors';
import prompts from 'prompts';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getRandomName } from './utils/getRandomName';
import { selectDirectory } from './utils/directorySelector';

const TEMPLATES = [
  {
    title: 'Next.js + TypeScript + DaisyUI',
    value: 'next-ts-daisyui'
  },
  {
    title: 'Discord.js + TypeScript',
    value: 'discord-ts'
  },
  {
    title: 'Astro + TailwindCSS',
    value: 'astro-tw'
  }
];

const EXTRAS = {
  'astro-tw': [
    {
      title: 'Dockerfile',
      value: 'docker'
    }
  ]
};

const toPascalCase = (str) =>
  str[0].toUpperCase() + str.slice(1).replace(/[^a-zA-Z0-9]+(.)/g, (_match, char) => char.toUpperCase());

const args = yargs(hideBin(process.argv)).options({
  name: {
    alias: 'n',
    type: 'string',
    description: 'Name of the project'
  },
  template: {
    alias: 't',
    type: 'string',
    description: 'Template to use'
  },
  comp: {
    alias: 'c',
    type: 'boolean',
    description: 'Create a component'
  },
  dir: {
    alias: 'd',
    type: 'string',
    description: 'Directory to generate the component in'
  }
});

prompts.override(args.argv);

async function main() {
  const { name: initialName, template: initialProject, comp, dir } = await args.argv;

  if (comp) {
    const componentName = await prompts({
      type: 'text',
      name: 'name',
      initial: initialName ? toPascalCase(initialName) : toPascalCase(getRandomName()),
      message: 'What is the name of your component?',
      format: toPascalCase
    });

    let destinationDir = dir || '';

    if (!dir) {
      destinationDir = await selectDirectory(process.cwd());
      if (!destinationDir) {
        console.log('No directory selected.');
        console.log(` ${color.yellow(`   No files were created.`)}`);
        process.exit(1);
      }
    }

    const TemplateIndex = `export { default as ${componentName.name} } from './${componentName.name}';`;
    const TemplateComponent = `export default function ${componentName.name}() {return <h3>This is ${componentName.name}</h3>;}`;
    const componentFolder = path.join(destinationDir, componentName.name);
    const componentPath = path.join(componentFolder, `${componentName.name}.tsx`);
    const indexPath = path.join(componentFolder, 'index.ts');

    try {
      await access(componentPath);
      console.log(color.red(`\n ❗Component with the same name ${color.bgCyan(componentName.name)} already exists in:`));
      console.log(color.yellowBright('   ' + color.underline(destinationDir)));
      console.log(` ${color.yellow(`  No files were created.`)}`);
      process.exit(1);
    } catch (error) {
      if (error.code === 'ENOENT') {
        try {
          await mkdir(componentFolder, { recursive: true });
          await writeFile(componentPath, TemplateComponent, {
            encoding: 'utf8'
          });
          await writeFile(indexPath, TemplateIndex, { encoding: 'utf8' });

          console.log(`\n ${color.green(` ✔️ Component created successfully`)} 🎉`);
        } catch (error) {
          console.error(`\n ${color.red(` ❗Error creating the component:`)} ${error}`);
          return;
        }
      }
    }

    process.exit(0);
  }

  const project = await prompts(
    [
      {
        type: 'text',
        name: 'name',
        message: 'Name of your project',
        initial: initialName || getRandomName(),
        validate: (value) => {
          if (value.match(/[^a-zA-Z0-9-_]+/g))
            return 'Project name can only contain letters, numbers, dashes and underscores';

          return true;
        }
      },
      {
        type: 'select',
        name: 'template',
        message: `Which template would you like to use?`,
        initial: initialProject || 0,
        choices: TEMPLATES
      }
    ],
    {
      onCancel: () => {
        console.log('\nBye!\n');
        process.exit(0);
      }
    }
  );

  // Get the template folder for the selected template
  const template = path.join(path.dirname(fileURLToPath(import.meta.url)), 'templates', project.template);

  // Get the destination folder for the project
  const destination = path.join(process.cwd(), project.name);

  // Get the extras for the selected template
  let extras: string[] = [];

  if (EXTRAS[project.template]) {
    const { extras: results } = await prompts({
      type: 'multiselect',
      name: 'extras',
      message: 'Any extras?',
      choices: EXTRAS[project.template]
    });

    // Assign to variable
    extras = results;
  }

  // Copy files from the template folder to the current directory
  await cp(path.join(template, 'project'), destination, { recursive: true });

  for await (const extra of extras) {
    // Copy files from the extra folder to the current directory
    await cp(path.join(template, 'extras', extra), destination, { recursive: true });
  }

  // Get all files from the destination folder
  const files = await glob(`**/*`, { nodir: true, cwd: destination, absolute: true });

  // Read each file and replace the tokens
  for await (const file of files) {
    const data = await readFile(file, 'utf8');
    const draft = data.replace(/{{name}}/g, project.name);

    await writeFile(file, draft, 'utf8');
  }

  console.log('\n 🎉 Project Created Successfully! 🎉');
  console.log(`\n ${color.yellowBright(`Next steps:`)}\n`);
  console.log(` ${color.green(`cd`)} ${project.name}`);
  console.log(` ${color.green(`pnpm`)} install`);
  console.log(` ${color.green(`pnpm`)} dev`);

  console.log(`\n Happy coding!✨`);

  // Extras log
  if (extras.length) {
    console.log(
      `\nCheck out ${color.italic(
        extras.map((extra) => `${extra.toUpperCase()}.md`).join(', ')
      )} for more info on how to use it.`
    );
  }

  // Contact logs
  console.log('\n---\n');
  console.log(` 🍊 ${color.underline(color.yellow('https://mnr.ar'))}`);
}

// Run the main function
main().catch(console.error);
