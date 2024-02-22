import React from "react";
import "./styles/Button.css";

const Button = () => {
  const handleAdd = () => {
    console.log("Add button clicked");
  };

  const handleDelete = () => {
    console.log("Delete button clicked");
  };

  const handleEdit = () => {
    console.log("Edit button clicked");
  };

  return (
    <>
      <div className="btn-div">
        <button className="addbtn" onClick={handleAdd}>Add</button>
        <button className="deletebtn" onClick={handleDelete}>Delete</button>
        <button className="editbtn" onClick={handleEdit}>Edit</button>
      </div>
    </>
  );
};

export default Button;