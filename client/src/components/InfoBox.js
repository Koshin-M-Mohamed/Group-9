import Category_Row from "./CategoryRow";
import DataRow from "./DataRow";


function Infobox(props){
    return (
        <div>
            <Category_Row category={props.listed_info.category}/>
            <DataRow data={props.listed_info.data}/>
        </div>
    );
}

export default Infobox;