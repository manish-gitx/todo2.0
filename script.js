const main_input=document.getElementById('input1');
const btn=document.querySelector(".btn-pick");
const edit=document.querySelector(".edit-text");
const footer=document.querySelector('footer');
btn.addEventListener("click",clickie);

function clickie(event){
    event.preventDefault();
    var val=main_input.value;
    const div=document.createElement("div");
    div.classList.add("info");

    const input=document.createElement('input');
    input.setAttribute('type','checkbox');
    input.classList.add('bubble');

    div.appendChild(input);

    const input_text=document.createElement('input');
    input_text.setAttribute('type','text');
    input_text.value=val;
    input_text.classList.add("text-list");
    input_text.setAttribute('readonly',true);

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
}


