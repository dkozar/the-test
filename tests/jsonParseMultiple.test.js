import jsonParseMultiple from '../src/components/demo3/jsonParseMultiple';

const JSON1 = '{"foo": "bar"}',
    JSON2 = '{"foo": {"bar": "baz"}}';

it('parses multiple JSONs', () => {
    expect(jsonParseMultiple([JSON1])).toEqual([{
        foo: 'bar'
    }]);

    expect(jsonParseMultiple([JSON1, JSON2])).toEqual([{
        foo: 'bar'
    }, {
        foo: {
            bar: "baz"
        }
    }]);

    expect(jsonParseMultiple([JSON1, JSON2, JSON1])).toEqual([{
        foo: 'bar'
    }, {
        foo: {
            bar: "baz"
        }
    }, {
        foo: 'bar'
    }]);
});
