const inputElement = document.querySelector('#toDoInput');
const formElement = document.querySelector('form#toDoForm');
let toDoList = document.querySelector('ul#toDoList');


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
