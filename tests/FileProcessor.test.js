import FileProcessor from '../src/components/demo3/FileProcessor';
import { offlineTestData } from './offlineTestData';

describe('does overal processing', () => {
    it('for 1 km radius', () => {
        expect(FileProcessor.process(offlineTestData, 1)).toEqual([]);
    });

    it('for 10 km radius', () => {
        expect(FileProcessor.process(offlineTestData, 10)).toEqual([]);
    });

    it('for 20 km radius', () => {
        expect(FileProcessor.process(offlineTestData, 20)).toEqual([4]);
    });

    it('for 50 km radius', () => {
        expect(FileProcessor.process(offlineTestData, 50)).toEqual([4, 5, 6, 11, 12, 15, 39]);
    });

    it('for 100 km radius', () => {
        expect(FileProcessor.process(offlineTestData, 100)).toEqual([4, 5, 6, 8, 11, 12, 13, 15, 23, 24, 31, 39]);
    });

    it('for 200 km radius', () => {
        expect(FileProcessor.process(offlineTestData, 200)).toEqual([4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 17, 23, 24, 26, 28, 29, 30, 31, 39]);
    });

    it('for 500 km radius', () => {
        expect(FileProcessor.process(offlineTestData, 500)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 39]);
    });

    it('for 1000 km radius', () => {
        expect(FileProcessor.process(offlineTestData, 1000)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 39]);
    });

    it('for 10000 km radius', () => {
        expect(FileProcessor.process(offlineTestData, 10000)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 39]);
    });
});
