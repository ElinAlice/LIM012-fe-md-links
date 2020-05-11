import markdownLinkExtractor from '../src/markdownLinkExtractor';
import validateLinks from '../src/validateLink';
import MDLinks from '../src/mdLinks';

const fileContent = `# Esto es solo la prueba del lectura de archivo.
![imagen1](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-LeAj-rGcmVe0nxDnmIBBkJiuBynxyAACSvArUcrNg1F1zCWR&usqp=CAU)
## se tiene que reconocer los links nada mas
Puede existir saltos de linea
[LINK](https://rogerdudler.github.io/git-guide/index.es.html)`;

const arrayGetLinkData = [
  {
    path: './prueba.md',
    href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-LeAj-rGcmVe0nxDnmIBBkJiuBynxyAACSvArUcrNg1F1zCWR&usqp=CAU',
    text: 'imagen1',
  },
  {
    path: './prueba.md',
    href: 'https://rogerdudler.github.io/git-guide/index.es.html',
    text: 'LINK',
  },
];

const objectLink = {
  path: './prueba.md',
  href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-LeAj-rGcmVe0nxDnmIBBkJiuBynxyAACSvArUcrNg1F1zCWR&usqp=CAU',
  text: 'imagen1',
};

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

describe('validateLinks', () => {
  it('is a object', () => {
    expect(typeof validateLinks).toBe('object');
  });

  describe('validateLinks.validateLinks', () => {
    it('is a function', () => {
      expect(typeof markdownLinkExtractor.markdownLinkExtractor).toBe('function');
    });

    it('Deberia retornar un nuevo objeto agregando datos', () => expect(validateLinks.validateLinks(objectLink)).resolves.toStrictEqual({
      href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-LeAj-rGcmVe0nxDnmIBBkJiuBynxyAACSvArUcrNg1F1zCWR&usqp=CAU',
      path: './prueba.md',
      status: 200,
      statusText: 'OK',
      text: 'imagen1' }));
  });
});

describe('MDLinks', () => {
  it('is a function', () => {
    expect(typeof MDLinks).toBe('object');
  });
  describe('readFile', () => {
    it('is a function', () => {
      expect(typeof MDLinks.readFile).toBe('function');
    });
    it('Deberia retornar un objeto con los datos del link extraido', () => expect(MDLinks.readFile('./docs/test/prueba.md')).resolves.toStrictEqual(
      [
        {
          href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-LeAj-rGcmVe0nxDnmIBBkJiuBynxyAACSvArUcrNg1F1zCWR&usqp=CAU',
          path: './docs/test/prueba.md',
          text: 'imagen1',
        },
        {
          href: 'https://rogerdudler.github.io/git-guide/index.es.html',
          path: './docs/test/prueba.md',
          text: 'LINK',
        },
      ],
    ));
  });
});
