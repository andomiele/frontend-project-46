import * as fs from 'node:fs';
import process from 'node:process';
import cwd from 'node:process';


const readFile = (file1, file2) => {
  const path1 = path.resolve(process.cwd(__fixtures__/file1.json), '/__fixtures__/file1.json')
  const data1  = fs.readFileSync(path1);
  console.log(data1 .toString());

  const path2 = path.resolve(process.cwd(__fixtures__/file2.json), '/__fixtures__/file1.json')
  const data2  = fs.readFileSync(path2);
    console.log(data2 .toString());
};
export default readFile;