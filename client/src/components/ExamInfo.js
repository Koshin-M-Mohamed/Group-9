import CategoryRow from "./CategoryRow";
import InfoBox from "./InfoBox";

let exam_cat = ["Exam ID", "ICU Admit", "ICU Admissions", "Mortality"];
let pii_cat = ["Patient ID", "Age", "Sex", "ZIP", "Latest BMI", "Latest Weight"]; 

function ExamBox() {
    return (
        <div className="App-exampane">
            <CategoryRow cat={"Exam Information"}/>
            <img width="300px" height="300px" alt="" src="test.jpg"></img>
            <InfoBox 
            listed_info={{
                category : exam_cat[0],
                data : "N/A"}}
            />
            {exam_cat.map((category) => {
                return (
                <InfoBox listed_info = {{cat:category, data : "N/A"}}/>
            )})}
        </div>

    );
}

export default ExamBox;