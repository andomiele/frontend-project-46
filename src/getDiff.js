import _ from 'lodash';

const getTree = (data1, data2) => {
  const data1Keys = _.keys(data1);
  const data2Keys = _.keys(data2);
  const sortKeys = _.sortBy(_.union(data1Keys, data2Keys));

  const children =  sortKeys.map((key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return {
        type: 'nested', 
        key, 
        children: getTree(data1[key], data2[key])
      };
    }
    // if (_.isObject(data1[key]) && !_.isObject(data2[key])) {
    //   return {
    //     type: 'removed', 
    //     key, 
    //     children: getTree(data1[key])
    //   };
    // }
    if (!_.has(data2, key)) {
      return {
        type: 'removed', 
        key, 
        value: data1[key]
      };
    }
    if (!_.has(data1, key)) {
      return {
        type: 'added', 
        key, 
        value: data2[key]
      };
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return {
        type: 'changed', 
        key, 
        firstValue: data1[key], 
        secondValue: data2[key]
      };
    }
    return {
      type: 'unchanged', 
      key, 
      value: data1[key], 
    };
  });
  return children;
};

const getDiffTree = (data1, data2) => ({
  type: 'root',
  children: getTree(data1, data2),
});

export default getDiffTree;
