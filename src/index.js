import * as path from 'path';
import { readFileSync } from 'fs';
import parse from './parsers.js';
import getDiffTree from './getDiff.js';
import format from './formatters/index.js';

const buildPass = (filePath) => path.resolve(process.cwd(), filePath);
const getType = (fileName) => path.extname(fileName).slice(1);
const readFile = (fileName) => parse(readFileSync(buildPass(fileName), 'utf8'), getType(fileName));

const genDiff = (filepath1, filepath2, outputFormat = 'stylish') => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  return format(getDiffTree(data1, data2), outputFormat);
};
export default genDiff;
