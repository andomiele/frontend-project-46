import _ from 'lodash';

const indent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat(spacesCount * depth - 2);
const pastIndent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat(spacesCount * depth);

const stringify = (data, depth) => {
  if (!_.isObject(data)) {
    return String(data);
  }
  const keys = _.keys(data);
  const lines = keys
    .map((key) => `${indent(depth + 1)}  ${key}: ${stringify(data[key], depth + 1)}`);
  return `{\n${lines.join('\n')}\n${pastIndent(depth)}}`;
};

const formatStylish = (data) => {
  const iter = (node, depth) => {
    switch (node.type) {
      case 'nested': {
        const children = node.children.flatMap((child) => iter(child, depth + 1));
        return `${indent(depth)}  ${node.key}: {\n${children.join('\n')}\n${pastIndent(depth)}}`;
      }
      case 'added':
        return `${indent(depth)}+ ${node.key}: ${stringify(node.value, depth)}`;
      case 'removed':
        return `${indent(depth)}- ${node.key}: ${stringify(node.value, depth)}`;
      case 'unchanged':
        return `${indent(depth)}  ${node.key}: ${stringify(node.value, depth)}`;
      case 'changed':
        return [`${indent(depth)}- ${node.key}: ${stringify(node.firstValue, depth)}`,
          `${indent(depth)}+ ${node.key}: ${stringify(node.secondValue, depth)}`];
      default:
        throw Error('Uncorrect data');
    }
  };
  const result = data.map((item) => iter(item, 1));
  return `{\n${result.join('\n')}\n}`;
};
export default formatStylish;
