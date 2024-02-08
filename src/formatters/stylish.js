import _ from 'lodash';

const replacer = ' ';
const spacesCount = 4;
const currentIndent = (depth) => replacer.repeat(spacesCount * depth - 2);
const pastIndent = (depth) => replacer.repeat(spacesCount * depth - spacesCount);

const joinStrings = (lines, depth) => [
  '{',
  ...lines,
  `${pastIndent(depth)}}`,
].join('\n');

const stringify = (data, depth) => {
  if (!_.isObject(data)) {
    return String(data);
  }
  const keys = _.keys(data);
  const lines = keys.map((key) => `${currentIndent(depth)}  ${key}: ${stringify(data[key], depth + 1)}`);
  return joinStrings(lines, depth);
};

const stylish = (data) => {
  const iter = (node, depth) => {
    switch (node.type) {
      case 'root':
        const result = node.children.flatMap((child) => iter(child, depth));
        return joinStrings(result, depth);
      case 'nested':
        const childrenToString = node.children.flatMap((child) => iter(child, depth + 1));
        return `${currentIndent(depth)}  ${node.key}: ${joinStrings(childrenToString, depth + 1)}`;
      case 'added':
        return `${currentIndent(depth)}+ ${node.key}: ${stringify(node.value, depth + 1)}`;
      case 'removed':
        return `${currentIndent(depth)}- ${node.key}: ${stringify(node.value, depth + 1)}`;
      case 'unchanged':
        return `${currentIndent(depth)}  ${node.key}: ${stringify(node.value, depth + 1)}`;
      case 'changed':
        return [`${currentIndent(depth)}- ${node.key}: ${stringify(node.firstValue, depth + 1)}`,
          `${currentIndent(depth)}+ ${node.key}: ${stringify(node.secondValue, depth + 1)}`];
      default:
        throw Error('Uncorrect data');
    }
  };
  return iter(data, 1);
};
export default stylish;
