import React from "react";
const DeleteButton = ({onClick, Label}) => {
  return <button style={{backgroundColor: "tomato", color: 'white'}} onClick={onClick}>{Label}</button>;
};

export default DeleteButton;
