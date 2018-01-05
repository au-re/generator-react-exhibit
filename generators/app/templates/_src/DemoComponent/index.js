import "./DemoComponent.css";

import { Icon } from "react-exhibit";
import React from "react";

/**
 * A simple component to showcase the usage of this boilerplate. Note that
 * only JSDOC comments with the @export tag will be added to the documentation.
 *
 * @export
 * @param {string} [label=hello world!] - a label to be displayed under the icon
 * @return {object} - DemoComponent
 */
const DemoComponent = ({ label = "hello world!" }) => (
  <div className="DemoComponent">
    <Icon />
    <p>{label}</p>
  </div>);

export default DemoComponent;
