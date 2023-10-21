const main_input=document.getElementById('input1');
const btn=document.querySelector(".btn-pick");
const edit=document.querySelector(".edit-text");
const footer=document.querySelector('footer');
btn.addEventListener("click",clickie);
const div=document.createElement("div");
const input=document.createElement('input');
const input_text=document.createElement('input');
const Child_div=document.createElement("div");
const button1=document.createElement('button');
const button2=document.createElement('button');
const input2=document.querySelector(".text-list");

function clickie(event){
    event.preventDefault();
    var val=main_input.value;
    div.classList.add("info");


    input.setAttribute('type','checkbox');
    input.classList.add("bubble");
    div.appendChild(input);

    input_text.setAttribute('type','text');
    input_text.value=val;
    input_text.classList.add("text-list");
    input_text.setAttribute('readonly',true);

    div.appendChild(input_text);


    Child_div.classList.add("change");

    
    button1.innerText="Edit";
    button1.classList.add('rem');

    button2.innerText="Delete";

    Child_div.appendChild(button1);
    Child_div.appendChild(button2);
    div.appendChild(Child_div);
    footer.appendChild(div);

    main_input.value="";
}
// const butt=document.querySelector(".rem");
// button1.addEventListener('click', (e) => {
    
//     const ini = div.querySelector('input');
//     ini.setAttribute("readonly",false);
//     // ini.removeAttribute('readonly');
//     // ini.focus();
//     // ini.addEventListener('blur', (e) => {
//     //     ini.setAttribute('readonly', true);


//     // alert("hey")
// });
// button1.addEventListener('click', (e) => {
//     input_text.setAttribute('readonly', true);
// });





