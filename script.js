window.addEventListener('load', () => {
const main_input=document.getElementById('input1');
const btn=document.querySelector(".btn-pick");
const edit=document.querySelector(".edit-text");
const footer=document.querySelector('footer');
const radio1=document.querySelector('#radio1');
const radio2=document.querySelector('#radio2');
const name=document.querySelector(".name-input")
const name_val=document.querySelector(".name-val")
var decide;


btn.addEventListener("click",clickie);

function clickie(event){
    event.preventDefault();

    if (name.value === "") {
        alert("please enter name");
    } else {
        var nameme=name.value;
        // The issue is that you're trying to use the .value property on an h2 element.
        //  The .value property is used for form elements like input, 
        //  select, textarea, etc. For other HTML elements like h2,
        // you should use .textContent or .innerText to change the text inside it. Here's the corrected code:
        name.remove();
        name_val.innerText="What'up, "+nameme+" here";

    }



    if(radio1.checked){
        decide="professional"
    }
    else if(radio2.checked){
       decide="personal"
    }
    else{
        alert("please select category");
        return;
    }
    var val=main_input.value;
    if(val==""){
        alert("type something");
        return;
    }
    const div=document.createElement("div");
    div.classList.add("info");

    const input=document.createElement('input');
    input.setAttribute('type','checkbox');
    if(decide=="professional"){
        input.classList.add('bubble');
        
    }
    else{
        input.classList.add('bubble1');
    }
    

    div.appendChild(input);

    const input_text=document.createElement('input');
    input_text.setAttribute('type','text');
    input_text.value=val;
    input_text.classList.add("text-list");

    input_text.readOnly=true;

    div.appendChild(input_text);

    const Child_div=document.createElement("div");
    Child_div.classList.add("change");

    const button1=document.createElement('button');
    button1.innerText="Edit";

    const button2=document.createElement('button');
    button2.innerText="Delete";

    const input2=document.querySelector(".text-list");
    
    Child_div.appendChild(button1);
    Child_div.appendChild(button2);
    div.appendChild(Child_div);
    footer.appendChild(div);

    main_input.value="";

    button2.addEventListener('click', () => {
        footer.removeChild(div);
    });

    button1.addEventListener('click',() =>{
        input_text.removeAttribute('readonly');
        // input_text.setAttribute('readonly',false); ask why it is not coming
        input_text.focus();
        input_text.addEventListener('blur',()=>{
            input_text.setAttribute('readonly',true);
        });
    });
    var count=0;
    input.addEventListener('change',()=>{

        if(input.checked){
            input_text.classList.add("text-list1");
        }
        else if(input.checked==false){
            input_text.classList.remove("text-list1");
            console.log("off")

        }

    });





}
});


