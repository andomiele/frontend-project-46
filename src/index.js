import * as path from 'path';
import { readFileSync } from 'fs';
import parse from '../src/parsers.js';
import _ from 'lodash';
import getDiffTree from './getDiff.js';
import formatter from './formatters/stylish.js';

const bealdFullPass = (filePath) => path.resolve(process.cwd(), filePath);
const readFile = (fileName) => readFileSync(bealdFullPass(fileName), 'utf8');
const getType = (fileName) => path.extname(fileName);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parse(readFile(filepath1), getType(filepath1));
  const data2 = parse(readFile(filepath2), getType(filepath1));
  return formatter(getDiffTree(data1, data2), format);
};
export default genDiff;
