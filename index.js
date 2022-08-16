
const add = document.querySelector('.add')
const input = document.querySelector('input')
const text = document.querySelector(".check")
const todolist = document.querySelector('.todolist')



let todoList = {}

let ID = 0

const addTodo = (e) => {
    e.preventDefault()
    
    if(input.value.length === 0 || input.value.trim().length === 0) return
   let localstore = JSON.parse(localStorage.getItem('Item'))
   if(localstore === null){
    todoList = {}
   }else{
    todoList = localstore; 
   }
  

   todoList[ID++] = {data:input.value}
   console.log(todoList)
   localStorage.setItem("Item",JSON.stringify(todoList))
   showTodo()
    input.value = ""
}
add.addEventListener('click',addTodo)


function showTodo(){
    let todos = ''
    let localstore = JSON.parse(localStorage.getItem('Item'))
    console.log('šhow run')
    if(localstore === null){
        todoList = {}
    }else{
        todoList = localstore; 
    }
    console.log(todolist)
   
    Object.values(todoList).forEach((data) => {
        todos+=`<div class="item">
        <p class="check " onclick="check(this)">${data.data}</p>
         <div class="btn">
            <button class="edit" onclick="edit(this,${data.id})">Edit</button>
            <button class="delete" onclick="Delete(this,${data.id})">Delete</button>
         </div>
       </div>`
    });
    // todolist.insertAdjacentHTML("afterbegin", todos);
    todolist.innerHTML = todos
}
showTodo()


function edit(e,index){
   
    input.value = e.parentElement.parentElement.firstElementChild.innerHTML
    // e.parentElement.parentElement.remove()
    let localstore = JSON.parse(localStorage.getItem('Item'))
    console.log(index,todoList)
    todoList.splice(index,1)
    localStorage.setItem("Item",JSON.stringify(todoList))
    showTodo()
   
}
function Delete(e,id){
    let localstore = JSON.parse(localStorage.getItem('Item'))
    todoList.filter(data => console.log(data.id !== id,todoList))
    
    localStorage.setItem("Item",JSON.stringify(todoList))
    
    
    // e.parentElement.parentElement.remove()
    console.log(todoList)
    showTodo()

}
function check(e){
    e.classList.toggle('checked')
}
