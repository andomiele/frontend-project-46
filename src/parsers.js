import readFile from '../src/index.js';

const parser = (filepath1, filepath2, option) => {
  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);
  const {key, val} = option
  const parser = JSON.parse(file1, file2, (key, val));
  return parser;
};
export default parser;