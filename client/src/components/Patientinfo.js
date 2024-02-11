import Infobox from "./InfoBox";
import EditDelete from "./EditDelete";
import { fakeData } from "../mockData";
let pii_cat = Object.fromEntries(Object.entries(fakeData[0]).slice(0,6));
let items = [];

for (const [key,value] of Object.entries(pii_cat)){
    items.push(<Infobox listed_info = {{cat:key, data : value}}/>)
}


function PatientInfo() {
    return (
        <div className="App-patientpane">
            {items}
            <EditDelete />
        </div>
    );
}

export default PatientInfo;