const fetch = require('node-fetch');

const validateLinks = (url) => {
  return new Promise ((resolve, rejected) => {
    fetch(url).then((res) => {
      const validateLinkStatus = [];
      const linkStatusData = {
        status: res.status,
        statusText: res.statusText,
      };
      validateLinkStatus.push(linkStatusData);
      resolve(validateLinkStatus);
    }).catch((error) => {
      rejected(error);
    });
  });
};

// let result = validateLinks('https://nodejs.org/dist/lest-v12.x/docs/api/')

// result.then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// })

// let links = [
//     'https://nodejs.org/dist/lest-v12.x/docs/api/',
//     'https://www.google.com'
// ]


// links.forEach(element => {
//     validateLinks(element)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// });
