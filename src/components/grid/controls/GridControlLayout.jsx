import { layoutSelection } from "./../../../utils/selectGridTemplateColsData.js";
import Select from "../selections/Select.jsx";

const GridControlLayout = ({handler}) => {
  return (
    <div className="margined">
      <h2 className="centered">Select layout variant</h2>
      <Select handle={e => handler(e)} options={layoutSelection} />
    </div>
  );
}
export default GridControlLayout;
