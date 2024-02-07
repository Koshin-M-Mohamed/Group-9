import CategoryRow from "./CategoryRow";
import InfoBox from "./InfoBox";

let exam_cat = ["Exam ID", "ICU Admit", "ICU Admissions", "Mortality"]; 

function ExamBox() {
    return (
        <div className="App-exampane">
            <CategoryRow cat={"Exam Information"}/>
            <img src={require("./test.jpg")} width="300px" height="300px" alt="" />
            {exam_cat.map((category) => {
                return (
                <InfoBox listed_info = {{cat:category, data : "N/A"}}/>
            )})}
        </div>

    );
}

export default ExamBox;