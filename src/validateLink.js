const fetch = require('node-fetch');

const validateLinks = (objectDataLink) => new Promise((resolve) => {
  const linkStatusData = {
    path: objectDataLink.path,
    href: objectDataLink.href,
    text: objectDataLink.text,
  };
  fetch(objectDataLink.href).then((res) => {
    linkStatusData.status = res.status;
    linkStatusData.statusText = res.statusText;
    resolve(linkStatusData);
  }).catch(() => {
    linkStatusData.status = 418;
    linkStatusData.statusText = 'ERROR';
    resolve(linkStatusData);
  });
});

module.exports.validateLinks = validateLinks;
