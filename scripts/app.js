import { validate } from "./validation.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((inputToBeValidated) => {
   inputToBeValidated.addEventListener("blur", (itbv) => {
       validate(inputToBeValidated);
   }) 
})