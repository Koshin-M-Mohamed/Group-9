import Infobox from "./InfoBox";

function PatientInfo({patientInfo}) {

    let items = [];

    for (const [key, value] of Object.entries(patientInfo).slice(1,7)){
        items.push(<Infobox listed_info = {{cat:key, data : value}}/>)
    }

    return (
        <div className="App-patientpane">
            {items}
        </div>
    );
}

export default PatientInfo;