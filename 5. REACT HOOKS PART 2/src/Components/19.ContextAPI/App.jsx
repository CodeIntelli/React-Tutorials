/* 
*SO REACT HOOKS PROVIDE A CONCEPT CALL CONTEXT 

? REACT CONTEXT api allows you to easily access data at different level of the component tree without passing prop to every level

? context in easy language that in class we can send data using inheritence like

~ parent class ==>> class a ==>> class b ==>> class c 

~ here if we want to send data direct to class c we can initialize class a extend b and class b extend c and at first parent class extend class a we cant send direct data to class c so from context we can send direct data to context c.

~ it depends on 3 stage
! 1. create context
! 2. you need to create provider 
! 3. you need to create consumer 
*/
import React, { createContext } from "react";
import ContextA from "./ContextA";
//todo: step 1 create context
let Firstname = createContext();
let Lastname = createContext();
let Semester = createContext();

const App = () => {
  return (
    <>
      {/* todo: step 2 create a provider */}
      <Firstname.Provider value={"Dushyant"}>
        <Lastname.Provider value={"Khoda"}>
          <Semester.Provider value={"5th sem"}>
            <ContextA></ContextA>
          </Semester.Provider>
        </Lastname.Provider>
      </Firstname.Provider>
    </>
  );
};

export default App;
export { Firstname, Lastname, Semester };
