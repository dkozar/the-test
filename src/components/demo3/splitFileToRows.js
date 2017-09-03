/**
 * Splits file to rows, using "\n" as delimiter
 * @param text The text to split
 * @returns {Array}
 */
export default function splitFileToRows(text) {
    return text.split('\n')
}
