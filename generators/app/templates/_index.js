/*  eslint-disable */
import "../node_modules/react-exhibit/lib/css/main.css";

import { Exhibit, GithubCorner } from "react-exhibit";

import Markdown from "markdown-to-jsx";
import React from "react";
import ReactDOM from "react-dom";
import readme from "../README.md";
import registerServiceWorker from './registerServiceWorker';

/* FETCH THE DEMO DATA */

// .../MySubComponent/${stop}/... -> 'MySubComponent'
function extractComponentName(path, stop) {
  const arr = path.split("/");
  return arr[arr.indexOf(stop) - 1];
}

// .../MySubComponent/${stop}/... -> .../MySubComponent
function extractComponentPath(path, stop) {
  const arr = path.split("/");
  return arr.splice(0, arr.indexOf(stop)).join("/");
}

// .../MySubComponent/demo/usage.js -> usage
function extractDemoName(path) {
  return path.split("/").slice(-1)[0].slice(0, -3);
}

// get the file at the root of the folder
function getComponentIndex(path) {
  return extractComponentPath(path, "demo") + "/index.js";
}

function getComponentReadme(path) {
  return extractComponentPath(path, "demo") + "/README.md";
}

// only render documentation with the tag "export"
function filterDocs(docs) {
  return docs.filter((doc) => doc.comment && doc.tags);
}

/**
 * Go through the entire ./src folder, load all demos from the `demo` folders
 * If a `demo` folder was present also load the JSDOC documentation of the
 * component. Creates an object for each component and add to it:
 *
 * 1. the demos
 * 2. the raw code of the demos
 * 3. the JSDOC infos from the component `index.js`
 *
 * Nested components will also be handled properly.
 * If you don't want a component to be demoed, simply don't add a `demo` folder
 * to it.
 *
 * @returns {object} - object with values to be rendered in the docs
 */
function requireAllDemos() {
  const components = {};

  const demoSources = require.context("!!raw-loader!./", true, /demo\/.*\.js$/);
  const demos = require.context("./", true, /demo\/.*\.js$/);

  const readMes = require.context("./", true, /.*[^.]\/README.md$/);
  const docs = require.context("!!raw-loader!jsdoc2js-loader!./", true, /.*[^.]\/index.js/);

  demos.keys().forEach((key) => {
    const componentPath = extractComponentPath(key, "demo");
    const componentName = extractComponentName(key, "demo");
    const demoName = extractDemoName(key);

    // initiate component if no demo was found for it
    if (!components[componentName]) {
      components[componentName] = {
        demo: {},
        docs: {},
        readme: ""
      }
    }

    // load a demo
    components[componentName].demo = Object.assign({}, components[componentName].demo, {
      [demoName]: {
        source: demoSources(key),
        component: demos(key)
      }
    })

    if (docs.keys().includes(getComponentIndex(key))) {
      components[componentName].docs = filterDocs(docs(getComponentIndex(key)));
    }

    if (readMes.keys().includes(getComponentReadme(key))) {
      components[componentName].readme = readMes(getComponentReadme(key))
    }
  });

  return components;
}

/* RENDER THE DEMO DATA */

ReactDOM.render(
  <div>
    <GithubCorner style={{ position: "fixed", zIndex: 13 }} size="80" bannerColor="#F9AE15" />
    <Exhibit
      readme={<Markdown>{readme}</Markdown>}
      baseURL={process.env.PUBLIC_URL}
      libName="<%= appName %>"
      components={requireAllDemos()} />
  </div>,
  document.getElementById("root"));

registerServiceWorker();
