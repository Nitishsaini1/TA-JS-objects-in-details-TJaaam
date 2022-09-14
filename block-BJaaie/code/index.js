// CreateAnimal.prototype  = {
//     eat: function () {
//       console.log(`I live in ${this.location} and I can eat`);
//     },
//     changeLocation: function (newLocation) {
//       this.location = newLocation;
//       return this.location;
//     },
//     summary: function () {
//       console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`);
//     },
//   };
//   function CreateAnimal(location, numberOfLegs) {
//      this.location = location;
//      this.numberOfLegs = numberOfLegs;
//    }
//   function CreateDog(location, numberOfLegs, name, color) {
//     CreateAnimal.call(this, location, numberOfLegs);
//      this.location = location;
//      this.numberOfLegs = numberOfLegs;
//    }

// CreateDog.prototype   = {
//     bark() {
//       alert(`I am ${this.name} and I can bark 🐶`);
//     },
//     changeName(name) {
//       this.name = name;
//       return this.name;
//     },
//     changeColor(color) {
//       this.color = color;
//       return this.color;
//     },
//     summary() {
//       return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
//     },
//   };

//   Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);
  
//   function CreateCat(location, numberOfLegs, name, colorOfEyes){
//             CreateAnimal.call(this, location, numberOfLegs)
//             this.name = name;
//             this.color = colorOfEyes;
//   };

//   CreateCat.prototype = {
//     meow(){
//         alert(`I am ${this.name} and I can do mewo meow 😹`);
//     },
//     changeName(name) {
//         this.name = name;
//         return this.name;
//       },
//       changeColorOfEyes(newColor) {
//         this.colorOfEye = newColor;
//         return this.colorOfEye;
//       },
//       summary() {
//         return `I am ${this.ame} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
//       },
//   };
//    Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);
 

// CreateAnimal.prototype  = {
//   };
  class Animal{
    constructor(location, numberOfLegs){
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }    
    eat() {
        console.log(`I live in ${this.location} and I can eat`);
      }
      changeLocation(newLocation) {
        this.location = newLocation;
        return this.location;
      }
      summary() {
        console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`);
      }
  }

  class Dog extends Animal {
    constructor(location, numberOfLegs, name, color) {
    // CreateAnimal.call(this, location, numberOfLegs);
    super(location, numberOfLegs);
     this.location = location;
     this.numberOfLegs = numberOfLegs;
   }
   bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  }
  changeName(name) {
    this.name = name;
    return this.name;
  }
  changeColor(color) {
    this.color = color;
    return this.color;
  }
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  }
}

// CreateDog.prototype   = {
 
//   };

//   Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);
  
  class Cat extends Animal{
    constructor(location, numberOfLegs, name, colorOfEyes){
        // CreateAnimal.call(this, location, numberOfLegs)
        super(location, numberOfLegs);
        this.name = name;
        this.color = colorOfEyes;
    }
    meow(){
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    }
    changeName(name) {
        this.name = name;
        return this.name;
      }
      changeColorOfEyes(newColor) {
        this.colorOfEye = newColor;
        return this.colorOfEye;
      }
      summary() {
        return `I am ${this.ame} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
      }
  };

//   CreateCat.prototype = {
 
//   };
//    Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);
 