class Person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        console.log("i am eating")
    }
    sleep(){
        console.log("i am eating")
    }
    walk(){
        console.log("i am eating")
    }
}
class Teacher extends Person{
    constructor(instituteName){
        this.instituteName = instituteName;
        super(name,age,gender)
    }
    teach(){
        console.log(`i am a teacher at ${this.instituteName}`)
    }
}
class Artist extends Person{
    constructor(kind){
        this.kind = kind;
        super(name,age,gender)
    }
    createArt(){
        console.log(`i create ${this.kind} of art`)
    }
}
class Player extends Person{
    constructor(sportsName){
        this.sportsName = sportsName;
        super(name,age,gender)
    }
    Play(){
        console.log(`i am a playing ${this.sportsName}`)
    }
}
class Cricketer extends Player{
    constructor(teamName){
        super(name,age,gender,sportsName)
        this.taemName = teamName;
    }
    playCricket(){
        console.log(`I am playing cricket with ${this.teamName}`)
    }
}