import CategoryRow from "./CategoryRow";
import DataRow from "./DataRow";


function Infobox(props){
    return (
        <div>
            <CategoryRow className="App-categoryheader" cat={props.listed_info.cat}/>
            <DataRow className="App-infodata" data={props.listed_info.data}/>
        </div>
    );
}

export default Infobox;