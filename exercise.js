//Refactor ES5 into ES2015

// Same Keys and Values

// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

function createInstructor(firstName,lastName) {
    return {
        firstName,
        lastName
    }
}

//Computed Property Names

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"


let favoriteNumber = 42;

let instructor = {
    firstName : 'colt',
    [favoriteNumber]: 'That is my favorite!'
}

//Object Methods

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

//   let instructor = {
//       firstName: 'Colt',
//       sayHi(){
//           return 'Hi!';
//       },
//       sayBye(){
//           return this.firstName + 'says bye!';
//       }
//   }


  //createAnimal Function

  function createAnimal(species, verb, noise){
      return {
          species,
           [verb](){
               return noise
           }
      }
  }