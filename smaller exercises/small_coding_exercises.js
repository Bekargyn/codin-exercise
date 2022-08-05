// Small Coding Exercise
// Solve each of the following coding exercises:

// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// el: element node object
// moves the element to the right by 100px over a duration of 1 second

let squareStyleLeft = 10;

function animateRight() {
  squareStyleLeft += 100;
  document.getElementById("box-2").style.left = squareStyleLeft + "px";
  console.log("squareStyleLeft is", squareStyleLeft, "px");
}
setInterval(animateRight, 1000);

// xs: array
// returns: a new array, with unique items
function removeDuplicates(xs) {
  // first solution

  //   const res = [];
  //   const map = {};

  //   for (let i = 0; i < str.length; i++) {
  //     const char = str[i];

  //     if (!map[char]) {
  //       map[char] = true;
  //       res.push(char);
  //     }
  //   }

  //   return res.join("");

  //Second solution

  return Array.from(new Set(xs)).join("");
}
