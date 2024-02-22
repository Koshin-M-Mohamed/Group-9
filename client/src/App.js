import "./App.css";
import Table from "./table";
import Search from "./Search.js";
//import CreateExam from "./CreateExam.js"
import fakeData from "./mockData.js";
//import { useApi } from './hooks/use-api';
import {Link} from "react-router-dom";

function App() {
  //const { response } = useApi();
  const response = fakeData;
  // display columns
  const columns = [
    "Patient_ID",
    "Age",
    "Sex",
    "Zip",
    "Latest_BMI",
    "Latest_Weight",
    "Image",
    "Exam_Id",
    "ICU_Admit",
    "ICU_admits",
    "Mortality",
  
  ];

  // define 2 functions
  // 1. handleDelete
    // 1.1. delete from db
  // 2. handleEdit
    // 2.1. option => forward the user to /patient?patientId=1234&action=edit
    // 2.2 option => create a modal/ popup to edit the data
    // (*) 2.3 option => create a new page called /patient/edit?patientId=1234
  // 3. add these 2 function to our buttons using their "onClick" prop
    // <DeleteButton onClick={handleDelete} label="Delete" />
  // 4. creation -> add createButton (Check NOTE)
    // 4.1

  

  // NOTE:
  // render cell passes: (colName, data, row, rowIndex)

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Link to="/Admin">Admin Page</Link>
          <Search />
          {response && (
            <Table
              data={response}
              cols={columns}
            />
          )}
        </header>
      </div>
    </>
  );
}
export default App;
