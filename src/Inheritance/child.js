import {parent} from "../Inheritance/parent";

export class child extends parent{

    constructor(name){
        super(name);
    }


    childMethod(){
        // call base class Method
        super.parentMethod();
    }

    parentOverrideMethod(){
        super.parentOverrideMethod(); // Call Parent Object
        console.log("Override method call in child Method");
    }

}

let childObj=new child("Hello Constructor Overriding");
childObj.parentOverrideMethod();
