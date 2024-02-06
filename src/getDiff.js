import _ from 'lodash';

const getDiffTree = (data1, data2) => {
  const sortKeys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
    const result =  sortKeys.map((key) => {
      if (!Object.hasOwn(data1, key)) {
        return {key, type: 'added', value: data2[key]};
      }
      else if (!Object.hasOwn(data2, key)) {
        return {key, type: 'removed', value: data1[key]};
      }      
      else if ((data1[key] !== data2[key])) {
        return {key, type: 'changed', value1: data1[key], value2: data2[key]};
      }
      else if ((data1[key] === data2[key])) {
        return {key, type: 'unchanged', value: data1[key]};
      }
      return {key, type: 'nested', children: getDiffTree(data1[key], data2[key]),}
  })
  return result;
};
export default getDiffTree;
