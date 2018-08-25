const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-refresh:app", () => {
  beforeAll(() => helpers
    .run(path.join(__dirname, "../generators/app"))
    .withArguments(["ci"]));

  it("creates files", () => {
    assert.file([
      "package.json",
      "README.md",
    ]);
  });
});
