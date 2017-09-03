import Util from '../src/components/demo3/Util';

it('degToRad', () => {
    expect(Util.degToRad(0)).toEqual(0);
    expect(Util.degToRad(90)).toEqual(Math.PI / 2);
    expect(Util.degToRad(180)).toEqual(Math.PI);
    expect(Util.degToRad(360)).toEqual(Math.PI * 2);
});

it('pointDegToRad', () => {
    expect(Util.pointDegToRad({
        longitude: 0,
        latitude: 0
    })).toEqual({
        longitude: 0,
        latitude: 0
    });

    expect(Util.pointDegToRad({
        longitude: 90,
        latitude: 90
    })).toEqual({
        longitude: Math.PI / 2,
        latitude: Math.PI / 2
    });

    expect(Util.pointDegToRad({
        longitude: 180,
        latitude: 180
    })).toEqual({
        longitude: Math.PI,
        latitude: Math.PI
    });

    expect(Util.pointDegToRad({
        longitude: 360,
        latitude: 360
    })).toEqual({
        longitude: Math.PI * 2,
        latitude: Math.PI * 2
    });

    expect(Util.pointDegToRad({
        longitude: 90,
        latitude: 360
    })).toEqual({
        longitude: Math.PI / 2,
        latitude: Math.PI * 2
    });
});

it('getDistance', () => {
    expect(Util.getDistance({
        longitude: 360,
        latitude: 360
    }, {
        longitude: 360,
        latitude: 360
    })).toEqual(0); // looks good. We're in same point

    expect(Util.getDistance({
        longitude: 360,
        latitude: 360
    }, {
        longitude: 90,
        latitude: 360
    })).toEqual(10007.543398010288); // looks good. This should be 1/4 of 2*R*PI (which is ~40.000 km)

    expect(Util.getDistance({
        longitude: 360,
        latitude: 180
    }, {
        longitude: 360,
        latitude: 360
    })).toEqual(20015.086796020572); // looks good. This should be 1/2 of 2*R*PI (which is ~40.000 km)
});

it('sortNumbersAscending', () => {
    expect(Util.sortNumbersAscending([3, 2, 1])).toEqual([1, 2, 3]);
    expect(Util.sortNumbersAscending([100, 100, 3, 2, 1, 0, 100])).toEqual([0, 1, 2, 3, 100, 100, 100]);
});
