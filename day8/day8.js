// Events in JS

//the change in the state of an object is knowa as an event

//event are fired to notify code of "interesting changes" that may affect code execution

/* writing a event on the html makes tedious and confusion in coders
so better we write a code inthe Js files only  */





// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);   
// }


// let div = document.querySelector("div");
// let count =0;
// div.onmouseover = () =>
// {
//     console.log("you are inside div");
//     count++;
//     console.log(count);
// }






/* Event object
this are the special object that has detail about the event.

all event handler have access to the event objects properties and methods.


lets make an exp of the event object which is denoted generally as 'e'
*/


// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
    
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);   
// }


// event listener

// let btn1 = document.querySelector("#btn1");

// const handler1 =() =>{
//     console.log("you are trying to change mode");
    
// }
// btn1.addEventListener("Click",handler1);

let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click",()=>{
    if(currMode === "light")
    {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else
    {
        currMode = "light"; 
        body.classList.add("light");
        body.classList.remove("dark");


    }
    console.log(currMode);
    
});