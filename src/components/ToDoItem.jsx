import React from "react";

function ToDoItem(props) {
  return (
    <div
      onDoubleClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
