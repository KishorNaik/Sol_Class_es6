
let _fullName=undefined;

export class staticDemo{

   
    constructor(){
        
    }

    // Static Method
    static staticMethod(){
        console.log("Static Method");
    }

    // Static Property
    static get fullName()
    {
        return _fullName;
    }

    static set fullName(value)
    {
        _fullName=value;
    }

}

//staticDemo._name="Hello Static";
staticDemo.staticMethod();
staticDemo.fullName="Kishor Naik";
console.log(staticDemo.fullName);