// function addNumber(number1,number2)
// {
//     let res=number1+number2;
//     return res
// }
// const res= addNumber(4,"a");

// console.log(res);

function logInUserMessage(username){
    if(!username)
    {
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}
console.log(logInUserMessage("shivam"))