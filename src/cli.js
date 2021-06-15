const program = require('commander');

const pkg = require('../package.json');
const { initGenerateComponentCommand } = require('./commands/generateComponent');
const { initGenerateRouteCommand } = require('./commands/generateRoute');
const { getCLIConfigFile } = require('./utils/grcConfigUtils');

module.exports = async function cli(args) {
  const cliConfigFile = await getCLIConfigFile();

  // Initialize generate component command
  console.log(args);
  if (args[2] === 'route') {
    initGenerateRouteCommand(args, cliConfigFile, program);
  } else {
    initGenerateComponentCommand(args, cliConfigFile, program);
  }

  program.version(pkg.version);
  program.parse(args);
};
