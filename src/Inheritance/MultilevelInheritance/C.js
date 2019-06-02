import { B } from './B';

export class C extends B{

    constructor(){
        super(); // Call base class constructor
    }

    cMethod(){
        console.log("C Method");
    }

    // @Override B Method
    bMethod(){
        super.bMethod(); // Call base class method and proeprty

        console.log("B Method Override in c class");
    }

    // @override A Method
    aMethod(){
        super.aMethod(); 

        console.log("a Method override in a Class");
    }
}

let cObj=new C();
    cObj.aMethod();
    cObj.bMethod();
    cObj.cMethod();