import _ from 'lodash';

const joinStrings = (keys) => [...keys].join('.');

const getKey = (data) => {
  if (!_.isObject(data)) {
    return String(data);
  }
  const keys = _.keys(data);
  const lines = keys.map((key) => `${getKey(key)}: ${data[key]}`);
  return joinStrings(lines);
};

const plain = (data) => {
  const iter = (node) => {
    switch (node.type) {
      case 'root': {
        const result = node.children.flatMap((child) => iter(child));
        return joinStrings(result);
      }
      case 'nested': {
        const childrenToString = node.children.flatMap((child) => iter(child));
        return joinStrings(childrenToString);
      }
      case 'added':
        return `Property '${getKey(node.key)}' was added with value: '${node.value}'`;
      case 'removed':
        return `Property '${getKey(node.key)}' was removed`;
      case 'changed':
        return `Property '${getKey(node.key)}' was updated. From '${node.firstValue}' to '${node.secondValue}'`;
      default:
        throw Error('Uncorrect data');
    }
  };
  const result = data.map((item) => iter(item));
  return iter(result);
};
export default plain;
