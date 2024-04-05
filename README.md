# TypeScript - Easy Beginning Tutorial

**_To read this with better formatting, right-click on the file in Explorer, choose "Open With", then select "Markdown Preview"._**

This is a small project aimed at demonstrating how to start coding with TypeScript without worrying about compiling it each time you need to run your code. TypeScript is awesome, but the fact that we need to compile it to JavaScript can be annoying, especially for beginners. So, here are my tips after some research to make your start easy and satisfactory!

## Table of Contents

1. [GitHub Account](#github-account)
2. [Install All Dependencies](#install-all-dependencies)
3. [VS Code and Extensions](#vs-code-and-extensions)
4. [Prepare Your Local Repo](#prepare-your-local-repo)
5. [Install TypeScript on Your Repo](#install-typescript-on-your-repo)
6. [Update tsconfig.json File](#update-tsconfigjson-file)
7. [NPM Configuration](#npm-configuration)
8. [Create Your First TypeScript Code](#create-your-first-typescript-code)
9. [Configure Auto Compile and Run Current File Code](#configure-auto-compile-and-run-current-file-code)
10. [Run Your Code](#run-your-code)
11. [Update Your Code and Run It Again](#update-your-code-and-run-it-again)
12. [Optionals](#optionals)

### GitHub Account

This is mandatory 😁 (Hey, I am here, right?)

### Install All Dependencies

-   [Node.js](https://nodejs.org/en/download/current)
-   [TypeScript](https://www.typescriptlang.org/download)
-   [Git](https://git-scm.com/downloads)

### VS Code and extensions

VS Code is mandatory but extensions are optional but highly recommended

-   [VS Code](https://code.visualstudio.com/)
-   [Material Icon](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
-   [TypeScript](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [Dracula Pure](https://marketplace.visualstudio.com/items?itemName=blackblackcat.dracula-pure)
-   [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [TabNine](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)
-   [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

### Prepare Your Local Repo

-   Create a new folder
-   Open New Terminal on VS Code
-   Command: `git init`
-   Create `.gitignore` file
-   Create `README.md` file
-   Open Source Control on VS Code and commit your changes
-   Publish your branch
-   Create a branch from master (Optional)

### Install TypeScript on Your Repo

-   Command 1: `npm install -g typescript`
-   Command 2: `tsc --init` (tsconfig.json will be added automatically to your project folder, no need to modify for now)

### Update tsconfig.json File

-   Change line to `"outDir": "./output",`
-   Uncomment `sourceMap` line

### NPM Configuration

-   Command: `npm init`
-   Open `package.json` file that was created on the step before and add the following line inside "scripts": `"build": "tsc"`

### Create Your First TypeScript Code

-   Add a `src` folder
-   Add an `output` folder
-   Add `<nameYouWant>.ts` file into `src` folder
-   Add the following code to it:
    ```typescript
    class MyFirstCode {
        name: string
        age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
    }

    class Greetings extends MyFirstCode {
        greet() {
            console.log(
                `Hello ${this.name}! Congrats! Your age is ${this.age}!`
            )
        }
    }

    const person = new Greetings('John', 25)
    person.greet()
    ```

### Configure Auto Compile and Run Current File Code

-   Open `RUN AND DEBUG` menu on VS Code
-   Select `create a launch.json file`
-   Select `Node.js` option
-   Add the following lines inside configurations:
    ```json
    "preLaunchTask": "npm: build",
    "console": "integratedTerminal",
    ```
-   Modify line to `"program": "${file}",`

### Run Your Code

-   Press `F5` and see the magic happens!🧙‍♂️
    -   JavaScript files should be created into `output` folder
    -   Terminal should open with compiling status
    -   After compiling, TypeScript code should run successfully

### Update Your Code and Run It Again

-   It should update and run automatically according to your changes 🤖

### Optionals

-   Add `output` folder to .gitignore
-   Commit your changes to your repository
-   Check out your GitHub repository
-   Always commit your changes and follow it with GitLens
-   Add ESLint integration to your project (Google it)
-   Add Husky integration and pre-commit configurations (Google it)

**❤️💻HAPPY CODING!!!💻❤️**

npm add -D eslint
npx eslint --init
You can also run this command directly using 'npm init @eslint/config'.
√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · node
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · standard-with-typescript
√ What format do you want your config file to be in? · JSON
Checking peerDependencies of eslint-config-standard-with-typescript@latest
The config that you've selected requires the following dependencies:
eslint-config-standard-with-typescript@latest @typescript-eslint/eslint-plugin@^6.4.0 eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 || ^16.0.0 eslint-plugin-promise@^6.0.0 typescript@\*
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm

`"scripts": {
        "lint": "eslint ./src/**/*.ts --fix",...`
npm add -D husky
`"scripts": {
        "lint": "eslint ./src/**/*.ts --fix",
        "prepare": "husky install",...`
npm run prepare

move pre-commit file to first level husky folder 
add the following lines:
    `. "$(dirname -- "$0")/_/husky.sh"

    npm run lint
    exit code 0`