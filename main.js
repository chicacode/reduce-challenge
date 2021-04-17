/*

This is a test function using the native reduce implementation.
Don't use it :)
With this function you can see on the right side Panel
that all tests passed.


Once you are ready, 
comment this function and un-comment the below one
to write your reduce function.


*/
// output:  {a: 1, b: 2, c: 3}
const arr = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["d", 4]
];
let result;
/*export function reduce(array, callback, initialValue) {
  return array.reduce(callback, initialValue);
}*/

/*result = arr.reduce((accumulator, [key, current]) => {
  return { ...accumulator, [key]: current };
}, {});
console.log(result);*/
/*

When you are ready comment the function above and uncomment
the following function to write your implementation

 */
export function reduce(array, callback, initialValue) {
  let value = initialValue === undefined ? array[0] : initialValue;
  for (let index = 0; index < array.length; index++) {
    value = callback(value, array[index], index, arr);
  }
  return value;
}

result = arr.reduce((accumulator, [key, current]) => {
  return { ...accumulator, [key]: current };
}, {});
console.log(result);
