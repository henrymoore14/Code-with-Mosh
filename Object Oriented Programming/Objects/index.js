// //Testing Randomness

// function randomizeCreation(bombRate, squares) {
//   let container = document.querySelector("#grid");
//   let bombRate = bombRate;
//   let squares = squares;
//   let grid = [];
//   for (let i; i < squares; i++) {
//     grid.push(Math.random() <= 0.2 ? "bomb" : "safe");
//     const square = document.createElement("div").className(grid[i]);
//   }
// }

// randomizeCreation(0.2, 100);

// //delete keyword deletes object properties
// // for in to iterate through the properties of an object

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimalLocation = function () {};
  this.draw = function () {
    computeOptimalLocation();
    console.log(defaultLocation);
  };
}

const circle = new Circle(10);
circle.draw();

// const sw = {
//   beginning: undefined,
//   duration: 0,
//   start() {
//     this.beginning = Date.now();
//     console.log(Date.now());
//   },
//   stop() {
//     this.duration += Date.now() - this.beginning;
//   },
//   duration() {
//     this.duration += Date.now() - this.beginning;
//     console.log(this.duration / 1000 + " seconds");
//   },
//   reset() {
//     this.beginning = undefined;
//     this.duration = 0;
//     console.log("Reset");
//   },
// };

// sw.start();
// console.log("Elapsed " + sw.duration);
// sw.duration();

function Stopwatch() {
  (this.startTime = undefined),
    (this.stopTime = undefined),
    (this.accumulator = 0),
    (this.timer = false),
    (this.start = function () {
      if (!this.timer) {
        this.startTime = Date.now();
        this.timer = true;
      } else {
        return `The Stopwatch has already started`;
      }
    }),
    (this.stop = function () {
      if (this.timer) {
        this.stopTime = Date.now();
        this.accumulator += Math.floor((this.stopTime - this.startTime) / 1000);
        this.timer = false;
        return `${this.accumulator} seconds`;
      } else return `The Stopwatch has already stopped`;
    }),
    Object.defineProperties(this, {
      duration: {
        get() {
          if (this.timer) {
            this.stopTime = Date.now();
            this.accumulator += Math.floor(
              (this.stopTime - this.startTime) / 1000
            );
            this.startTime = Date.now();
            return `${this.accumulator} seconds`;
          } else {
            return `${this.accumulator} seconds`;
          }
        },
      },
    });
}

let sw = new Stopwatch();
sw.start();
