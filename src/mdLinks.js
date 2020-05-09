const fs = require('fs');
const pathModule = require('path');
const { markdownLinkExtractor } = require('./markdownLinkExtractor.js');

const readFile = (path) => new Promise((resolve, rejected) => {
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      rejected(error);
    } else {
      const linksData = markdownLinkExtractor(data, path);
      resolve(linksData);
    }
  });
});

const accessTheFolder = (path) => new Promise((resolve, rejected) => {
  fs.readdir(path, (error, files) => {
    if (error) {
      rejected(error);
    } else {
      const promisesFilesMd = [];
      files.forEach((element) => {
        const extractMdFiles = pathModule.extname(element);
        if (extractMdFiles === '.md') {
          const filePath = pathModule.format({
            dir: path,
            base: element,
          });
          const promiseFile = readFile(filePath);
          promisesFilesMd.push(promiseFile);
        }
      });
      Promise.all(promisesFilesMd).then((result) => {
        const allLinks = [];
        result.forEach((element) => {
          element.forEach((linkObject) => {
            allLinks.push(linkObject);
          });
        });
        resolve(allLinks);
      }).catch((err) => {
        rejected(err);
      });
    }
  });
});

const mdLinks = (path) => {
  const pathAbsolute = pathModule.resolve(path);
  return new Promise((resolve, rejected) => {
    fs.stat(pathAbsolute, (error, stats) => {
      if (error) {
        rejected(error);
      } else if (stats.isFile() === true) {
        readFile(pathAbsolute).then((showLinkData) => {
          resolve(showLinkData);
        }).catch((err) => {
          rejected(err);
        });
      } else if (stats.isDirectory() === true) {
        accessTheFolder(pathAbsolute).then((showFolder) => {
          resolve(showFolder);
        }).catch((err) => {
          rejected(err);
        });
      }
    });
  });
};

module.exports.mdLinks = mdLinks;
