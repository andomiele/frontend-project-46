import genDiff from '../src/index.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filePath) => path.join(__dirname, '..', '__fixtures__', filePath);
const readFixture = (filePath) => readFileSync(getFixturePath(filePath), 'utf8');

test('testing function genDiff', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const result = readFixture('resultjson.txt');
  expect(genDiff(filepath1, filepath2)).toEqual(result);
});