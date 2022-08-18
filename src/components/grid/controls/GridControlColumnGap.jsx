import {gridTemplateColsGaps} from "./../../../utils/selectGridTemplateColsData.js";
import Select from "../selections/Select.jsx";

const GridControlColumnGap = ({handler}) => {
  return (
    <div className="margined">
      <h2 className="centered">Select gap size</h2>
      <Select handle={e => handler(e)} options={gridTemplateColsGaps} />
    </div>
  );
}
export default GridControlColumnGap;
