import Infobox from "./InfoBox";


function PatientInfo({patientInfo}) {

    const Patient_Data = {
        'Patient ID' : patientInfo.PATIENT_ID,
        'AGE'   :   patientInfo.AGE,
        'SEX'   :   patientInfo.SEX,
        'ZIP'   :   patientInfo.ZIP,
        'LATEST_BMI' : patientInfo.LATEST_BMI
    };


    let items = [];

    for (const [key, value] of Object.entries(Patient_Data)){
        items.push(<Infobox listed_info = {{cat:key, data : value}}/>)
    }

    return (
        <div className="App-patientpane">
            {items}
        </div>
    );
}

export default PatientInfo;