
let todos=localStorage.getItem("todos")!=null?JSON.parse(localStorage.getItem("todos")): [];


const main_input=document.getElementById('input1');
const btn=document.querySelector(".btn-pick");
const container=document.querySelector(".container")
const edit=document.querySelector(".edit-text");
const radio1=document.querySelector('#radio1');
const radio2=document.querySelector('#radio2');
const name=document.querySelector(".name-input")
const name_val=document.querySelector(".name-val")
var decide;
btn.addEventListener("click",(e)=>{
    e.preventDefault();


    var val=main_input.value;
        if(val==""){
            alert("type something");
            return;
        }
        if(radio1.checked){
        decide=true;
    }
    else if(radio2.checked){
       decide=false;
    }
    else{
        alert("please select category");
        return;
}
main_input.value=""
   var todo={
        cond:decide,
        input:val,
        check:false,
        id:Math.floor(Math.random()*100000)
    }
    addPostDom(todo.id, todo.cond, todo.input,todo.check);
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));

})

function addPostDom(id,cond,input,check){
    container.innerHTML+=`<div class="info">
    <input data-id="${id}" type="checkbox" data-check="${check}"  data-type="circle" ${check?"checked":""} class=${cond?"bubble":"bubble1"}>
    <input readonly  data-id="${id}" class="text-list" value="${input}" type="text">
    <div class="change">
       <button class="edit"  data-id="${id}">Edit</button>
       <button class="delete"  data-id="${id}">Delete</button>
    </div>
</div>`
}
function removeEle(id){
    todos=todos.filter(todo=>{
        return todo.id!=id;
    })
    localStorage.setItem("todos",JSON.stringify(todos));
}
function editInput(id,text1){
    todos=todos.map(todo=>{
        if(todo.id==id){
            todo.input=text1;
        }
        return todo;
    })
    localStorage.setItem("todos",JSON.stringify(todos));
}

function editCheck(id,isTf){

    
    todos=todos.map(todo=>{
        if(todo.id==id){
            todo.check=isTf;
        }
        return todo;
    })
    localStorage.setItem("todos",JSON.stringify(todos));
}


function render(){
    for (let i = 0; i < todos.length; i++) {
        addPostDom(todos[i].id, todos[i].cond, todos[i].input, todos[i].check);
    }
}
container.addEventListener("click",(e)=>{
    if (e.target.classList.contains("delete")) {
        removeEle(Number(e.target.dataset.id));
        container.innerHTML="";
        render();
    }
    if(e.target.classList.contains("edit")){
        
        const select=e.target.parentNode.parentNode.querySelector(".text-list");
        console.log(select)
            select.removeAttribute('readonly');
                e.target.setAttribute('readonly', false); 
                select.focus();
                select.addEventListener('blur', () => {
                    select.setAttribute('readonly', true);
                    editInput(e.target.dataset.id,select.value);
                    container.innerHTML="";
                    render();
                });
    }

    if (e.target.dataset.type === 'circle') {
        if(e.target.dataset.check=="false"){
            e.target.dataset.check="true"
            editCheck(Number(e.target.dataset.id),true);
           
        }
        else{
            e.target.dataset.check="false"
            console.log("rme")
            editCheck(Number(e.target.dataset.id),false);
        }
    }
})




//         }


render();




