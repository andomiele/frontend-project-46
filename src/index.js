import * as path from 'path';
import { readFileSync } from 'fs';
import parsingFiles from '../src/parsers.js'


const readFile = (file1, file2) => {
  const currentPath = process.cwd();

  const filepath1 = path.resolve(currentPath, file1);
  const filepath2 = path.resolve(currentPath, file2);
  const data1 = readFileSync(filepath1, 'utf8');
  const data2 = readFileSync(filepath2, 'utf8');
  const parsingFile1 = (data1, typeFile1);
  const parsingFile2 = (data2, typeFile2);
  return readFile(parsingFile1, parsingFile2);
};
export default readFile;