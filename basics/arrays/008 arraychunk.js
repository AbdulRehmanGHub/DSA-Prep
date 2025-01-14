// // Create the array chunks(separate part) according to the size val.
// // For example if arr = [1,2,3,4,5] and size is 2, then show the output like [[1,2,3], [4,5]]

const chunkFunc = (array, size) => {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    console.log(`-------- ${chunk}`);
    chunked.push(chunk);
    index += size;
  }
  return chunked;
};

console.log(chunkFunc([1, 2, 3, 4, 5, 6, 7, 8], 3));
