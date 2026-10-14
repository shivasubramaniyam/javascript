// this - the object that is executing the current fn

// if the fn is the part of an object -- then we call as the method
// if the method inside the object is called the obj itself

/* if it is the normal fn --> reference to the global object 
   1. window obj in browser
   2. global obj in node
*/

/**1. method --> obj example */
const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.stop = function () {
  console.log(this);
};

// video.play();
// video.stop();

/**2. fn --> global (window, global) */

function playVideo() {
  console.log(this);
}

playVideo();

/**
 * output 
 * 
 *   Object [global] {
 global: [Circular *1],
 clearImmediate: [Function: clearImmediate],
 setImmediate: [Function: setImmediate] {
   [Symbol(nodejs.util.promisify.custom)]: [Getter]
 },
 clearInterval: [Function: clearInterval],
 clearTimeout: [Function: clearTimeout],
 setInterval: [Function: setInterval],
 setTimeout: [Function: setTimeout] {
   [Symbol(nodejs.util.promisify.custom)]: [Getter]
 },
 queueMicrotask: [Function: queueMicrotask],
 structuredClone: [Function: structuredClone],
 atob: [Function: atob],
 btoa: [Function: btoa],
 performance: [Getter/Setter],
 fetch: [Function: fetch],
 navigator: [Getter],
 crypto: [Getter]



 when we call this methiod inside the normal function, it points to the global method that prints like this 

} */

function Video(title) {
  this.title = title;
  console.log(this);
}

// const v = new Video("b");

const video1 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};

video1.showTags();
