/**
 * Converts longitude and latitude to numbers and copies over the remaining properties
 * @param arrayOfObjects
 * @returns {Array}
 */
export default function convertCoordinatesToNumbers(arrayOfObjects) {
    return arrayOfObjects.map((point) => {
        return {
            longitude: parseFloat(point.longitude),
            latitude: parseFloat(point.latitude),
            user_id: point.user_id,
            name: point.name
        }
    });
}
