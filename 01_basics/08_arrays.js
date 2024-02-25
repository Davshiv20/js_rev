//resizable
//vector

//array methods very similar to stack/vector

//arr.push()
//arr.pop()
//arr.unshift(*value*) -> inserts the value in the start
//arr.shift()// shifts value to the left
const myArr=[1,2,3,4,5]
console.log(myArr.includes(5))

console.log(myArr)

const newArr= myArr.join()


console.log(newArr) //converts to string

//arr.slice(start_ind,end_ind)->just prints the array from start ind to end-1
//Difference IMPORTANT*****************
//arr.splice(start_end,end_ind)->prints the array from start to end also manipulates the array by removing the printed values

const sd=[1,2,3,4]
const dc=[4,5,6,7]
//sd.push(dc)//DOESNT MERGE BUT 2D vector sorta
console.log(sd)
//USE concatenate
const mc=sd.concat(dc)
console.log(mc)


//SPREAD OPERATOR
console.log("using spread operator")
const Arr = [...sd,...dc]
console.log(Arr)
console.log("using flat operator:")
const realArr=Arr.flat(Infinity)
console.log(realArr)

//use Array.from or Array.of to primitive dt. into arrays
console.log(Array.from("Shivam"))
console.log(Array.from({name: "shivam"}))//interesting

let score1=100;
let score2=200;
let score3=200;
console.log(Array.of(score1,score2,score3))


