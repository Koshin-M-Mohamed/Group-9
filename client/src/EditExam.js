import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditPatientExam() {
    const { patientID, examID } = useParams();
    const [formData, setFormData] = useState({
        AGE: "",
        SEX: "",
        ZIP: "",
        LATEST_BMI: "",
        "ICU Admit": "",
        "# ICU admits": "",
        MORTALITY: "",
        "LATEST WEIGHT": "",
        png_filename: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch existing exam data and pre-populate the form fields
        const fetchExamData = async () => {
            try {
                const response = await axios.get(`http://localhost:9000/exam/${patientID}/${examID}`);
                const { data } = response;
                setFormData(data);
            } catch (error) {
                console.log('Failed to fetch exam data:', error);
            }
        };
        fetchExamData();
    }, [patientID, examID]);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'number' ? Number(value) : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:9000/exam/${patientID}/${examID}`, formData);
            console.log("Exam updated:", response.data);
            navigate(`/patientResults/${patientID}`); // Redirect to patient results page
        } catch (error) {
            console.log('Failed to update exam:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="AGE" type="number" value={formData.AGE} onChange={handleChange} placeholder="Age" />
            <input name="SEX" type="text" value={formData.SEX} onChange={handleChange} placeholder="Sex" />
            <input name="ZIP" type="text" value={formData.ZIP} onChange={handleChange} placeholder="ZIP Code" />
            <input name="LATEST_BMI" type="number" value={formData.LATEST_BMI} onChange={handleChange} placeholder="Latest BMI" />
            <input name="ICU Admit" type="text" value={formData["ICU Admit"]} onChange={handleChange} placeholder="ICU Admit" />
            <input name="# ICU admits" type="number" value={formData["# ICU admits"]} onChange={handleChange} placeholder="# ICU Admits" />
            <input name="MORTALITY" type="text" value={formData.MORTALITY} onChange={handleChange} placeholder="Mortality" />
            <input name="LATEST WEIGHT" type="number" value={formData["LATEST WEIGHT"]} onChange={handleChange} placeholder="Latest Weight" />
            <input name="png_filename" type="text" value={formData.png_filename} onChange={handleChange} placeholder="Image Filename" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default EditPatientExam;