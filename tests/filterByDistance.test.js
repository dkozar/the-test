import filterByDistance from '../src/components/demo3/filterByDistance';
import { OFFICE_COORDS } from '../src/components/demo3/settings';

const NEAR_USER = {
    longitude: OFFICE_COORDS.longitude + 0.5, // 0.5 degree offset
    latitude: OFFICE_COORDS.latitude + 0.5, // 0.5 degree offset
    user_id: 42,
    name: 'foo'
}, FAR_USER = {
    longitude: OFFICE_COORDS.longitude + 10, // 10 degrees offset
    latitude: OFFICE_COORDS.latitude + 10, // 10 degrees offset
    user_id: 123,
    name: 'bar'
};

const POINTS = [NEAR_USER, FAR_USER];

it('filters by distance', () => {
    expect(filterByDistance(POINTS, OFFICE_COORDS, 100)).toEqual([NEAR_USER]);
    expect(filterByDistance(POINTS, OFFICE_COORDS, 2000)).toEqual([NEAR_USER, FAR_USER]);
});
