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
  const iter = (node, path = []) => {
    const property = getPropety(node.key, path);
    switch (node.type) {
      case 'nested': {
        const childrenToString = node.children.flatMap((child) => iter(child, [property]));
        return childrenToString.join('\n');
      }
      case 'added':
        return `Property '${property}' was added with value: ${stringify(node.value)}`;
      case 'removed':
        return `Property '${property}' was removed`;
      case 'unchanged':
        return [];
      case 'changed': {
        const value1 = stringify(node.firstValue);
        const value2 = stringify(node.secondValue);
        return `Property '${property}' was updated. From ${value1} to ${value2}`;
      }
      default:
        throw Error('Uncorrect data');
    }
  };
  return data
    .flatMap((item) => iter(item))
    .join('\n');
};

export default formatPlain;
