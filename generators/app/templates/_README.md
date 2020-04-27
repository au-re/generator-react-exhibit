[npm-url]: https://www.npmjs.com/package/<%= appName %>
[npm-image]: https://badge.fury.io/js/<%= appName %>.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[license-url]: https://github.com/au-re/<%= appName %>/LICENSE

<p align="center">
  <img src="https://raw.githubusercontent.com/au-re/generator-react-exhibit/master/assets/icon.png"/>
</p>

# <%= appName %>

[![npm][npm-image]][npm-url]
[![Commitizen friendly][commitizen-image]][commitizen-url]

> Some information about this library

You can see it in action here <%= homepageUrl %>

## Example Usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Logo } from "<%= appName %>";

ReactDOM.render(Logo, document.getElementById('root'));
```

## Getting Started

This section gives a quick example on how to get started.

### Installation

<%= appName %> can be installed via [npm](https://www.npmjs.com/package/<%= appName %>).

```
$ npm i -S <%= appName %>
```

or from a CDN

```html
<script src="https://unpkg.com/<%= appName %>/lib/index.min.js"></script>
```

## API

This section describes the API of the library.

> ### `some.function`

Some function that does something.

```js
some.function(does, something)
```

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| `does` | `type` | description | required |
| `something` | `type` | description | - |

## Contributing

We use the [airbnb style guide](https://github.com/airbnb/javascript) when writing javascript, with
some minor modifications. Make sure eslint is installed and running before making changes, as it
will ensure your coding style matches that of the project.

We use [commitizen](https://github.com/commitizen/cz-cli) and
[angular's conventional changelog](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)
to enforce a consistent commit format. When writing commits, make sure you run `npm run commit`
instead of `git commit`.

## License

[MIT](license-url)
