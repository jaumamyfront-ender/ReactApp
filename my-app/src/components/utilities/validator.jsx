import { useSelector } from "react-redux";
export const required = (value) => {
  if (value) return undefined;
  return "field is required";
};
export const maxLenghtCreator = (maxLenght) => (value) => {
  if (value.lenght > maxLenght) return `Max Length is ${maxLenght} symbols`;
  return undefined;
};

 export const color = (value) => {
   if (value === undefined || value.length === 0) {
     return true;
   } else {
    console.log(value)
     return true;
   }
 };



