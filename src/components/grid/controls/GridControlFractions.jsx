import { useState } from "react";
import {gridTemplateColsDataFractions} from "./../../../utils/selectGridTemplateColsData.js";
import Select from "../selections/Select.jsx";

const GridControlFractions = ({handler}) => {

  const [settings, setSettings] = useState({col1:"1",col2:"1",col3:"1"});
  const setColValue1 = e => { setSettings( {...settings, col1:e.target.value}) };
  const setColValue2 = e => { setSettings( {...settings, col2:e.target.value}) };
  const setColValue3 = e => { setSettings( {...settings, col3:e.target.value}) };
  
  return (
    <div className="margined blackBorder">
      <h2 className="margined centered">Select columns' width in fractions(fr) and click "UPDATE FRACTIONS" button</h2>
      <div className='gridControlFractions'>
        <div>
          <p>Fraction 1</p>
          <Select options={gridTemplateColsDataFractions} handle={setColValue1} />
        </div>
        <div>
          <p>Fraction 2</p>
          <Select options={gridTemplateColsDataFractions} handle={setColValue2} />
        </div>
        <div>
          <p>Fraction 3</p>
          <Select options={gridTemplateColsDataFractions} handle={setColValue3} />
        </div>
      </div>
      <button className="btn pointer centeredBtn" onClick={() => handler(settings)}>UPDATE FRACTIONS</button>
      <br/>
    </div>
  );
}
export default GridControlFractions;
