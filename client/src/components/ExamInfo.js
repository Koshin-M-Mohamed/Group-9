import Infobox from "./InfoBox";
import ExamThumbnail from "./ExamThumbnail"
import { fakeData } from "../mockData";

let exam_cat = Object.fromEntries(Object.entries(fakeData[0]).slice(7,11));
let items = [];

for (const [key,value] of Object.entries(exam_cat)){
    items.push(<Infobox listed_info = {{cat:key, data : value}}/>)
}



function ExamBox() {
    return (
        <div className="App-exampane">
            {items}
            <ExamThumbnail />
        </div>

    );
}

export default ExamBox;