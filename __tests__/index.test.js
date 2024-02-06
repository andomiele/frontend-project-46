import genDiff from '../src/index.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filePath) => path.join(__dirname, '..', '__fixtures__', filePath);
const readFixture = (filePath) => readFileSync(getFixturePath(filePath), 'utf8');

test('testing function genDiff json', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');
    // const format = path.extname(__dirname);
    const result = readFixture('resultjson.txt');
    expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(result);
});

test('testing function genDiff yml', () => {
    const filepath1 = getFixturePath('file1.yml');
    const filepath2 = getFixturePath('file2.yml');
    // const format = path.extname(__dirname);
    const result = readFixture('resultyml.txt');
    expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(result);
});

test('testing function genDiff yaml', () => {
    const filepath1 = getFixturePath('file1.yaml');
    const filepath2 = getFixturePath('file2.yaml');
    // const format = path.extname(__dirname);
    const result = readFixture('resultyml.txt');
    expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(result);
});