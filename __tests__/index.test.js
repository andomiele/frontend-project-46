import genDiff from '../src/index.js';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const testGenDiff = genDiff();


test('testing function genDiff()', () => {
  expect(testGenDiff('follow: false', ' ')).toBe('    follow: false');
  // expect(testGenDiff(0, 2023)).toBe(null);
  // expect(testGenDiff(13, 2023)).toBe(null);
  // expect(testGenDiff(2, 2024)).toBe(29);
  // expect(testGenDiff(2, 2023)).toBe(28);
  // expect(testGenDiff(5, 2023)).toBe(31);
});
// {
//   - follow: false
//     host: hexlet.io
//   - proxy: 123.234.53.22
//   - timeout: 50
//   + timeout: 20
//   + verbose: true
// }