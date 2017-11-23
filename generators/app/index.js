const Generator = require("yeoman-generator");
const chalk = require("chalk");
const path = require("path");

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

  _logMissingAppName() {
    this.log("Please specify the project directory:");
    this.log(`${chalk.cyan("yo react-exhibit")} ${chalk.green("<project-directory>")}`);
    this.log("");
    this.log("For example:");
    this.log(`${chalk.cyan("yo react-exhibit")} ${chalk.green("my-react-exhibit")}`);
    this.log("");
  }

  _logHelp() {
    this.log(`Run ${chalk.cyan("yo react-exhibit --help")} to see all options.`);
    this.log("");
  }

  _logScaffolding() {
    this.log(`Creating a new React library in ${chalk.green(this._getTargetDirectory())}`);
    this.log("");
  }

  _logInstallation() {
    this.log("");
    this.log("Installing packages. This might take a couple of minutes.");
    this.log("");
  }

  _logDone() {
    this.log("");
    this.log(`Success! Created ${chalk.green(this.options.appName)} at ${chalk.green(this._getTargetDirectory())}`);
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

  writing() {
    this._logScaffolding();
    this.fs.copy(
      this.templatePath("_scripts"),
      this.destinationPath(`${this.options.appName}/scripts`));

    this.fs.copy(
      this.templatePath("_src"),
      this.destinationPath(`${this.options.appName}/src`));

    this.fs.copy(
      this.templatePath("_config"),
      this.destinationPath(`${this.options.appName}/config`));

    this.fs.copy(
      this.templatePath("_public"),
      this.destinationPath(`${this.options.appName}/public`));

    this.fs.copy(
      this.templatePath("_.npmignore"),
      this.destinationPath(`${this.options.appName}/.npmignore`));

    this.fs.copy(
      this.templatePath("_.gitignore"),
      this.destinationPath(`${this.options.appName}/.gitignore`));

    this.fs.copyTpl(
      this.templatePath("_index.html"),
      this.destinationPath(`${this.options.appName}/public/index.html`),
      { appName: this.options.appName });

    this.fs.copyTpl(
      this.templatePath("_manifest.json"),
      this.destinationPath(`${this.options.appName}/public/manifest.json`),
      { appName: this.options.appName });

    this.fs.copyTpl(
      this.templatePath("_package.json"),
      this.destinationPath(`${this.options.appName}/package.json`),
      { appName: this.options.appName });

    this.fs.copyTpl(
      this.templatePath("_index.js"),
      this.destinationPath(`${this.options.appName}/src/index.js`),
      { appName: this.options.appName });

    this.fs.copyTpl(
      this.templatePath("_README.md"),
      this.destinationPath(`${this.options.appName}/README.md`),
      { appName: this.options.appName });
  }

  install() {
    this._logInstallation();
    process.chdir(this._getTargetDirectory());
    this.installDependencies({
      npm: true,
      bower: false,
      skipMessage: true,
      callback: () => this._logDone()
    });
  }
};
