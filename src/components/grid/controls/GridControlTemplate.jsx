import { templateSelection } from "./../../../utils/selectGridTemplateColsData.js";
import Select from "../selections/Select.jsx";

const GridControlTemplate = ({handler}) => {
  return (
    <div className="margined">
      <h2 className="centered">Select template</h2>
      <Select handle={e => handler(e)} options={templateSelection} />
    </div>
  );
}
export default GridControlTemplate;
