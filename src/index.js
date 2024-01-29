import * as fs from 'node:fs';

const readFile = (file1, file2) => {
  const data1 = fs.readFileSync(file1);
  console.log(data1.toString()); 

  const data2 = fs.readFileSync(file2);
    console.log(data2.toString()); 
};
export default readFile;