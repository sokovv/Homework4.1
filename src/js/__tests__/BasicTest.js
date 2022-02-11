import pers from '../basic';

test.each([
    ['маг', 90, 'healthy'],
    ['маг', 40, 'wounded'],
    ['маг', 10, 'critical'],
])(
    ('should маг'),
    (name, health, expected) => {
        const result = pers({ name, health });
        expect(result).toBe(expected);
    });