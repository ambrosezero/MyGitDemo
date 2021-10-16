const btn = document.querySelector('form button');
const inputElement = document.querySelector('#toDoInput');
const formElement = document.querySelector('form#toDoForm');
const allDoneBtns = document.querySelectorAll('ul button');
const toDoList = document.querySelector('ul#toDoList');

// "Add Task" button click event listener
formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    const newLi = document.createElement('li')
    const newDoneButton = document.createElement('button')
    newDoneButton.innerText = "Done!"
    newLi.innerText = inputElement.value + " ";
    newLi.append(newDoneButton)

    toDoList.append(newLi);
    localStorage.setItem("toDoList", JSON.stringify(toDoList))
    // ????the following line threw an error and im unclear why
    // ????   allDoneBtns.append(newDoneButton);
})
// the code for striking out a completed task
toDoList.addEventListener("click", function (e) {
    // ????why does the following logic not work in the following if statement:
    // ????   if (e.target === "button")    why do i need the tagName
    if (e.target.tagName === "BUTTON") {
        e.target.innerText = "";
        e.target.parentElement.innerHTML = e.target.parentElement.innerText.strike();
        console.log(e);
    }
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