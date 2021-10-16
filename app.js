// const btn = document.querySelector('form button');
const inputElement = document.querySelector('#toDoInput');
const formElement = document.querySelector('form#toDoForm');
// old code
// const allDoneBtns = document.querySelectorAll('ul button');
let toDoList = document.querySelector('ul#toDoList');
// old attempt at using localStorage 
// toDoList = JSON.parse(localStorage.getItem("toDoList"));
// let myDoneList = ['eat dinner', 'eat dessert'];
// // myDoneList = myDoneList + JSON.parse(localStorage.getItem("myDoneListStorage"));
// let myList = ['fix sink', 'buy groceries', 'eat dinner', 'eat dessert'];
// myNotDoneList = myNotDoneList + JSON.parse(localStorage.getItem("myNotDoneListStorage"));
// debugger;

let myDoneList = JSON.parse(localStorage.getItem("myDoneList"))
if (!myDoneList) {
    myDoneList = [];
}
let myList = JSON.parse(localStorage.getItem("myList"))
if (!myList) {
    myList = [];
}

for (let item of myList) {
    const newLi = document.createElement('li');
    newLi.innerText = item;
    if (myDoneList.includes(item)) {
        newLi.classList.add("taskDone")
    }
    toDoList.append(newLi);
}

// for (let item of myDoneList) {
//     const newLi = document.createElement('li');
//     newLi.innerText = item;
//     toDoList.append(newLi);
// }


// "Add Task" submit button click event listener
formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    const newLi = document.createElement('li');
    newLi.innerText = inputElement.value;
    inputElement.value = '';
    toDoList.append(newLi);
    myList.push(newLi.innerText);
    localStorage.setItem("myList", JSON.stringify(myList))
    console.log(e)
})

// task completed event listener
toDoList.addEventListener("click", function (e) {
    // ????why does the following logic not work in the following if statement:
    // ????   if (e.target === "button")    why do i need the tagName
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("taskDone")
        if (myDoneList.includes(e.target.innerText)) {
            let toRemove = myDoneList.indexOf(e.target.innerText)
            myDoneList.splice(toRemove, 1)
        } else {
            myDoneList.push(e.target.innerText)
        }

    }
    localStorage.setItem("myDoneList", JSON.stringify(myDoneList));
    console.log(e);
})

// the following was replaced with an event delegate
// for (let btn of allDoneBtns) {
//     btn.addEventListener("click", function (e) {
//         // following line is bacause i couldn't get "Done!" to go away with the 
//         // done button
//         e.target.innerText = "";
//         e.target.parentElement.innerHTML = e.target.parentElement.innerText.strike();
//         console.log(e);
//     })
// }

// btn.addEventListener("click", function () {
//     console.log('button pressed!')

// })