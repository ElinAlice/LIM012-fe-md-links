import markdownLinkExtractor from '../src/markdownLinkExtractor';
import validateLinks from '../src/validateLink';
import { MDLinks } from '../src/mdLinks';

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

    it('Deria retornar una array de objetos con datos del link', () => {
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

    it('Deberia retornar un nuevo objeto con datos del link agregando datos de validacion', () => expect(validateLinks.validateLinks(objectLink)).resolves.toStrictEqual({
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
    it('Deberia retornar un objeto con los datos del link extraido', () => expect(MDLinks.readFile('./docs/test/prueba.md'))
      .resolves.toStrictEqual(
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

  describe('accessTheFolder', () => {
    it('is a function', () => {
      expect(typeof MDLinks.accessTheFolder).toBe('function');
    });
    it('Deberia retornar un objeto con los datos del link extraido', () => expect(MDLinks.accessTheFolder('./docs/test/Pruebas'))
      .resolves.toStrictEqual(
        [
          {
            href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-LeAj-rGcmVe0nxDnmIBBkJiuBynxyAACSvArUcrNg1F1zCWR&usqp=CAU',
            path: './docs/test/Pruebas\\prueba.md',
            text: 'imagen1',
          },
          {
            href: 'https://rogerdudler.github.io/git-guide/index.es.html',
            path: './docs/test/Pruebas\\prueba.md',
            text: 'LINK',
          },
        ],
      ));
  });

  describe('linkValidationProcess', () => {
    it('is a function', () => {
      expect(typeof MDLinks.linkValidationProcess).toBe('function');
    });

    it('Deberia retornar un objeto con los datos del link validados', () => expect(MDLinks.linkValidationProcess([{
      href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-LeAj-rGcmVe0nxDnmIBBkJiuBynxyAACSvArUcrNg1F1zCWR&usqp=CAU',
      path: './docs/test/prueba.md',
      text: 'imagen1',
    }])).resolves.toStrictEqual(
      [
        {
          href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-LeAj-rGcmVe0nxDnmIBBkJiuBynxyAACSvArUcrNg1F1zCWR&usqp=CAU',
          path: './docs/test/prueba.md',
          status: 200,
          statusText: 'OK',
          text: 'imagen1',
        },
      ],
    ));
  });

  describe('mdLinks', () => {
    it('is a function', () => {
      expect(typeof MDLinks.mdLinks).toBe('function');
    });

    it('Deberia retornar un objeto con los datos básicos del link, ruta de archivo', () => expect(MDLinks.mdLinks('./docs/test/prueba.md'))
      .resolves.toStrictEqual(
        [
          {
            href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-LeAj-rGcmVe0nxDnmIBBkJiuBynxyAACSvArUcrNg1F1zCWR&usqp=CAU',
            path: 'C:\\Users\\Neli\\Desktop\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\docs\\test\\prueba.md',
            text: 'imagen1',
          },
          {
            href: 'https://rogerdudler.github.io/git-guide/index.es.html',
            path: 'C:\\Users\\Neli\\Desktop\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\docs\\test\\prueba.md',
            text: 'LINK',
          },
        ],
      ));

    it('Deberia retornar un array de objetos, con datos de los links, con la opcion VALIDATE = TRUE;  cuando se pasa una carpeta', () => expect(MDLinks.mdLinks('./docs/test/Pruebas', { validate: true }))
      .resolves.toStrictEqual(
        [
          {
            href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-LeAj-rGcmVe0nxDnmIBBkJiuBynxyAACSvArUcrNg1F1zCWR&usqp=CAU',
            path: 'C:\\Users\\Neli\\Desktop\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\docs\\test\\Pruebas\\prueba.md',
            status: 200,
            statusText: 'OK',
            text: 'imagen1',
          },
          {
            href: 'https://rogerdudler.github.io/git-guide/index.es.html',
            path: 'C:\\Users\\Neli\\Desktop\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\docs\\test\\Pruebas\\prueba.md',
            status: 200,
            statusText: 'OK',
            text: 'LINK',
          },
        ],
      ));

    it('Debería devolver el código de error "ENOENT" cuando no existe el archivo', () => (MDLinks.mdLinks('./docs/test/Prueba'))
      .catch((e) => expect(e.code).toStrictEqual('ENOENT')));
  });
});
