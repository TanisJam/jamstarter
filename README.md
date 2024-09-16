# 🍊 JamStarter

JamStarter is a CLI tool for quickly starting projects using various templates. It allows you to create projects with predefined and customizable configurations.

## Features

- 🎨 Select from different templates for various types of projects.
- 📦 Option to add extra files based on the selected template.

## Available Templates

- **Next.js + TypeScript + DaisyUI**
- **Discord.js + TypeScript**
- **Astro + TailwindCSS**

## Installation

To use this CLI, make sure you have [Node.js](https://nodejs.org/) installed on your machine. You can then install the CLI globally using `npx`:

```bash
npx jamstarter
```

## Usage

To create a new project, run the following command:

```bash
npx jamstarter
```

You could also pass options to specify the name and template of your project:
Options:

- `-n, --name <name>`: Name of the project.
- `-t, --template <template>`: Template to use.

Example:

```bash
npx jamstarter my-awesome-project -t next-ts-daisyui
```

This will create a new project named my-awesome-project using the Next.js + TypeScript + DaisyUI template.

## Future Enhancements

🚀 I plan to expand the functionality of JamStarter to include features such as generating boilerplate files and folders for Atomic Design, this normally is repetitive at the start of a projects.
