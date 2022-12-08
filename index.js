// function Monday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }
  
//   function Tuesday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }
  
//   function Wednesday() {
//     console.log("Go for a five-mile run");
//     console.log("Go for a five-mile run");
//   }
  
//   function Thursday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }
  
//   function Friday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }

// function runFiveMiles() {
//     console.log("Go for a five-mile run");
//   }

function receivesAFunction(callback) {
return callback();
} 

function returnsANamedFunction() {
    return function receivesAFunction(name) {
        console.log(name);
    }
}

function returnsAnAnonymousFunction() {
    return function(name) {
        console.log(name);
    }
}