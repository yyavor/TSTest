import {MustHaveCoffee} from './src/coffee/getcoffee'

class SweetSweetClass {
    color: string;
    constructor(name:string) {
        console.log("You're " + name)
    }
    setColor(color:string){
        console.log(color);
        this.color = color
    }
}
let basil = new SweetSweetClass("Yura");
basil.setColor("Black");
console.log("--------------");
console.log(basil.color);
class Basil extends SweetSweetClass {
    constructor() {
        super("Basil")
    }
}
let bas = new Basil();
bas.setColor("Blue");
console.log("=========");
console.log(bas.color);

let mustHaveCoffee = new MustHaveCoffee();