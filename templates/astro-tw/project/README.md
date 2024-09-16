# Astro Tailwind Atomic Design Kickstarter

This is a kickstarter for projects using [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and Atomic Design principles. It provides a basic structure to help you build modern web applications.

## Features

- **Astro**: A static site generator for fast and optimized applications.
- **Tailwind CSS**: A utility-first CSS framework for custom designs.
- **Atomic Design**: A methodology for creating reusable design components.

## Project Structure

The project follows Atomic Design principles:

```bash
📂src
  📂components    # Atomic components (buttons, inputs, etc.)
    📁atoms       # Atomic components (buttons, inputs, etc.)
    📁molecules   # Molecular components (forms, cards, etc.)
    📁organisms   # Organism components (navigation, sections, etc.)
  📁pages         # Site pages
  📁styles        # Global styles and Tailwind configuration
```

## Usage

To start the development server, run:

```bash
  npm run dev
```

Your app will be available at http://localhost:4321

To build your production version, run:

```bash
 npm run build
```

This will create a `/dist` folder with the static files ready for deployment.

## Run in Docker

To run the application using Docker, you can use the following command:

```bash
  docker build -t {{name}} .
  docker run -p 80:80 {{name}}
```

This will build a Docker image from the current directory and then run it. The app will be available at http://localhost
