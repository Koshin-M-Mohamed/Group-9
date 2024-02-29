import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddExam.css';

function NewPatientExam(){ 
    const [formData, setFormData] = useState({
        AGE: "",
        SEX: "",
        ZIP: "",
        LATEST_BMI: "",
        exam_Id: "",
        "ICU Admit": "",
        "# ICU admits": "",
        MORTALITY: "",
        "LATEST WEIGHT": "",
        PATIENT_ID: "",
        png_filename: "",
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'number' ? Number(value) : value,
        });
      };
    
    console.log("This is the form data: ");
    console.log(formData);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:9000/exam', formData);
            console.log("we have recieved the request");
            console.log(response.data);
            navigate('/admin');
        }
        catch(error){
            console.log('Failed to add exam:', error);
        }
    }



    return (
      <form onSubmit={handleSubmit}>
            <input name="PATIENT_ID" value={formData.PATIENT_ID} onChange={handleChange} placeholder="Patient ID" />
            <input name="exam_Id" value={formData.exam_Id} onChange={handleChange} placeholder="Exam ID" />
            <input name="AGE" type="number" value={formData.AGE} onChange={handleChange} placeholder="Age" />
            <select name="SEX" value={formData.SEX} onChange={handleChange}>
                <option value="">Select Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <input name="ZIP" type="number" value={formData.ZIP} onChange={handleChange} placeholder="ZIP Code" />
            <input name="LATEST_BMI" type="number" step="0.01" value={formData.LATEST_BMI} onChange={handleChange} placeholder="Latest BMI" />
            <input name="ICU Admit" value={formData["ICU Admit"]} onChange={handleChange} placeholder="ICU Admit" />
            <input name="# ICU admits" type="number" value={formData["# ICU admits"]} onChange={handleChange} placeholder="# ICU Admits" />
            <input name="MORTALITY" value={formData.MORTALITY} onChange={handleChange} placeholder="Mortality" />
            <input name="LATEST WEIGHT" type="number" value={formData["LATEST WEIGHT"]} onChange={handleChange} placeholder="Latest Weight" />
            <input name="png_filename" value={formData.png_filename} onChange={handleChange} placeholder="Image Filename" />
            <div className="submitContainer">
            <button type="submit">Submit</button>
            </div>
        </form> 
    );

}

export default NewPatientExam;