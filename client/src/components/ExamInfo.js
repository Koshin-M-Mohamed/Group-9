import Infobox from "./InfoBox";
import ExamThumbnail from "./ExamThumbnail"

function ExamBox({examInfo}) {

    const ExamData = {
        'Exam ID': examInfo.exam_Id,
        'ICU Admit?': examInfo['ICU Admit'],
        '# ICU Admits': examInfo['# ICU admits'],
        'Mortality': examInfo.Mortality,
    };

    let items = [];

    for (const [key, value] of Object.entries(ExamData)){
        items.push(<Infobox listed_info = {{cat : key, data : value}}/>)
    }

    return (
        <div className="App-exampane">
            {items}
            <ExamThumbnail img_link={examInfo.png_filename}/>
        </div>

    );
}

export default ExamBox;