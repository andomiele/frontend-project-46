import yaml from 'js-yaml';

const parse = (data, format) => {

  switch (format) {
    case '.json':
      return JSON.parse(data, format);
    case '.yml':
    case '.yaml':
      return yaml.load(data, format);
    default:
      throw new Error(`Invalid format: ${format}`);
  }
};

export default parse;