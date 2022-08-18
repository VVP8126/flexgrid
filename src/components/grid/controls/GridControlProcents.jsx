import { useState } from "react";
import {gridTemplateColsDataPercents} from "./../../../utils/selectGridTemplateColsData.js";
import Select from "../selections/Select.jsx";

const GridControlProcents = ({handler}) => {
  const [settings, setSettings] = useState({col1:"0",col2:"0",col3:"0",col4:"0"});
  const setColValue1 = e => { setSettings({...settings, col1:e.target.value}) };
  const setColValue2 = e => { setSettings({...settings, col2:e.target.value}) };
  const setColValue3 = e => { setSettings({...settings, col3:e.target.value}) };
  const setColValue4 = e => { setSettings({...settings, col4:e.target.value}) };

  return (
    <div className="margined blackBorder">
      <h2 className="margined centered">Select columns' width in procent(%) and click "UPDATE" button</h2>
      <div className='gridControlProcents'>
        <div>
          <p>Procent 1</p>
          <Select options={gridTemplateColsDataPercents} handle={setColValue1} />
        </div>
        <div>
          <p>Procent 2</p>
          <Select options={gridTemplateColsDataPercents} handle={setColValue2} />
        </div>
        <div>
          <p>Procent 3</p>
          <Select options={gridTemplateColsDataPercents} handle={setColValue3} />
        </div>
        <div>
          <p>Procent 4</p>
          <Select options={gridTemplateColsDataPercents} handle={setColValue4} />
        </div>
      </div>
      <button className="btn pointer centeredBtn" onClick={() => handler(settings)}>UPDATE</button>
      <br/>
    </div>
  );
}
export default GridControlProcents;
