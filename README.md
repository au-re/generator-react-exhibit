[![exhibit banner](https://raw.githubusercontent.com/au-re/react-exhibit/gh-pages/static/media/exhibit_boilerplate.png)](https://github.com/au-re/react-exhibit-boilerplate/)
[![License](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)](https://github.com/au-re/react-exhibit-boilerplate/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/react-exhibit-boilerplate)

# react-exhibit-boilerplate

A boilerplate to create your own React component library, built with [create-react-app](https://github.com/facebookincubator/create-react-app).
Uses the [react-exhibit](https://github.com/au-re/react-exhibit) components for visualization.

You can view it in action [here](https://au-re.github.io/react-exhibit/).

## Using the boilerplate

Clone the repository

```shell
git clone https://github.com/au-re/react-exhibit-boilerplate.git
cd react-exhibit-boilerplate
```

Change the `package.json` and `README.md` information.

### Displaying your components

You can add a `demo` folder in a components folder. In this folder you can add
as many demos as you want. Each demo file will automatically be rendered and
the source displayed.

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

Only comments with the `@export` tag will be shown in the documentation.
Only comments of a component with a demo will be shown.

To view your component documentation run:

```shell
npm start
```

### Building your components

You can create a production ready website for your documentation with:

```shell
npm run build
```

You can build your library with:

```shell
npm run build:dist
```

After running this command your library will be found in the `dist` folder.

Make sure you export your components from `index.js`. Only the components
exported here will be part of your library.

### Testing your components

Before publishing or commiting your components, the linter and tests will
automatically run. You can also run them manually with:

```shell
npm run test
```

### Publishing your library

You can easily deploy your library documentation to github pages. To do that,
add the field `homepage: <YOUR_GITHUB_PAGE_URL>` to `package.json`.

Then run:
```shell
npm run deploy
```

You can publish your library to `npm`. To do that, simply run:

`npm publish`
