import { Button } from "@material-ui/core";
import React from "react";
// import {} from "@material-ui/core";
// import {} from "@material-ui/icons";
import "../../css/TodoList.css";
import AddIcon from "@material-ui/icons/Add";
const Index = () => {
  // to get the value from input field
  const [inputList, setInputList] = React.useState("");
  // to show the value in a list
  const [Items, setItems] = React.useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  // read items
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
  };

  // delete items
  // todo: delete todo task on click
  const deleteItems = (id) => {
    console.log(id);
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main__div">
        <div className="center__div">
          <br />
          <h1>Todo List</h1>
          <input
            type="text"
            className=""
            onChange={itemEvent}
            placeholder="Add An Item Here"
          />
          <Button variant="contained" onClick={listOfItems} className="newBtn">
            <AddIcon />
          </Button>

          <br />
          <ul>
            {Items.map((data, index) => {
              return (
                <>
                  <div className="todo_style">
                    <li>{data}</li>
                  </div>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Index;
