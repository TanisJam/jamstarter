# 🍊 JamStarter

JamStarter is a CLI tool for quickly starting projects using various templates. It allows you to create projects with predefined and customizable configurations.

## Features

- 🎨 Select from different templates for various types of projects.
- 📦 Option to add extra files based on the selected template.
- 🧩 Optional to generate boilerplate for react components.

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

### Creating a Project:

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

### Creating a Component:

To create a new component boilerplate, use the -c or --comp flag:

```bash
npx jamstarter -c
```

This will prompt you for the component name and let you select the directory where you want to create it.

#### Customizing the Component:

`Name`: You can specify the component name using the -n or --name flag:

```bash
npx jamstarter -c -n MyComponent
```

`Directory`: If you want to create the component in a specific directory, use the -d or --dir flag:

```bash
npx jamstarter -c -n MyComponent -d src/components
```

## 🚀 Future Features

- [x] **Component boilerplate generator**: Create reusable components with predefined structure.
- [ ] **Dockerfile Generation:** Generate optimized Dockerfiles based on your project's `package.json` file.
