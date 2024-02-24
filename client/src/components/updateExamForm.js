import React from 'react'
import './updateExamForm.css.'

function updateExamForm({ updateExamFormForm, handlePatientUpdate, handleChange }) {
    let {Patient_ID, Exam_Id, Age, Sex, } = updateExamFormForm;

//      calls handleCustomerUpdate to push changes to the page
    function handleupdateForm(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/Admin`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(updateExamFormForm),
        })
            .then(resp => resp.json())
            .then(updatedPatient => {
                handlePatientUpdate(updatedPatient)})
    }

    return (
        <div>
            <h4>updateExamFormForm</h4>
            <form onSubmit={handleupdateForm}>
                <input type="text" name="Patient_ID" value={Patient_ID} onChange={handleChange}/>
                <input type="text" name="Exam_Id" value={Exam_Id} onChange={handleChange}/>
                <input type="text" name="Age" value={Age} onChange={handleChange}/>
                <input type="text" name="Sex" value={Sex} onChange={handleChange}/>
                
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )
}
export default updateExamForm;