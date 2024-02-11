import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filePath) => path.join(__dirname, '..', '__fixtures__', filePath);
const readFixture = (filePath) => readFileSync(getFixturePath(filePath), 'utf8');

test('testing function genDiff json + stylish', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const result = readFixture('resultjson.txt');
  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(result);
});

test('testing function genDiff yml + stylish', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');
  const result = readFixture('resultyml.txt');
  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(result);
});

test('testing function genDiff yaml + stylish', () => {
  const filepath1 = getFixturePath('file1.yaml');
  const filepath2 = getFixturePath('file2.yaml');
  const result = readFixture('resultyml.txt');
  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(result);
});

test('testing function genDiff json + plain', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const result = readFixture('resultplain.txt');
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(result);
});

test('testing function genDiff yml + plain', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');
  const result = readFixture('resultplain.txt');
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(result);
});

test('testing function genDiff yaml + plain', () => {
  const filepath1 = getFixturePath('file1.yaml');
  const filepath2 = getFixturePath('file2.yaml');
  const result = readFixture('resultplain.txt');
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(result);
});

test('testing function genDiff yaml + p', () => {
  const filepath1 = getFixturePath('file1.yuml');
  const filepath2 = getFixturePath('file2.yuml');
  // const result = readFixture('error.txt');
  expect(() => genDiff(filepath1, filepath2, 'plain')).toThrow('Invalid format: yuml');
});
