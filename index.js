
// let todoList = ['Hello Would', 'Hi Bro'];

// display()

// function addTodo(){
//     let todoElement = document.querySelector('#todoInput')
//     let todoItem = todoElement.value;
//     todoList.push(todoItem)
//     todoElement.value = '';

//     display()
// }

// function display(){

//     let displayElement = document.querySelector('.display-container')
    
//     let newHtml = '';


//     for(let i = 0; i < todoList.length; i++){
        
//         newHtml += 
//         `
//         <div>
//         <span>${todoList[i]}</span>

//         <button onclick="todoList.splice(${i}, 1);
//          display()">Delete</button>

        
//         </div>
        
//         `

//   }

//         displayElement.innerHTML = newHtml;
// }


let todoList = []
display()
function addTodo(){
    let todoElement = document.querySelector('#todoInput')
    let todoItem = todoElement.value;
    todoList.push(todoItem)
    todoElement.value = '';
    display()
}

function display(){
    let peragrfContainer = document.querySelector('.display-container')

    let newHtml = '';

    for (let i = 0; i < todoList.length; i++){
        

        newHtml += 
        `
        <div>
        <span>${todoList[i]}</span>

        <button onclick="todoList.splice(${i}, 1);
        display()">Delete</button>
        <button onclick="
        alert('${todoList[i]}')
        ">Edit</button>

        </div>

        `

    }
    peragrfContainer.innerHTML = newHtml;
}