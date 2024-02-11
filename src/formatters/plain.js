import _ from 'lodash';

const getPropety = (key, property = []) => [...property, key].join('.');

const stringify = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  if (typeof data === 'string') {
    return `'${data}'`;
  }
  return String(data);
};

const formatPlain = (data) => {
  const iter = (node, propety = []) => {
    switch (node.type) {
      case 'nested': {
        const childrenToString = node.children.flatMap((child) => iter(child, [getPropety(node.key, propety)]));
        return childrenToString.join('\n');
      }
      case 'added':
        return `Property '${getPropety(node.key, propety)}' was added with value: ${stringify(node.value)}`;
      case 'removed':
        return `Property '${getPropety(node.key, propety)}' was removed`;
      case 'unchanged':
        return [];
      case 'changed':
        return `Property '${getPropety(node.key, propety)}' was updated. From ${stringify(node.firstValue)} to ${stringify(node.secondValue)}`;
      default:
        throw Error('Uncorrect data');
    }
  };
  return data
    .flatMap((item) => iter(item))
    .join('\n');
};

export default formatPlain;
