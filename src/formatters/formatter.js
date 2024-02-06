import stylish from "./stylish";

const formatter = (tree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(tree);
  }
};
export default formatter;