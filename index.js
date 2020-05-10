const { argv } = require('yargs');
const { mdLinks } = require('./src/mdLinks.js');

const filePath = argv.path;
mdLinks(filePath, { validate: true }).then((showLinkData) => {
  console.log(showLinkData);
}).catch((error) => {
  console.log(error);
});
