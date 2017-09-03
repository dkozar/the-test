import splitFileToRows from '../src/components/demo3/splitFileToRows';

const FILE = '{"foo": "bar"}\n' +
    '{"foo": {"bar": "baz"}}';

it('splits file to rows', () => {
    expect(splitFileToRows(FILE)).toEqual([
        '{"foo": "bar"}',
        '{"foo": {"bar": "baz"}}'
    ]);
});
