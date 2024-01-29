import { readFile } from 'index.js';

const parser = (file1, file2, option) => {
  const file1 = readFile(filepath1)
  const file2 = readFile(filepath2)
  const option = value;
  const parser = JSON.parse(file1,file2, option);
  return parser;
};
export default parser;