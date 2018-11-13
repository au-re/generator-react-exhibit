[![exhibit banner](https://raw.githubusercontent.com/au-re/react-exhibit/gh-pages/static/media/exhibit_boilerplate.png)](https://github.com/au-re/generator-react-exhibit/)
[![License](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)](https://github.com/au-re/generator-react-exhibit/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/generator-react-exhibit)
[![dependencies Status](https://david-dm.org/au-re/generator-react-exhibit/status.svg?style=flat-square)](https://david-dm.org/au-re/generator-react-exhibit)
[![devDependencies Status](https://david-dm.org/au-re/generator-react-exhibit/dev-status.svg?style=flat-square)](https://david-dm.org/au-re/generator-react-exhibit?type=dev)

A generator to create your own React component library, including
documentation. It is built on top of [create-react-app](https://github.com/facebookincubator/create-react-app).
It uses the [react-exhibit-template](https://github.com/au-re/react-exhibit-template) as a template.

View it live [here](https://au-re.github.io/react-exhibit-template/).

## Requirements

You will need the following software installed on your machine:

- [node](https://nodejs.org/en/)
- [yeoman](http://yeoman.io/)

We recomend installing **node** throught [nvm](https://github.com/creationix/nvm), as well as
updating [npm](https://www.npmjs.com/) to version >=5.

You can install yeoman and this generator with the following commands:
```sh
npm i -g yo generator-react-exhibit
```

## Getting started

Once installed you can generate your new project:

```sh
yo react-exhibit my-library
```

It will create a directory called `my-library` inside the current folder.
To view your library in action run:

```sh
cd my-library
npm start
```

You can now open http://localhost:9009/ and view your component documentation.

To include a component in the storybook, simply add a `<componentName>.stories.js` file in your
component folder, containing the stories you want to show. Have a look at the `Button` component for
an example.

## Scripts

A set of scripts are provided for you to test, build and analyze the project. Have a look at [create react app](https://github.com/facebook/create-react-app) for more information.

### Test

You can run all tests in the project with the following command:

```sh
npm run test
```

You can also generate a website with information on the code coverage with:

```sh
npm run test -- --coverage
```

This will generate a website in the folder `coverage`. You can launch it with any server of your
choice, for example [serve](https://www.npmjs.com/package/serve).

```sh
npm i -g serve && serve coverage
```

### Build

You can build a production ready version of your library by running:

```sh
npm run build
```

This will create a build folder containing your library.

You can also build a production ready version of your documentation by running:

```sh
npm run build:storybook
```

This will create a folder called `storybook-static` with your documentation.

### Deploy

After building your documentation, you can deploy it as a gh-page.
Make sure to add a homepage entry in your `package.json` like so:

```json
{
  "homepage": "https://my-github-name.github.io/my-library/",
}
```

Then simply run:
```sh
npm run deploy
```

You can also publish your library to `npm`. To do that, simply run:

```sh
npm publish
```

### Dependency map

You can generate a map of all dependencies, this can be very usefull when trying to identify a
library causing bloat to the application. After building your application you can generate a map,
by running:

```sh
npm run analyze
```

This will look into your `build` folder and open an interactive map of the dependencies in your
browser.

## Development

Fetch template submodule:

```sh
git submodule update --init
git submodule update --recursive --remote
```

## License

[MIT](https://github.com/au-re/fresh-start/blob/master/LICENSE)
