/*  eslint-disable */
import "../node_modules/react-exhibit/lib/css/main.css";

import { Demo } from "react-exhibit";
import Markdown from "markdown-to-jsx";
import React from "react";
import ReactDOM from "react-dom";
import readme from "../README.md";
import registerServiceWorker from './registerServiceWorker';

/* FETCH THE DEMO DATA */

// .../MySubComponent/${stop}/... -> 'MySubComponent'
function extractComponentName(path, stop) {
  const pathSplit = path.split("/");
  return pathSplit[pathSplit.indexOf(stop) - 1];
}

// only render documentation that was made by the developer
function filterDocs(docs) {
  return docs.filter((doc) => doc.comment && doc.tags && doc.tags[0].title === "export");
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
  const docs = require.context("!!raw-loader!jsdoc2js-loader!./", true, /.*[^.]\/index.js/);

  demos.keys().forEach((key) => {
    const name = extractComponentName(key, "demo");
    if (!components[name]) {
      components[name] = { source: [], demo: [] };
    }
    components[name].source.push(demoSources(key));
    components[name].demo.push(demos(key));
  });

  docs.keys().forEach((key) => {
    const name = extractComponentName(key, "index.js");
    if (components[name]) {
      components[name].docs = filterDocs(docs(key));
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
      label="<%= appName %>"
      components={requireAllDemos()} />
  </div>,
  document.getElementById("root"));

registerServiceWorker();
