import {A} from '../MultilevelInheritance/A';

export class D extends A{

    dMethod(){
        console.log("D Method");
    }

    // @Override
    aMethod(){
        super.aMethod();

        console.log("A Method override in D Class");
    }

}

let dObj=new D();
    dObj.aMethod();
    dObj.dMethod();