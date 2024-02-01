import * as path from 'path';
import { readFileSync } from 'fs';
import parse from '../src/parsers.js'
import _ from 'lodash'

const bealdFullPass = (filePath) => path.resolve(process.cwd(), filePath);

const readFile = (fileName) => {
  const read = readFileSync(bealdFullPass(fileName), 'utf8');
  return parse(read);
};

const genDiff = (filepath1, filepath2) => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  // const entries1 = Object.entries(data1);
  // const entries2 = Object.entries(data2);
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const sortKeys = _.sortBy(_.union(keys1, keys2));
  let result = '';
  const res = {};
  for (const key of sortKeys) {
    if ((data1[key] !== undefined && data2[key] === undefined)) {
      result += (`  - ${res[key] = key}: ${data1[key]}\n`);
    }
    else if ((data1[key] === undefined && data2[key] !== undefined)) {
      result += (`  + ${res[key] = key}: ${data2[key]}\n`);
    }
    else if ((data1[key] !== undefined && data2[key] !== undefined) && (data1[key] ===  data2[key])) {
      result += (`    ${res[key] = key}: ${data1[key]}\n`);
    }
    else if ((data1[key] !== undefined && data2[key] !== undefined) && (data1[key] !== data2[key])) {
      result += (`  - ${res[key] = key}: ${data1[key]}\n  + ${res[key] = key}: ${data2[key]}\n`);
    }
  }
  return (`{\n${result}}`);
};
export default genDiff;