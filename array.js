const myNum = [5, 20, 10, 50, 80, 90, 55];
const newNumbers = myNum.map(myMap);
function myMap(value, index, array) {
  return value * 2;
}
console.log(newNumbers);

const myFruits = ["Apple", "Banana", "Mango", "Lemon", "Lychee"];
myFruits.forEach(fruitCount);
function fruitCount(value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
  console.log("----");
}

const myFilter = [10, 15, 20, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 95, 90, 100];
const newFilter = myFilter.filter(funFilter);
function funFilter(value, index, array) {
  return value > 5;
}
console.log(newFilter);

const myReduce = [20, 40, 60, 80, 100, 55];
const newReduce = myReduce.reduce(funReduce);
function funReduce(total, value, index, array) {
  console.log(total);

  return total + value;
}
console.log(newReduce);
