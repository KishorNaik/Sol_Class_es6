import {A} from '../MultilevelInheritance/A';

export class E extends A{

    eMethod(){
        console.log("E Method");
    }

    // @Override
    aMethod(){
        console.log("a Method override in e class");
    }

}

let eObj=new E();
    eObj.aMethod();
    eObj.eMethod();