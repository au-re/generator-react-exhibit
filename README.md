[![exhibit banner](https://raw.githubusercontent.com/au-re/react-exhibit/gh-pages/static/media/exhibit_boilerplate.png)](https://github.com/au-re/generator-react-exhibit/)
[![License](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)](https://github.com/au-re/generator-react-exhibit/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/generator-react-exhibit)
[![dependencies Status](https://david-dm.org/au-re/generator-react-exhibit/status.svg?style=flat-square)](https://david-dm.org/au-re/generator-react-exhibit)
[![devDependencies Status](https://david-dm.org/au-re/generator-react-exhibit/dev-status.svg?style=flat-square)](https://david-dm.org/au-re/generator-react-exhibit?type=dev)

A generator to create your own React component library, including
documentation. It is built on top of [create-react-app](https://github.com/facebookincubator/create-react-app).
It uses the [react-exhibit-template](https://github.com/au-re/react-exhibit-template) as a basis.

You can view it in action [here](https://au-re.github.io/react-exhibit-template/).

## Getting Started

You will need [Yeoman](http://yeoman.io/) installed to use this generator.
You can install both with the following commands:

```shell
npm i -g yo
npm i -g generator-react-exhibit
```

Once installed you can run the generator:

```shell
yo react-exhibit my-library
```

It will create a directory called `my-library` inside the current folder.
To view your library in action run:

```shell
cd my-library
npm start
```

Then open http://localhost:3000/ to see your library documentation.

## Demoing your components

You can add a `demo` folder in each of your component folders. In the demo
folder you can add as many demos as you want. Each demo file will automatically
be rendered and the source displayed.

In addition you can comment your code using JSDOC syntax. This information will
then also be displayed in the documentation.

e.g.
```js
/**
 * A showcase component, renders a react component and displays source code.
 *
 * @export
 * @param {string} demo - the react demo to be run
 * @param {string} source - the source code to be displayed
 * @return {object} Showcase Component
 */
const Showcase = ({ source, demo }) => ( ... );
```

**NOTE:**

- Only comments with the `@export` tag will be shown in the documentation.
- Only comments of a component with a demo will be shown.

To view your component documentation run:

```shell
npm start
```

Then open http://localhost:3000/ to see your library documentation.

## Building your components

You can create a production ready website for your documentation with:

```shell
npm run build
```

To view the production ready documentation you can run:

```shell
serve -s build
```

You can build your library with:

```shell
npm run build:lib
```

After running this command your library will be found in the `lib` folder.

Make sure you export your components from `lib.js`. Only the components
exported here will be part of your library.

## Testing your components

Before publishing your components, the linter and tests will automatically run.
You can also run them manually with:

```shell
npm run test
```

## Publishing your library

You can easily deploy your library documentation to github pages. To do that,
add the field `homepage: <YOUR_GITHUB_PAGE_URL>` to `package.json`.

Then run:

```shell
npm run deploy
```

You can publish your library to `npm`. To do that, simply run:

```shell
npm publish
```