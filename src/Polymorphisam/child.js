import { parent } from "./parent";

export class child extends parent {

    //@parent Override
    parentMethod(){
        console.log("Child Method");
    }
}

let parentObj=new parent();
    parentObj.parentMethod();

let childObj=new child();
    childObj.parentMethod();

    parentObj=new child(); // Polymorphisam
    parentObj.parentMethod();

    window.parent=new child();
    window.parent.parentMethod();
    