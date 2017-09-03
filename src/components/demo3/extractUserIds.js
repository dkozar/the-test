/**
 * Converts an array of points to an array of user IDs
 * @param points
 */
export default function extractUserIds(points) {
    return points.map((point) => point.user_id);
}
