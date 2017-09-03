export default class FileLoader {
    loadFileFromUrl(url, onSuccess, onFailure) {
        const xhttp = FileLoader.xhttpFactory();

        xhttp.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    onSuccess(this.responseText);
                } else {
                    onFailure(this.statusText);
                }
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
}

/**
 * Using factory for testing
 * @returns {XMLHttpRequest}
 */
FileLoader.xhttpFactory = () => {
    return new XMLHttpRequest(); // default
};
