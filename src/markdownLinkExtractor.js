const marked = require('marked');

const markdownLinkExtractor = (markdown, path) => {
  const links = [];
  const renderer = new marked.Renderer();
  // eslint-disable-next-line no-useless-escape
  const linkWithImageSizeSuport = /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?)\]\(\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?(?:\s+=(?:[\w%]+)?x(?:[\w%]+)?)?)(?:\s+("(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)))?\s*\)/;

  marked.InlineLexer.rules.normal.link = linkWithImageSizeSuport;
  marked.InlineLexer.rules.gfm.lik = linkWithImageSizeSuport;
  marked.InlineLexer.rules.breaks.link = linkWithImageSizeSuport;

  renderer.link = (href, title, text) => {
    const linkDataObject = {
      path,
      href,
      text,
    };
    links.push(linkDataObject);
  };

  renderer.image = (href, title, text) => {
    const hrefPrepare = href.replace(/ =\d*%?x\d*%?$/, '');
    const linkDataObject = {
      path,
      href: hrefPrepare,
      text,
    };
    links.push(linkDataObject);
  };

  marked(markdown, { renderer });
  return links;
};

module.exports.markdownLinkExtractor = markdownLinkExtractor;
