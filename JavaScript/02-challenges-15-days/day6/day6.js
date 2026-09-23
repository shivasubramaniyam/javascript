console.log(window);
window.console.log("Hello");

/* DOM manipulation
    selecting with ID = document.getElementById("myId")

    selecting with class = document.getElementByClassName("myClass")

    selecting with tag = document.getElementBytagName("p")
*/

/* but there is a better way for handling the element selector
document.querySelector("myId/myClass/tag") -> it returns the first element

document.querySelectorAll("myId/myclass/tag"); -> reurns a nodelist
*/

/* innner text returns the text content of the element and all its children*/
// inner HTML return the html tag along with the content..
let div = document.querySelector("div");
console.log(div);


let heading = document.querySelector("h3");      

// textContent = return textual content even for hidden elements



//let's practice
/*q1. create a h1 heading element with text = "Hello javascript". 
append "From apna college student" to text using JS*/

// 1. access the element first
// 2. property - > change

let h2 = document.querySelector("h2");

console.dir(h2.innerText);

h2.innerHTML = h2.innerText + "From Apna College students";

// q2 

let divs = document.querySelectorAll(".box");
console.log(divs);
let idx = 1;
for (let i of divs)
{
i.innerText = `New unique value ${idx}` ;
idx++;
}