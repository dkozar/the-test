import flattenArray from '../src/components/demo2/flattenArray';

it('flattens the array', () => {
    expect(flattenArray([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(flattenArray([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
    expect(flattenArray([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);
    expect(flattenArray([[1, 2, [3]], 4])).toEqual([1, 2, 3, 4]);
    expect(flattenArray([[1, 2, [[3, [[4, [5, 6], 7], 8], 9]]], 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(flattenArray([])).toEqual([]);
    expect(flattenArray(1)).toEqual([1]);
    expect(flattenArray(null)).toEqual([null]);
    expect(flattenArray(undefined)).toEqual([undefined]);
    expect(flattenArray([[[[[]]]]])).toEqual([]);
    expect(flattenArray([[], [], []])).toEqual([]);
});
