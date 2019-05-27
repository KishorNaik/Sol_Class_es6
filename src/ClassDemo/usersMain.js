import { users } from "../ClassDemo/users";
import * as u from "../ClassDemo/users";

// Defualt Import
import funcDemo3 from "../ClassDemo/users";

//import $ from "jquery";


const _name=Symbol("name"); // Private Variable

export class userMain{

    constructor(){
    }

   
    onAction(){

        console.log("OnAction method Call");

        //create an instance of users class
        let usersObj=new users();
        usersObj.firstName="kishor";
        usersObj.lastName="naik";
        usersObj.display();

        // private Variable
        this[name]="Hello Symbol";
        console.log(this[name]);

        // Call expternal export function from users.js file
        u.funcDemo1();
        u.funcDemo2();
        u.default(); // funcDemo3

        funcDemo3();
       
        // Using Jquery
        //$("#divObj").html("Hello Jquery");
    }

    
}

let userMainObj=new userMain();
userMainObj.onAction();

export function onButtonClick(){
    
    let userMainObj=new userMain();
    userMainObj.onAction();

}
