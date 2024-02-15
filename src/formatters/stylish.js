import _ from 'lodash';

const indent = (depth, isFull, replacer = ' ', spacesCount = 4) => {
  const fullIndent = replacer.repeat(spacesCount * depth);
  const partialIndent = replacer.repeat(spacesCount * depth - 2);
  return isFull === true ? partialIndent : fullIndent;
};

const stringify = (data, depth) => {
  if (!_.isObject(data)) {
    return String(data);
  }
  const keys = _.keys(data);
  const lines = keys
    .map((key) => `${indent(depth + 1, true)}  ${key}: ${stringify(data[key], depth + 1)}`);
  return `{\n${lines.join('\n')}\n${indent(depth)}}`;
};

const iter = (node, depth) => {
  switch (node.type) {
    case 'nested': {
      const children = node.children.flatMap((child) => iter(child, depth + 1)).join('\n');
      return `${indent(depth, true)}  ${node.key}: {\n${children}\n${indent(depth)}}`;
    }
    case 'added':
      return `${indent(depth, true)}+ ${node.key}: ${stringify(node.value, depth)}`;
    case 'removed':
      return `${indent(depth, true)}- ${node.key}: ${stringify(node.value, depth)}`;
    case 'unchanged':
      return `${indent(depth, true)}  ${node.key}: ${stringify(node.value, depth)}`;
    case 'changed': {
      const line1 = `${indent(depth, true)}- ${node.key}: ${stringify(node.value1, depth)}`;
      const line2 = `${indent(depth, true)}+ ${node.key}: ${stringify(node.value2, depth)}`;
      return `${line1}\n${line2}`;
    }
    default:
      throw Error(`Uncorrect data: ${node.type}`);
  }
};

const formatStylish = (data) => {
  const result = data.map((item) => iter(item, 1));
  return `{\n${result.join('\n')}\n}`;
};

export default formatStylish;
