# <%= appName %>

## Demoing your components

You can add a `demo` folder in each of your component folders. In the demo
folder you can add as many demos as you want. Each demo file will automatically be rendered and
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
npm install -g serve
serve -s build
```

Before publishing your library to npm, you will need to build it:

```shell
npm run build:dist
```

After running this command your library will be found in the `dist` folder.

Make sure you export your components from `index.js`. Only the components
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

`npm publish`
