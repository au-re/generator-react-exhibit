const Generator = require("yeoman-generator");
const chalk = require("chalk");
const path = require("path");

const typescriptPackage = require("./templates/react-exhibit-template-typescript/package.json");
const defaultPackage = require("./templates/react-exhibit-template/package.json");
const typescriptPackageLock = require("./templates/react-exhibit-template-typescript/package-lock.json");
const defaultPackageLock = require("./templates/react-exhibit-template/package-lock.json");

const generatorName = "react-exhibit";

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.argument("appName", { type: String, required: false });

    if (!this.options.appName && !this.options.help) {
      this._logMissingAppName();
      this._logHelp();
      process.exit(1);
    }
  }

  // private functions are prefixed with "_" (else they are executed in order)

  _logMissingAppName() {
    this.log("Please specify the project directory:");
    this.log(`${chalk.cyan(`yo ${generatorName}`)} ${chalk.green("<project-directory>")}`);
    this.log("");
    this.log("For example:");
    this.log(`${chalk.cyan(`yo ${generatorName}`)} ${chalk.green("my-project")}`);
    this.log("");
  }

  _logHelp() {
    this.log(`Run ${chalk.cyan(`yo ${generatorName} --help`)} to see all options.`);
    this.log("");
  }

  _logScaffolding() {
    this.log(`Creating a new react library in ${chalk.green(this._getTargetDirectory())}`);
    this.log("");
  }

  _logInstallation() {
    this.log("");
    this.log("Installing packages. This might take a couple of minutes.");
    this.log("");
  }

  _logDone() {
    this.log("");
    this.log(`Success! Created ${chalk.green(this.options.appName)} at ${chalk.green(process.cwd())}`);
    this.log("Inside that directory, you can run several commands:");
    this.log("");
    this.log(`Run ${chalk.cyan("npm start")} to start the development server.`);
    this.log(`Run ${chalk.cyan("npm run build")} to bundle the app into static files for production.`);
    this.log(`Run ${chalk.cyan("npm test")} to start the test runner.`);
    this.log("");
    this.log("We suggest that you begin by typing:");
    this.log(chalk.cyan("cd"), chalk.green(this.options.appName));
    this.log(chalk.cyan("npm start"));
    this.log("");
    this.log("Happy hacking!");
    this.log("");
  }

  _getTargetDirectory() {
    return path.join(process.cwd(), this.options.appName);
  }

  async _promptUser() {
    const answers = await this.prompt([
      {
        type: "confirm",
        name: "useTypescript",
        message: "Use typescript?",
        default: false,
      },
      {
        type: "input",
        name: "homepageUrl",
        message: "(Optional) Your projects homepage url",
        default: "https://github.com/au-re/generator-react-exhibit",
      },
    ]);
    return answers;
  }

  async writing() {
    this._logScaffolding();

    const { useTypescript, homepageUrl } = await this._promptUser();

    const templateName = useTypescript
      ? "react-exhibit-template-typescript"
      : "react-exhibit-template";

    const packageConfig = useTypescript
      ? typescriptPackage
      : defaultPackage;

    const packageLockConfig = useTypescript
      ? typescriptPackageLock
      : defaultPackageLock;

    packageConfig.name = this.options.appName;
    packageLockConfig.name = this.options.appName;

    this.fs.copy(
      this.templatePath(`${templateName}/.plop`),
      this.destinationPath(`${this.options.appName}/.plop`));

    this.fs.copy(
      this.templatePath(`${templateName}/src`),
      this.destinationPath(`${this.options.appName}/src`));

    this.fs.copy(
      this.templatePath(`${templateName}/.storybook`),
      this.destinationPath(`${this.options.appName}/.storybook`));

    this.fs.copyTpl(
      this.templatePath(`${templateName}/.storybook/theme.js`),
      this.destinationPath(`${this.options.appName}/.storybook/theme.js`),
      { appName: this.options.appName, homepageUrl });

    // storybook theme data
    this.fs.copyTpl(
      this.templatePath(`${templateName}/.storybook/theme.js`),
      this.destinationPath(`${this.options.appName}/.storybook/theme.js`),
      { appName: this.options.appName, homepageUrl });

    this.fs.copyTpl(
      this.templatePath("_README.md"),
      this.destinationPath(`${this.options.appName}/README.md`),
      { appName: this.options.appName });

    // add gitignore this way, since npm just removes it from packages
    this.fs.copy(
      this.templatePath("_gitignore"),
      this.destinationPath(`${this.options.appName}/.gitignore`));

    // add npmignore this way, otherwise template is not added to npm
    this.fs.copy(
      this.templatePath("_npmignore"),
      this.destinationPath(`${this.options.appName}/.npmignore`));

    this.fs.writeJSON(
      this.destinationPath(`${this.options.appName}/package.json`),
      packageConfig, { homepageUrl });

    this.fs.writeJSON(
      this.destinationPath(`${this.options.appName}/package-lock.json`),
      packageLockConfig);

    if (!useTypescript) {
      this.fs.copy(
        this.templatePath(`${templateName}/public`),
        this.destinationPath(`${this.options.appName}/public`));

      this.fs.copy(
        this.templatePath(`${templateName}/config-overrides.js`),
        this.destinationPath(`${this.options.appName}/config-overrides.js`));

      this.fs.copy(
        this.templatePath(`${templateName}/.eslintrc`),
        this.destinationPath(`${this.options.appName}/.eslintrc`));

      // skip CRA preflight checks
      this.fs.copy(
        this.templatePath(`_env`),
        this.destinationPath(`${this.options.appName}/.env`));
    }

    if (useTypescript) {
      this.fs.copy(
        this.templatePath(`${templateName}/.eslintrc.json`),
        this.destinationPath(`${this.options.appName}/.eslintrc.json`));

      this.fs.copy(
        this.templatePath(`${templateName}/rollup.config.js`),
        this.destinationPath(`${this.options.appName}/rollup.config.js`));

      this.fs.copy(
        this.templatePath(`${templateName}/tsconfig.json`),
        this.destinationPath(`${this.options.appName}/tsconfig.json`));
    }
  }

  install() {
    this._logInstallation();
    process.chdir(this._getTargetDirectory());
    this.npmInstall();
  }

  end() {
    this._logDone();
  }
};
