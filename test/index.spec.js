import markdownLinkExtractor from '../src/markdownLinkExtractor';

const fileContent = `# Esto es solo la prueba del lectura de archivo.
![imagen1](./img.png)
## se tiene que reconocer los links nada mas
Puede existir saltos de linea
[LINK](https://rogerdudler.github.io/git-guide/index.es.html)`;

const arrayGetLinkData = [
  {
    path: './prueba.md',
    href: './img.png',
    text: 'imagen1',
  },
  {
    path: './prueba.md',
    href: 'https://rogerdudler.github.io/git-guide/index.es.html',
    text: 'LINK',
  },
];


describe('markdownLinkExtractor', () => {
  it('is a object', () => {
    expect(typeof markdownLinkExtractor).toBe('object');
  });

  describe('markdownLinkExtractor.markdownLinkExtractor', () => {
    it('is a function', () => {
      expect(typeof markdownLinkExtractor.markdownLinkExtractor).toBe('function');
    });

    it('Deria retornar una array de objetos', () => {
      expect(markdownLinkExtractor.markdownLinkExtractor(fileContent, './prueba.md')).toEqual(arrayGetLinkData);
    });
  });
});
