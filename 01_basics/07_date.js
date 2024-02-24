let mydate= new Date()
console.log(mydate)
console.log(typeof mydate)
console.log(mydate.toDateString());

let createDate = new Date("01-14-2023")
console.log(createDate.toLocaleDateString())


//Time
let time= Date.now()
 
console.log(Math.floor(time/1000))

let newDate= new Date()
console.log(newDate.toDateString())

//Months is in 0 based index


newDate.toLocaleDateString('default',{
    weekday: "long",
})