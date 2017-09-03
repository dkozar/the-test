import FileLoader from '../src/components/demo3/FileLoader';

/**
 * This test works with mocked XMLHttpRequest to check if triggering onreadystatechange()
 * calls the corresponding handlers
 * @returns {{xhttpMock: {open: Function, send: Function}, onSuccess: Function, onFailure: Function}}
 */
function prepareMockAndInitiateLoad() {
    const xhttpMock = {
        open: jest.fn(),
        send: jest.fn()
    };

    FileLoader.xhttpFactory = () => {
        return xhttpMock;
    };

    const fileLoader = new FileLoader(),
        onSuccess = jest.fn(),
        onFailure = jest.fn();

    fileLoader.loadFileFromUrl('some_url', onSuccess, onFailure);

    return {
        xhttpMock, onSuccess, onFailure
    }
}

describe('triggers appropriate callbacks', () => {
    describe('triggers success', () => {
        it('if readyState is 4 and status is 200', () => {
            const mock = prepareMockAndInitiateLoad(),
                xhttpMock = mock.xhttpMock;

            // mocking success
            xhttpMock.readyState = 4;
            xhttpMock.status = 200;
            xhttpMock.responseText = 'foo';
            xhttpMock.statusText = 'bar';

            // trigger onreadystatechange
            xhttpMock.onreadystatechange();

            expect(xhttpMock.open).toHaveBeenCalled();
            expect(xhttpMock.send).toHaveBeenCalled();
            expect(mock.onSuccess).toHaveBeenCalledWith('foo');
            expect(mock.onFailure).not.toHaveBeenCalled();
        });
    });

    describe('triggers failure', () => {
        it('if readyState is 4 and status NOT 200', () => {
            const mock = prepareMockAndInitiateLoad(),
                xhttpMock = mock.xhttpMock;

            // mocking failure
            xhttpMock.readyState = 4;
            xhttpMock.status = 201;
            xhttpMock.responseText = 'foo';
            xhttpMock.statusText = 'bar';

            // trigger onreadystatechange
            xhttpMock.onreadystatechange();

            expect(xhttpMock.open).toHaveBeenCalled();
            expect(xhttpMock.send).toHaveBeenCalled();
            expect(mock.onSuccess).not.toHaveBeenCalled();
            expect(mock.onFailure).toHaveBeenCalledWith('bar');
        });
    });

    describe('does not trigger', () => {
        it('if readyState NOT 4', () => {
            const mock = prepareMockAndInitiateLoad(),
                xhttpMock = mock.xhttpMock;

            // mocking in progress
            xhttpMock.readyState = 0;
            xhttpMock.status = 201;
            xhttpMock.responseText = 'foo';
            xhttpMock.statusText = 'bar';

            // trigger onreadystatechange
            xhttpMock.onreadystatechange();

            expect(xhttpMock.open).toHaveBeenCalled();
            expect(xhttpMock.send).toHaveBeenCalled();
            expect(mock.onSuccess).not.toHaveBeenCalled();
            expect(mock.onFailure).not.toHaveBeenCalled();
        });
    });
});
