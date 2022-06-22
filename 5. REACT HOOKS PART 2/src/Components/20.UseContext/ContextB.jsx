import React, { useContext } from "react";
import ContextC from "./ContextC";
import { Firstname, Lastname, Semester } from "./App";
const ContextB = () => {
  const fname = useContext(Firstname);
  const lname = useContext(Lastname);
  const sem = useContext(Semester);
  return (
    <>
      <h1>Hello We Are Using Context Hook</h1>
      <h2>{fname}</h2>
      <h2>{lname}</h2>
      <h2>{sem}</h2>
    </>
  );
};

export default ContextB;
