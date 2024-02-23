import React, { useState } from "react";
import './EditForm.css'; 

    function EditForm({ initialData, onSave, onCancel }) {
      const [formData, setFormData] = useState(initialData);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
      };
    
      const handleCancel = () => {
        onCancel();
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="Patient_ID" Name="Exam_Id" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Detail:
            <input type="Age" name="Sex" value={formData.email} onChange={handleChange} />
          </label>
          {/* Add more input fields for other data */}
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
      );
    }
    
    export default EditForm;