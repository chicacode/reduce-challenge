/**
 *
 *
 * DON't touch this file. This are the tests that should pass.
 *
 */
import { reduce } from "./main.js";

it.each([
  [[1], (acc, i) => acc + i, 0, 1],
  [
    [
      ["a", 1],
      ["b", 2],
      ["c", 3]
    ],
    (object, [key, value]) => ({
      ...object,
      [key]: value
    }),
    {},
    { a: 1, b: 2, c: 3 }
  ],
  [
    [["c", 3]],
    (object, [key, value]) => ({
      ...object,
      [key]: value
    }),
    {},
    { c: 3 }
  ],
  [[1, 2, 3], (acc, i) => `${acc}-${i}`, "", "-1-2-3"]
])("reduce(%i, %i, %i)", (arr, callback, initial, expected) => {
  expect(reduce(arr, callback, initial)).toEqual(expected);
});
