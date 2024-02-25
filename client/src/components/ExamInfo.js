import Infobox from "./InfoBox";
import ExamThumbnail from "./ExamThumbnail"

function ExamBox({examInfo}) {
    console.log(examInfo);

    let items = [];

    for (const [key, value] of Object.entries(examInfo).slice(8,12)){
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