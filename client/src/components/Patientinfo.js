import Infobox from "./InfoBox";
let pii_cat = ["Patient ID", "Age", "Sex", "ZIP", "Latest BMI", "Latest Weight"];

function PatientInfo() {
    return (
        <div className="App-patientpane">
            {pii_cat.map((category) => {
                return (
                    <Infobox listed_info = {{cat:category, data : "N/A"}}/>
                )
            })}
        </div>
    );
}

export default PatientInfo;