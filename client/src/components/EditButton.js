import React from "react";
  const EditButton = ({onClick, Label}) => {
  
  return (
        <EditButton onClick={onClick} >
        {Label}
        </EditButton>
  );
}

export default EditButton;