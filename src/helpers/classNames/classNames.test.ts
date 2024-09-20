import { classNames } from './classNames';

describe('classNames', () => {
    test('with only param', () => {
        expect(classNames('class')).toBe('class');
    });
    test('with additional', () => {
        const expected = 'class class1 class2';
        expect(classNames('class', {}, ['class1', 'class2'])).toBe(expected);
    });
    test('with mods and additional', () => {
        const expected = 'class class1 class2 hovered';
        expect(classNames(
            'class',
            { hovered: true, focused: false },
            ['class1', 'class2'],
        )).toBe(expected);
    });
    test('with undefined', () => {
        const expected = 'class class1 class2 hovered';
        expect(classNames(
            'class',
            { hovered: true, focused: undefined },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
