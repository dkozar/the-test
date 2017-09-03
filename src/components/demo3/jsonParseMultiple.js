/**
 * Parses multiple JSON strings to objects
 * @param arrayOfJsonStrings
 * @returns {Array}
 */
export default function jsonParseMultiple(arrayOfJsonStrings) {
    return arrayOfJsonStrings.map((line) => JSON.parse(line.trim()));
}
