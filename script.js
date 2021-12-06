let countEl = document.getElementById("count-el");

let saveEl = document.getElementById("save-el");


console.log(countEl);
console.log(saveEl);

let count = 0;
let saveBtn= 0;
 
function increment() {
    count = count + 1;
    countEl.innerText= count;
     }
     
     function save(){
     
       saveEl.innerText=count;
     }