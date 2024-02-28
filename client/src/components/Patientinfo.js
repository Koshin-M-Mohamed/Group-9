import Infobox from "./InfoBox";
import { fakeData } from "../mockData";

let pii_cat = Object.fromEntries(Object.entries(fakeData[0]).slice(0,6));



function PatientInfo(patientInfo) {

    let items = [];

    for (const [key,value] of Object.entries(pii_cat)){
        items.push(<Infobox listed_info = {{cat:key, data : value}}/>)
    }

    return (
        <div className="App-patientpane">
            {items}
        </div>
    );
}

export default PatientInfo;

