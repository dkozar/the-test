import { EARTH_RADIUS } from './settings';

/**
 * Static class
 */
export default class Util {}

/**
 * Converts degrees to radians
 * @param degrees
 */
Util.degToRad = (degrees) => degrees * Math.PI / 180;

/**
 * Converts geographical longitude and latitude in degrees to radians
 * @param point Longitude and latitude in degrees
 * @returns {{longitude, latitude}}
 */
Util.pointDegToRad = (point) => {
    return {
        longitude: Util.degToRad(point.longitude),
        latitude: Util.degToRad(point.latitude)
    };
};

/**
 * Calculates shortest-distance on a sphere
 * @param point1 Geographical longitude and latitude in degrees
 * @param point2 Geographical longitude and latitude in degrees
 * @returns {number}
 */
Util.getDistance = (point1, point2) => {
    var point1Rad = Util.pointDegToRad(point1),
        point2Rad = Util.pointDegToRad(point2),
        deltaSigma = Math.acos(
            Math.sin(point1Rad.longitude) * Math.sin(point2Rad.longitude) +
            Math.cos(point1Rad.longitude) * Math.cos(point2Rad.longitude) * Math.cos(point2Rad.latitude - point1Rad.latitude)
        );

    return deltaSigma * EARTH_RADIUS;
};

/**
 * Comparison function for ascending sort of numbers
 * @param a First number
 * @param b Second number
 * @returns {number}
 */
Util.ascendingSortComparison = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};

/**
 * Sorts numbers ascending
 * @param numbers Numbers to sort
 * @returns {Array.<T>} Sorted numbers
 */
Util.sortNumbersAscending = (numbers) => {
    return numbers.sort(Util.ascendingSortComparison);
};
