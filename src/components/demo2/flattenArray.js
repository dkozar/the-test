/**
 * Recursive!
 * @param outArray Output array
 * @param element Next array element (might be array)
 */
function flattenRecursive(outArray, element) {
    let i, len;

    if (Array.isArray(element)) {
        len = element.length;
        for (i = 0; i < len; i++) {
            flattenRecursive(outArray, element[i]);
        }
    } else {
        outArray.push(element);
    }
}

/**
 * Flattens an array
 * @param arr The array to flatten
 */
export default function flattenArray(arr) {
    const out = [];

    flattenRecursive(out, arr);
    return out;
}
