# TypeScript - Easy Beginning Tutorial

**_To read this with better formatting, right-click on the file in Explorer, choose "Open With", then select "Markdown Preview"._**

This is a project aimed at demonstrating how to code with TypeScript without worrying about transpile it each time you need to run your code. TypeScript is awesome, but the fact that we need to transpile it to JavaScript can be annoying, especially for beginners. So, here is my contribution to help you to learn TypeScript in the easy mode, just clone this repo, follow the instructions and let's code!

## What you will find in this project?
- Auto bundling and running: When you perform any of execution options, the current typescript file will be transpiled to a `js` file in the `dist/` folder, which will be created on the first run and overwrite the previous file on the following run and also will run the `js` file in sequence    
- Lint: EsLint has some settings to help you to avoid common errors when writing code and also will suggest good practices to follow
- Husky: Set to run lint before a commit, others commands can be added accordin your necessity
- Basic typescript examples: These examples help to understand how typescript works, considering that is a beginner level project.

## Execution Options
There's two options to run a TypeScript file on this project:

1- Hit `F5` key

2 - Run following commands on terminal:
* npx webpack --mode development your_file.ts-
* node dist/bundle.js-


## Table of Contents

1. [Install](#install)
2. [VS Code and Extensions](#vs-code-and-extensions)
3. [Prepare Your Local Repo](#prepare-your-local-repo)
4. [Project Dependencies](#project-dependencies)

### Install

- [Node.js](https://nodejs.org/en/download/current)
- [TypeScript](https://www.typescriptlang.org/download)
- [Git](https://git-scm.com/downloads)

### VS Code and Extensions

VS Code is mandatory but extensions are optional but highly recommended.

- [VS Code](https://code.visualstudio.com/)
- [Material Icon](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [TypeScript](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Dracula Pure](https://marketplace.visualstudio.com/items?itemName=blackblackcat.dracula-pure)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [TabNine](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

### Prepare Your Local Repo

- Run `npm ci`

### Project Dependencies

Here is a brief description of each dependency used in the project:

- **`@types/node`**
  - Provides TypeScript type definitions for Node.js, helping to ensure that TypeScript code interacts correctly with Node.js APIs.

- **`@typescript-eslint/eslint-plugin`**
  - An ESLint plugin that provides TypeScript-specific rules, helping to maintain clean and consistent TypeScript code.

- **`cross-env`**
  - Allows you to set environment variables in a way that is compatible with different operating systems, useful for configuring environment variables in npm scripts.

- **`eslint`**
  - A linting tool for JavaScript and TypeScript that analyzes code for patterns and issues, helping to maintain cleaner and error-free code.

- **`eslint-config-prettier`**
  - Disables ESLint rules that may conflict with Prettier, a code formatting tool, allowing Prettier and ESLint to work together without conflicts.

- **`eslint-config-standard-with-typescript`**
  - An ESLint configuration that includes Standard Style rules for JavaScript and TypeScript, ensuring consistent code style.

- **`eslint-plugin-import`**
  - An ESLint plugin that helps to ensure correct and ordered imports in JavaScript/TypeScript code.

- **`eslint-plugin-n`**
  - An ESLint plugin that provides additional rules for Node.js code, ensuring better practices specific to the Node.js environment.

- **`eslint-plugin-prettier`**
  - An ESLint plugin that integrates Prettier directly into the linting process, ensuring that code is formatted correctly according to Prettier rules.

- **`eslint-plugin-promise`**
  - An ESLint plugin that provides rules to improve the use of Promises in JavaScript/TypeScript code, ensuring correct and problem-free usage.

- **`glob`**
  - A library that allows for file and directory matching using glob patterns, useful for tasks like finding TypeScript files.

- **`husky`**
  - A tool that facilitates running scripts in Git hooks (such as `pre-commit` and `pre-push`), helping to ensure code is in a valid state before committing to the repository.

- **`lint-staged`**
  - Runs linters only on files that are about to be committed, improving the efficiency of the linting process and ensuring that only modified files are checked.

- **`prettier`**
  - A code formatting tool that helps to maintain consistent and clean code style by automatically formatting code according to predefined rules.

- **`ts-loader`**
  - A Webpack loader that compiles TypeScript files into JavaScript, integrating TypeScript with the Webpack build process.

- **`ts-node`**
  - A TypeScript executable that allows running TypeScript files directly in Node.js without needing pre-compilation.

- **`ts-node-dev`**
  - A development utility for TypeScript that provides automatic reloading and a faster, more efficient development experience.

- **`typescript`**
  - The TypeScript compiler that transforms TypeScript code into JavaScript, enabling the use of advanced TypeScript features in development.

- **`webpack`**
  - A module bundler for JavaScript that compiles and optimizes code and its assets into one or more output files.

- **`webpack-cli`**
  - A command-line interface for Webpack, allowing you to run and configure Webpack from the terminal.

<style>
  .centered {
    text-align: center;
  }
</style>
<div class="centered">
---------------------------------------------------------------------------------------------------------------------------------
<br></br>
🤖Done with Chat-GPT helping🤖
<br></br>
❤️💻HAPPY CODING!!!💻❤️
<br></br>
---------------------------------------------------------------------------------------------------------------------------------
</div>