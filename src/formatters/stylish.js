import _ from 'lodash';

const stylish = (data, replacer = ' ', spacesCount = 4, depth = 1) => {
  if (!_.isObject(data)) {
    return String(data);
  }
  
  if (_.isObject(data)) {
    const entries = Object.entries(data);
    const space = replacer.repeat(spacesCount * depth);
    const str = entries.map(([key, value]) => (`\n${space}${key}: ${stylish(value, replacer, spacesCount, depth + 1)}`));
    return `{${str}\n${space(depth)}}`;
  }
};
export default stylish;
