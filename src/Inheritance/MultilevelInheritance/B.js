import {A} from './A'

export class B extends A{

    constructor(){
        super(); // Call Base Class Constructor

        console.log("B Constructor");
    }

    bMethod(){
        console.log("B Method");
    }

    // @Override
    aMethod(){
        super.aMethod(); // call base class method and Property
    }

}