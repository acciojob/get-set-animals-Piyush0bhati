//complete this code
class Animal {
	constructor(species){
		this.species = species
	}
	getSpecie(){
		return this.species
	}
	makeSound(){
		console.log(` the ${this.species} makes a sound `)
	}
    purr(){
		console.log("purr")
	}
    bark(){
		console.log("woof")
	}
}

class Dog extends Animal {
	
}

class Cat extends Animal {
	
}
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
