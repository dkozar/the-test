import Util from './Util';

export default function filterByDistance(points, origin, distance) {
    return points.filter((point) => {
        return Util.getDistance(origin, point) < distance;
    });
}
