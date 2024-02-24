import Infobox from "./InfoBox";
import ExamThumbnail from "./ExamThumbnail"

function ExamBox(examInfo) {

    let items = [];

    for (const [key,value] of examInfo){
        items.push(<Infobox listed_info = {{cat : key, data : value}}/>)
    }

    return (
        <div className="App-exampane">
            {items}
            <ExamThumbnail />
        </div>

    );
}

export default ExamBox;