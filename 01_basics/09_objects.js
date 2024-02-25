//singleton-> using constructors

//object literals

const mySym= Symbol("key1")

const JsUser={
    name: "Shivam",  
    "full name":"Shivam Dave",
    age: 21,
    [mySym]: "mykey",
}
console.log(JsUser["name"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])

// Object.freeze(JsUser)//can't change values now

JsUser.greeting= function(){
    console.log("HI BOZO")
}
// console.log(JsUser.greeting())
JsUser.greeting2= function(){
    console.log(`HI USER, ${this.name}`)
}
console.log(JsUser.greeting2())

//SINGLETON object
const tinderUser={}

tinderUser.id="123ab"
tinderUser.name="Sd"
tinderUser.isLoggedIn= false

console.log(tinderUser);


//merging objects
const obj1={1:"A", 2:"B"}
const obj2= {3:"C",4:"D"}
// const obj3= Object.assign({}, obj1,obj2)
  // MERGE
const obj3={...obj1,...obj2}
console.log(obj3)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//asking for property
//object.hasOwnProperty('____property_name_____');
