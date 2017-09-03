import extractUserIds from '../src/components/demo3/extractUserIds';

it('extracts user IDs', () => {
    expect(extractUserIds([{
        longitude: '123.456',
        latitude: '45.54',
        user_id: 42,
        name: 'foo'
    }])).toEqual([42]);

    expect(extractUserIds([{
        longitude: '123.456',
        latitude: '45.54',
        user_id: 42,
        name: 'foo'
    }, {
        longitude: '-22.456',
        latitude: '32.32',
        user_id: 123,
        name: 'bar'
    }])).toEqual([42, 123]);
});
