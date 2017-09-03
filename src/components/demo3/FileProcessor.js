import { OFFICE_COORDS } from './settings';
import Util from './Util';
import FileLoader from './FileLoader';
import splitFileToRows from './splitFileToRows';
import jsonParseMultiple from './jsonParseMultiple';
import convertCoordinatesToNumbers from './convertCoordinatesToNumbers';
import filterByDistance from './filterByDistance';
import extractUserIds from './extractUserIds';

export default class FileProcessor {

    /**
     * Constructor
     * Receives the success and error handlers
     * (no need to pass the same handlers each time we're processing the file because they do not change)
     * @param onSuccess
     * @param onFailure
     */
    constructor(onSuccess, onFailure) {
        this.onSuccess = onSuccess;
        this.onFailure = onFailure;
        this.fileLoader = new FileLoader();
    }

    /**
     * Asynchronously loads a file from given URL
     * @param url The URL to retrieve the file from
     * @param distance The radius to look for users, after the file is retrieved and pre-processed
     */
    loadAndProcess(url, distance) {
        this.fileLoader.loadFileFromUrl(url, (textFileContent) => {
            const ids = FileProcessor.process(textFileContent, distance);

            this.onSuccess(ids);
        });
    }
}

/**
 * Static
 * Does the full processing of the file and returns result in form of sorted IDs of users within a given distance
 * @param textFileContent The content of the retrieved text file
 * @param distance The max distance (radius) from the office inside which we're looking for users
 */
FileProcessor.process = (textFileContent, distance) => {
    const arrayOfJsonStrings = splitFileToRows(textFileContent),
        arrayOfObjects = jsonParseMultiple(arrayOfJsonStrings),
        points = convertCoordinatesToNumbers(arrayOfObjects),
        pointsInRadius = filterByDistance(points, OFFICE_COORDS, distance),
        userIds = extractUserIds(pointsInRadius),
        sortedUserIds = Util.sortNumbersAscending(userIds);

    return sortedUserIds;
};
