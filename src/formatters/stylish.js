import _ from 'lodash';

const space = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat(depth * spacesCount);

const stringify = (data, depth = 1) => {
  if (!_.isObject(data)) {
    return String(data);
  }
  const entries = Object.entries(data);
  const result = entries.map(([key, value]) => (`\n${space(depth + 1)}${key}: ${stringify(value, depth + 1)}`)).join('');
  return `{\n${result}\n${space(depth)}}`;
};

const stylish = (data, depth = 1) => {
  switch (data.type) {
    case 'added':
      return `${space(depth + 1)} +  ${data.key}: ${stringify(value, depth + 1)}`;
    case 'deleted':
      return `${space(depth + 1)} -  ${data.key}: ${stringify(value, depth + 1)}`;
    case 'unchanged':
      return `${space(depth + 1)}    ${data.key}: ${stringify(value, depth + 1)}`;
    case 'changed':
      return `${space(depth + 1)} -  ${data.key}: ${stringify(value1, depth + 1)}\n${space(depth + 1)} -  ${data.key}: ${stringify(value2, depth + 1)}`;
    case 'nested':
      return `${space(depth + 1)}    ${data.key}: ${value.map(([key, value]) => `\n${space(depth + 1)}${key}: ${stringify(value, depth + 1)}`).join('')}`;
  }
};
export default stylish;
