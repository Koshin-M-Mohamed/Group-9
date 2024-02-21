import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewPatientExam(){ 
    const [formData, setFormData] = useState({
      patientId: '',
      examId: '',
      imageURL: '',
      keyFindings: '',
      age: '',
      sex: '',
      zipCode: '',
      bmi: '',
      brixiaScores: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams');
            console.log(response.data);
            navigate('/admin');
        }
        catch(error){
            console.error('Failed to add exam:', error);
        }
    }


return (
    <form onSubmit={handleSubmit}>
      <input name="patientId" value={formData.patientId} onChange={handleChange} placeholder="Patient ID" />
      <input name="examId" value={formData.examId} onChange={handleChange} placeholder="Exam ID" />
      <input name="imageURL" value={formData.imageURL} onChange={handleChange} placeholder="Image URL" />
      <textarea name="keyFindings" value={formData.keyFindings} onChange={handleChange} placeholder="Key Findings" />
      <input name="age" type="number" value={formData.age} onChange={handleChange} placeholder="Age" />
      <select name="sex" value={formData.sex} onChange={handleChange}>
        <option value="">Select Sex</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="Zip Code" />
      <input name="bmi" type="number" step="0.01" value={formData.bmi} onChange={handleChange} placeholder="BMI" />
      <input name="brixiaScores" value={formData.brixiaScores} onChange={handleChange} placeholder="Brixia Scores" />
      <button type="submit">Submit</button>
    </form>
  );

}

export default NewPatientExam;