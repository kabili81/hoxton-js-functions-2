//Instructions
//- Use this starting template, you'll find the data there => https://codesandbox.io/s/day-6-functions-template-es4eg?file=/data.js
//- As always, do not code your solution in CodeSandbox
//Using the usual Users and Todo lists:
  //- Prompt the user for a letter
  //- Find all the users who's name contains the letter 
  //- Say hi to those users in the console - but only 1 greeting every 2 seconds.
 // - Prompt the user for a user ID. Using the value, find all the todos that are Incomplete and console.log them.

 //udhëzime
//- Përdorni këtë shabllon fillestar, do t'i gjeni të dhënat atje => https://codesandbox.io/s/day-6-functions-template-es4eg?file=/data.js
//- Si gjithmonë, mos e kodoni zgjidhjen tuaj në CodeSandbox
//Përdorimi i listave të zakonshme të përdoruesve dhe detyrave:
//  - Kërkoni përdoruesin për një letër
//  - Gjeni të gjithë përdoruesit, emri i të cilëve përmban shkronjën
 // - Përshëndetje atyre përdoruesve në tastierë - por vetëm 1 përshëndetje çdo 2 sekonda.
//  - Kërkoni përdoruesin për një ID të përdoruesit. Duke përdorur vlerën, gjeni të gjitha detyrat që janë të paplota dhe konsol. regjistroni ato.

console.log("users: ", window.users);

console.log("todos: ", window.todos);

let promptedLetter = String(prompt("Enter a letter?"));
console.log(promptedLetter)


let usersName = users.filter(user => user.name.indexOf(promptedLetter) > -1)
console.log(usersName);


function greeting(){

    let count = 2000;

    for(let user of usersName){
        setTimeout(function (){console.log(`Hello, ${user.name}`)}, count);
        count += 2000;
    }
}
greeting();

let userIDpromped = Number(prompt("Which user ID do you want to enter? (0-9)"))

let inCompleted = todos.filter(todo => todo.userId === userIDpromped && todo.completed === false)
console.log(inCompleted);