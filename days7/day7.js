// to get the attribute value in the DOM manipulation
// getAttribute(attr)

//to set the attribute value
// setAttribute(attr, value);

// let div = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log("the id name is:", id);

// let name = div.getAttribute("name");
// console.log("the name attribute is:", name);

// let para = document.querySelector("p");
// //console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class","newClass"));

// let div = document.querySelector("div");

// div.style.backgroundColor = "green";

// div.style.fontSize = "26px";

// div.innerText = "Hello!";

// // div.style.visibility = "hidden"; 



// let newBtn = document.createElement("Button"); // creation of button on the system console which is not a displayed in the website
// console.log(newBtn);
// newBtn.innerText = "click me";


// let div = document.querySelector("div"); //this will display the button on the webpage
// div.append(newBtn); // button appear on the end of the div
// //div.prepend(newBtn); // buuton appear in the start of the day

// div.before(newBtn); //it appears just before the div class is starting
// div.after(newBtn); //it appears just after the div class is ending


// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am newbie!</i>";

// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();

// newHeading.remove();

/* practice question 
q1 
create a new button element, give it a text "click me" , background  
color of red and text color of white

insert a button as the first element inside the body tag*/

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";


// document.querySelector("body").prepend(newBtn);


/* create a <p> tag in html ,give it a class and some styling

now create a new class in css and try to append this class to the <p> 
element
*/

// let para = document.querySelector("p");
// para.setAttribute("class","newClass");