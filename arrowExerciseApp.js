//Chris Hart 12/3/20 10.3 ArrowExercise Submission

const arr = [1,2,3,4];


//ES5 Map Callback
// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }


//ES2015 Arrow Functions shorthand
  function double(arr) {
    return arr.map(val => val * 2);
  }


//Replace ALL functions with arrow functions
//arr returns [4,16]
  function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

//2 of 3 functions converted
  function squareAndFindEvens(numbers){
    var squares = numbers.map(num => num ** 2);

    var evens = squares.filter(square => square % 2 === 0);

    return evens;
  }

  //Final with all functions converted
  const squareAndFindEvens = numbers => numbers.map(num => num **2).filter(square => square % 2 ===0)