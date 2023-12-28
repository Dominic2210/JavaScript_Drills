let arr = [1, 2, 3];
console.log(arr);
const fn = (val) => {
  return (val += 1);
};

let newArr = arr.forEach(fn);
console.log(newArr);
