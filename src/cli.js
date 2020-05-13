#! /usr/bin/env node
/* eslint-disable no-console */
const { argv } = require('yargs');
const colors = require('colors/safe');
const { MDLinks } = require('./mdLinks');

const filePath = argv._[0];
const { validate } = argv;
const { stats } = argv;

if (filePath) {
  MDLinks.mdLinks(filePath, { validate }).then((result) => {
    if (stats && validate) {
      const linkContainer = result.map((element) => element.href);
      const linkStatus = result.map((element) => element.statusText);
      const linkBroken = [];
      const uniqueLink = new Set(linkContainer);
      linkStatus.forEach((element) => {
        if (element !== 'OK') {
          linkBroken.push(element);
        }
      });

      const showStats = ` ${colors.cyan(`Total : ${linkContainer.length}`)} \n ${colors.green(`Unique: ${uniqueLink.size}`)} \n ${colors.red(`Broquen: ${linkBroken.length}`)} `;
      console.log(showStats);
    } else if (validate) {
      result.forEach((e) => {
        console.log(colors.brightWhite('-'.repeat(process.stdout.columns)));
        const getData = ` > ${colors.white(e.path)} \n > ${colors.cyan(e.href)} \n > ${e.statusText === 'OK' ? colors.green(e.statusText) : colors.red(e.statusText)} \n > ${colors.yellow(e.status)} \n > ${colors.magenta(e.text)}`;
        console.log(getData);
      });
    } else if (stats) {
      const linkContainer = result.map((element) => element.href);
      const uniqueLink = new Set(linkContainer);
      const showStats = ` Total : ${linkContainer.length} \n Unique: ${uniqueLink.size} `;
      console.log(showStats);
    } else {
      result.forEach((e) => {
        console.log(colors.brightWhite('-'.repeat(process.stdout.columns)));
        const getData = ` > ${colors.white(e.path)} \n > ${colors.cyan(e.href)} \n > ${colors.magenta(e.text)}`;
        console.log(getData);
      });
    }
  }).catch((error) => {
    console.log(colors.red(error.message));
  });
} else {
  const help = `
  Usage : md-links <path-to-file> [options] \n
  Options:
    --validate \t\t Se realiza la petición HTTP para verificar si el link funciona o no.
    --stats \t\t Estadísticas básicas sobre los links.
    --stats --validate \t Se realiza la petición HTTP para verificar si el link  y se muestran estadísticas.`;
  console.log(colors.brightBlue(help));
}
