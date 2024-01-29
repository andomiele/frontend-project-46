import * as path from 'path';
import { readFileSync } from 'fs';
import parse from '../src/parsers.js'

const bealdFullPass = (filePath) => path.resolve(process.cwd(), filePath);

const readFile = (fileName) => {
  const read = readFileSync(bealdFullPass(fileName), 'utf8');
  return parse(read);
};

const 



const genDiff = (filepath1, filepath2) => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
};
export default genDiff;