import { gridAutoRowsContent } from "./../../../utils/selectGridTemplateColsData.js";
import Select from "../selections/Select.jsx";

const GridControlAutoRows = ({handler}) => {
  return (
    <div className="margined">
      <h2 className="centered">Select row alignment</h2>
      <Select handle={e => handler(e)} options={gridAutoRowsContent} />
    </div>
  );
}
export default GridControlAutoRows;
