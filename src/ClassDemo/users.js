
// set Private Variable
const _firstName=Symbol("firstName");
const _lastName=Symbol("lastName");

const setFullName=Symbol("setFullName");

export class users{

    // Constructor
    constructor(){

    }

    // Property
    get firstName(){
        return this[_firstName];
    }
    set firstName(value)
    {
        return this[_firstName]=value;
    }

    get lastName(){
        return this[_lastName];
    }

    set lastName(value)
    {
        this[_lastName]=value;
    }

    // private method
    [setFullName](){
        return `Full Name : ${this.firstName} ${this.lastName}`;
    }

    // public Method
    display(){
       let _fullName=this[setFullName](); // Call Private Method
       console.log(_fullName);
    }


}

// External export function define
export function funcDemo1(){
    console.log("func Demo 1");
}

export function funcDemo2(){
    console.log("func Demo 2");
}

export default function funcDemo3(){
    console.log("Default");
}