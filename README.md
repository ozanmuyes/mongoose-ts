# Mongoose TS

> Code your Mongoose models in TS and test them via Jest

## Raison d'être

<!-- This project was an internal learning resource initially, and then we thought why not to give _something_ back to community? One should treat this repository as such, a learning resource, instead of a tutorial or a guide. -->

The goal of this repository is to create an environment to code valid (that is working correctly and typed correctly) Mongoose models in TypeScript and test them via Jest. Because I find the [Mongoose TS documentation](https://mongoosejs.com/docs/typescript.html) inadequate and I think the Mongoose TS support is not good.
This project is all about models and their tests. There is no package.json script to _run_ the project or any VS Code launch configuration. The best thing you can do either run `yarn test` (or `yarn test:watch`) to run tests or launch `run test file` configuration on VS Code to start debugging currently focused test file.

## A bit of internals

While testing, [mongodb-memory-server](https://github.com/nodkz/mongodb-memory-server) "spins up an actual/real MongoDB server programmatically". This enables us to call Mongoose model methods (e.g. `ModelClass.create()`, `modelInstance.save()`) and run mongo shell commands (e.g. `db.collectionName.findOne({})`) on our tests.

Also to easen the test environment configuration a Jest preset was used, [@shelf/jest-mongodb](https://github.com/shelfio/jest-mongodb). Even though the project uses MongoDB version 4.2.0, you may change it. Please refer to its documentation for further information and usage details.

## Usage

1. Clone the repo
   ```shell
   git clone https://github.com/ozanmuyes/mongoose-ts.git
   ```

1. Install dependencies

   **NOTE**: Please be advised the default MongoDB version that is going to be installed is 4.2.0. Before installing dependencies you may want to change MongoDB version. To get to know how to do that please refer to [installation documentation](https://github.com/nodkz/mongodb-memory-server#installation) of `mongodb-memory-server`.

   ```shell
   yarn
   ```

1. Test
   ```shell
   yarn test
   ```
   or
   ```shell
   yarn test:watch
   ```

   You may run or watch on a subset of test files. Please consult Jest CLI arguments, namely [testNamePattern](https://jestjs.io/docs/cli#--testnamepatternregex) and [testPathPattern](https://jestjs.io/docs/cli#--testpathpatternregex).<br />
   Better yet, to simply ["run only the tests that were specified with a pattern or filename"](https://jestjs.io/docs/cli#running-from-the-command-line) use this command;

   ```shell
   yarn test User
   ```
   or
   ```shell
   yarn test:watch models/User
   ```

1. Code

   Have your own Mongoose models and their corresponding tests to test your real-world use-cases.

## How this project bootstrapped?

You know, getting TS environment setup for Node.js is a tedious task. Plus if you have your own preferences like me, to carry on to new projects, like `.editorconfig`, ESLint config, having `main` as the default branch name for git, ... it only got worse. Every time you wanted to create such a TS project, either you need to copy the existing one and start removing things or you have to gone through all the steps to set a new TS environment from scratch.

Been there, done that. Therefore I created this project, [kreate](https://github.com/ozanmuyes/kreate) to "Kick-start your next project, just the way you like it". _Bold words_.<br />The goal is to have a "script" and maybe some "contents" as the "template", and to be able to create a new project automatically using it. Currently "script" is a JavaScript file, that gets some predefined functions injected, and "contents" are some files and folders that you see fit.

_I am trying to port it to Rust and use [Rhai script](https://github.com/rhaiscript/rhai) as the "script" language. Any suggestions and / or help are welcome._

So I have created a "kreate template" and used it to bootstrap this project.

TODO Include the kreate template link
