import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filePath) => path.join(__dirname, '..', '__fixtures__', filePath);
const readFixture = (filePath) => readFileSync(getFixturePath(filePath), 'utf8');
const resultStylish = readFixture('result_stylish.txt');
const resultPlain = readFixture('result_plain.txt');
const resultjson = readFixture('result_json.txt');

const formats = ['json', 'yml', 'yaml'];

test.each(formats)('format %s', (format) => {
  const filepath1 = getFixturePath(`file1.${format}`);
  const filepath2 = getFixturePath(`file2.${format}`);
  expect(genDiff(filepath1, filepath2)).toEqual(resultStylish);
  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(resultStylish);
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(resultPlain);
  expect(genDiff(filepath1, filepath2, 'json')).toEqual(resultjson);
});

test('testing function genDiff yaml + p', () => {
  const filepath1 = getFixturePath('file1.yuml');
  const filepath2 = getFixturePath('file2.yuml');
  expect(() => genDiff(filepath1, filepath2, 'plain')).toThrow('Invalid format: yuml');
});
