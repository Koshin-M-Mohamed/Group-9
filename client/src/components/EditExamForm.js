import React, { useState } from 'react';

function UpdateExamForm({ initialData, onUpdate }) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div>
      <h2>Update Exam</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Patient ID:</label>
          <input
            type="text"
            name="patientId"
            value={formData.patientId}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Exam ID:</label>
          <input
            type="text"
            name="examId"
            value={formData.examId}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            name="Age"
            value={formData.Age} 
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Sex:</label>
          <input
            type="text"
            name="Sex"
            value={formData.Sex} 
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Zip:</label>
          <input
            type="text"
            name="Zip"
            value={formData.Zip} 
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="text"
            name="Image"
            value={formData.Image} 
            onChange={handleChange}
          />
        </div>
        <div>
          <label>BMI:</label>
          <input
            type="text"
            name="BMI"
            value={formData.BMI} 
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Exam</button>
      </form>
    </div>
  );
}

export default UpdateExamForm;