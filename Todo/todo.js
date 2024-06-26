let todoList=[
  {item:'Prepare Resume',dueDate: '4/10/2023'},
  {item:'Open GitHub',dueDate: '15/10/2023'},
  {item:'Update Linkdln',dueDate: '9/10/2023'}
];
displayItems()


function addTODO(){
  let inputElement=document.querySelector('#todo-input');
  let dateElement=document.querySelector('#todo-date');
  let todoItem=inputElement.value;
  let todoDate=dateElement.value;
  todoList.push({item:todoItem, dueDate:todoDate});
 
  inputElement.value= '';
  dateElement.value='';

  displayItems()
} 

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml='';
  for(let i=0;i<todoList.length;i++){

  // let item=todoList[i].item;
  // let dueDate=todoList[i].dueDate;
  
  let {item,dueDate}=todoList[i];



    newHtml+=`


    
    
    <span>${item}</span>
    <span>${dueDate}</span>
    <button onclick="todoList.splice(${i},1);displayItems()">Delete</button>
    
    
    
    
    `;
 
  }
  containerElement.innerHTML=newHtml;

}