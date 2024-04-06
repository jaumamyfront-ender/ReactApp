import { useSelector } from "react-redux";
export const required = (value) => {
  if (value) return undefined;
  return "field is required";
};
export const maxLenghtCreator = (maxLenght) => (value) => {
  if (value.lenght > maxLenght) return `Max Length is ${maxLenght} symbols`;
  return undefined;
};




