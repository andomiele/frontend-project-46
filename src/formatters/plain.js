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

const iter = (node, path = []) => {
  const property = getPropety(node.key, path);
  switch (node.type) {
    case 'nested': {
      const children = node.children.flatMap((child) => iter(child, [property]));
      return children.join('\n');
    }
    case 'added':
      return `Property '${property}' was added with value: ${stringify(node.value)}`;
    case 'removed':
      return `Property '${property}' was removed`;
    case 'unchanged':
      return [];
    case 'changed': {
      const stringValue1 = stringify(node.value1);
      const stringValue2 = stringify(node.value2);
      return `Property '${property}' was updated. From ${stringValue1} to ${stringValue2}`;
    }
    default:
      throw Error(`Uncorrect data: ${node.type}`);
  }
};

const formatPlain = (data) => data
  .flatMap((item) => iter(item))
  .join('\n');

export default formatPlain;
