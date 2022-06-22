import React from "react";
import { Firstname, Lastname, Semester } from "./App";
const ContextC = () => {
  return (
    <>
      <Firstname.Consumer>
        {(fname) => {
          return (
            <>
              <Lastname.Consumer>
                {(lname) => {
                  return (
                    <>
                      <Semester.Consumer>
                        {(sem) => {
                          return (
                            <>
                              <h1>
                                Hello I am Developer and my name is {fname}{" "}
                                {lname} {sem}
                              </h1>
                            </>
                          );
                        }}
                      </Semester.Consumer>
                    </>
                  );
                }}
              </Lastname.Consumer>
            </>
          );
        }}
      </Firstname.Consumer>
    </>
  );
};

export default ContextC;
