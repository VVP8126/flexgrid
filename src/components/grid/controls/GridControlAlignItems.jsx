import { gridAlignItemsContent } from "./../../../utils/selectGridTemplateColsData.js";
import Select from "../selections/Select.jsx";

const GridControlAlignItems = ({handler}) => {
  return (
    <div className="margined">
      <h2 className="centered">Select item alignment regime</h2>
      <Select handle={e => handler(e)} options={gridAlignItemsContent} />
    </div>
  );
}
export default GridControlAlignItems;
