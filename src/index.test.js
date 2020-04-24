import hello from '.';

describe('debería decir hola', () => {
    it('deberia saludar  a neli', () => {
        expect(hello()).toBe('Hello Neli');
    });

    it('deberia saludar a Bryanne', () => {
        expect(hello('Bryanne')).toBe('Hello Bryanne');
    });
});