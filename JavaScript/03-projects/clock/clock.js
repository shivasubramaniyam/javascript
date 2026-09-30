const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();

  let ms = day.getMilliseconds(); // fixed!
  let hh = day.getHours() * 30;
  let mnDeg = day.getMinutes() * deg;
  let ss = (day.getSeconds() + ms / 1000) * deg; // fixed!

  hr.style.transform = `rotateZ(${hh + (mnDeg / 12)}deg)`;
  mn.style.transform = `rotateZ(${mnDeg}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
}, 1000 / 60); // smooth 60fps







// type="text/javascript">

//         const deg = 6;
// const hr = document.querySelector("#hr");
// const mn = document.querySelector("#mn");
// const sc = document.querySelector("#sc");

// setInterval(() => {
//   let day = new Date();

//   let ms = day.getMilliseconds() ;
//   /* day.getMilliseconds() gets the current milliseconds (0 to 999).

//     deg likely equals 6, which is commonly used because 360 degrees / 60 units = 6 degrees per unit.

//     So, this line converts milliseconds to degrees:
//     E.g., if deg = 0.006 (used in smoother animations), then you're turning ms into a fractional angle.

// */

//   let hh = day.getHours() * 30;

//   /* day.getHours() gets the current hour (0 to 23).

//     There are 12 hours on a clock, and a full circle is 360°, so each hour = 360 / 12 = 30°.

//     This calculates the angle for the hour hand.*/

//   let mn = day.getMinutes() * deg;

//   /*Gets the current minute (0 to 59).

//     Multiplied by deg (likely 6) because each minute = 360 / 60 = 6°.

//     This is the angle for the minute hand. */

//   let ss = (day.getSeconds() * deg + ms / 1000)*deg;

//   /*Gets the current second and multiplies it by deg (again, 6° per second).

//     Then, ms / 1000 adds a smooth fraction to the second hand based on milliseconds.

//     This gives a smooth movement to the second hand instead of ticking every full second. */

//   hr.style.transform = `rotateZ(${hh + (mn / 12)}deg)`;
//   mn.style.transform = `rotateZ(${mn}deg)`;
//   sc.style.transform = `rotateZ(${ss}deg)`;
// }, 1000/60);
