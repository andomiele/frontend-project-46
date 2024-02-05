import _ from 'lodash';

const getDiffTree = (data1, data2) => {
  const sortKeys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
  let result = '';
  const res = {};

  for (const key of sortKeys) {
    if ((data1[key] !== undefined && data2[key] === undefined)) {
      result += (`  - ${res[key] = key}: ${data1[key]}\n`);
    }
    else if ((data1[key] === undefined && data2[key] !== undefined)) {
      result += (`  + ${res[key] = key}: ${data2[key]}\n`);
    }
    else if ((data1[key] !== undefined && data2[key] !== undefined) && (data1[key] !== data2[key])) {
      result += (`  - ${res[key] = key}: ${data1[key]}\n  + ${res[key] = key}: ${data2[key]}\n`);
    } 
    else if ((data1[key] !== undefined && data2[key] !== undefined) && (data1[key] === data2[key])) {
      result += (`    ${res[key] = key}: ${data1[key]}\n`);
    }
  }
  return (`{\n${result}}`);
};

export default getDiffTree;