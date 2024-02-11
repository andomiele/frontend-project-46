import * as path from 'path';
import { readFileSync } from 'fs';
import parse from './parsers.js';
import getDiffTree from './getDiff.js';
import format from './formatters/index.js';

const bealdFullPass = (filePath) => path.resolve(process.cwd(), filePath);
const readFile = (fileName) => readFileSync(bealdFullPass(fileName), 'utf8');
const getType = (fileName) => path.extname(fileName).slice(1);

const genDiff = (filepath1, filepath2, outputFormat = 'stylish') => {
  const data1 = parse(readFile(filepath1), getType(filepath1));
  const data2 = parse(readFile(filepath2), getType(filepath1));
  return format(getDiffTree(data1, data2), outputFormat);
};
export default genDiff;
