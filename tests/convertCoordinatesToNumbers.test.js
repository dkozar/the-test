import convertCoordinatesToNumbers from '../src/components/demo3/convertCoordinatesToNumbers';

it('does coordinate conversion', () => {
    expect(convertCoordinatesToNumbers([{
        longitude: '123.456',
        latitude: '45.54',
        user_id: 42,
        name: 'foo'
    }])).toEqual([{
        longitude: 123.456,
        latitude: 45.54,
        user_id: 42,
        name: 'foo'
    }]);

    expect(convertCoordinatesToNumbers([{
        longitude: '123.456',
        latitude: '45.54',
        user_id: 42,
        name: 'foo'
    }, {
        longitude: '-22.456',
        latitude: '32.32',
        user_id: 123,
        name: 'bar'
    }])).toEqual([{
        longitude: 123.456,
        latitude: 45.54,
        user_id: 42,
        name: 'foo'
    }, {
        longitude: -22.456,
        latitude: 32.32,
        user_id: 123,
        name: 'bar'
    }]);
});
