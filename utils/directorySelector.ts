import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import prompts from 'prompts';
import color from 'picocolors';

async function listDirectories(directory) {
  const items = await readdir(directory);
  const directories = [] as string[];

  for (const item of items) {
    const itemPath = path.join(directory, item);
    const itemStat = await stat(itemPath);
    if (itemStat.isDirectory()) {
      directories.push(itemPath);
    }
  }
  return directories;
}

export const selectDirectory = async (currentDirectory) => {
  const directories = await listDirectories(currentDirectory);

  if (directories.length === 0) {
    console.log(`This directory is empty.`); // Message for empty directory
  }
  const choices = directories.map((dir) => ({
    title: `📁 ${path.basename(dir)}`,
    value: dir
  }));

  choices.push(
    { title: '⤴ Go Back', value: 'BACK' },
    { title: '☑ Select Current', value: 'CURRENT' },
    { title: '🛇 Cancel', value: 'CANCEL' }
  );

  const response = await prompts({
    type: 'select',
    name: 'selectedDirectory',
    message: `\n\nCurrent directory:\n   ${color.yellow(currentDirectory)}:\n`,
    choices: choices,
    initial: 0
  });

  switch (response.selectedDirectory) {
    case 'BACK':
      console.log(`Going back to ${path.dirname(currentDirectory)}`);
      return await selectDirectory(path.dirname(currentDirectory));
    case 'CURRENT':
      console.log(`You selected the current directory: ${currentDirectory}`);
      return currentDirectory;
    case 'CANCEL':
      console.log('Operation cancelled.');
      return null;
    default:
      return await selectDirectory(response.selectedDirectory);
  }
};
