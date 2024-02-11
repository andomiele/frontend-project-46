import _ from 'lodash';

const currentIndent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat(spacesCount * depth - 2);
const pastIndent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat(spacesCount * depth);

const stringify = (data, depth) => {
  if (!_.isObject(data)) {
    return String(data);
  }
  const keys = _.keys(data);
  const lines = keys.map((key) => `${currentIndent(depth + 1)}  ${key}: ${stringify(data[key], depth + 1)}`);
  return `{\n${lines.join('\n')}\n${pastIndent(depth)}}`;
};

const formatStylish = (data) => {
  const iter = (node, depth) => {
    switch (node.type) {
      case 'nested': {
        const childrenToString = node.children.flatMap((child) => iter(child, depth + 1));
        return `${currentIndent(depth)}  ${node.key}: {\n${childrenToString.join('\n')}\n${pastIndent(depth)}}`;
      }
      case 'added':
        return `${currentIndent(depth)}+ ${node.key}: ${stringify(node.value, depth)}`;
      case 'removed':
        return `${currentIndent(depth)}- ${node.key}: ${stringify(node.value, depth)}`;
      case 'unchanged':
        return `${currentIndent(depth)}  ${node.key}: ${stringify(node.value, depth)}`;
      case 'changed':
        return [`${currentIndent(depth)}- ${node.key}: ${stringify(node.firstValue, depth)}`,
          `${currentIndent(depth)}+ ${node.key}: ${stringify(node.secondValue, depth)}`];
      default:
        throw Error('Uncorrect data');
    }
  };
  const result = data.map((item) => iter(item, 1));
  return `{\n${result.join('\n')}\n}`;
};
export default formatStylish;
