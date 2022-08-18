import { useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../card/GridItem';
import LayoutItem from '../card/LayoutItem';
import GridControlProcents   from '../components/grid/controls/GridControlProcents';
import GridControlFractions  from '../components/grid/controls/GridControlFractions';
import GridControlColumnGap  from '../components/grid/controls/GridControlColumnGap';
import GridControlAutoRows   from '../components/grid/controls/GridControlAutoRows';
import { gridItemContent }   from '../utils/selectGridTemplateColsData.js';
import { layoutContent   }   from '../utils/selectGridTemplateColsData.js';
import { templateContent }   from '../utils/selectGridTemplateColsData.js';
import GridControlAlignItems from '../components/grid/controls/GridControlAlignItems';
import GridControlLayout     from '../components/grid/controls/GridControlLayout';
import GridControlTemplate   from '../components/grid/controls/GridControlTemplate';
import TemplateItem from '../card/TemplateItem';

const Grid = () => {
  const elems = [1, 2, 3, 4, 5, 6, 7, 8];
  const [gridTemplateColumns,   setGridTemplateColumns  ] = useState({gridTemplateColumns:"100%"});
  const [gridTemplateColumnsFr, setGridTemplateColumnsFr] = useState({gridTemplateColumns:"1fr"});
  const [gridColumnGap, setGridColumnGap] = useState("");
  const [gridRowsAlignment, setGridRowsAlignment] = useState("");
  const [gridAlignItems, setGridAlignItems] = useState("");
  const [layout, setLayout] = useState(0);
  const [template, setTemplate] = useState("");

  const addGridTemplateColumns = (val) => {
    let c1 = (val.col1 && val.col1 !=='0') ? `${val.col1}% ` : "";
    let c2 = (val.col2 && val.col2 !=='0') ? `${val.col2}% ` : "";
    let c3 = (val.col3 && val.col3 !=='0') ? `${val.col3}% ` : "";
    let c4 = (val.col4 && val.col4 !=='0') ? `${val.col4}% ` : "";
    let c = c1 + c2 + c3 + c4;
    // console.log(c);
    setGridTemplateColumns({gridTemplateColumns:c});
  }

  const addGridTemplateColumnsFr = (val) => {
    let v1 = (val.col1 && val.col1 !=='0') ? `${val.col1}fr ` : "";
    let v2 = (val.col2 && val.col2 !=='0') ? `${val.col2}fr ` : "";
    let v3 = (val.col3 && val.col3 !=='0') ? `${val.col3}fr ` : "";
    let v = v1 + v2 + v3;
    // console.log(v);
    setGridTemplateColumnsFr({gridTemplateColumns:v});
  }

  const addGridColumnGap = (e) => {
    // console.log(e.target.value);
    setGridColumnGap("columnGap" + e.target.value);
  }

  const addGridRowsAlignment = (e) => {
    // console.log("gridAutoRows" + e.target.value);
    setGridRowsAlignment("gridAutoRows" + e.target.value);
  }
  
  const addGridAlignItems = (e) => {
    // console.log("gridAlignItems" + e.target.value);
    setGridAlignItems("gridAlignItems" + e.target.value);
  }
  
  const changeLayout = (e) => {
    let n = Number(e.target.value.substring(8));
    // console.log(n + " type:" + typeof n);
    setLayout(n);
  }

  const changeTemplate = (e) => {
    let cl = "gridTemplateAreas" + e.target.value.substring(9);
    // console.log("Adding class: " + cl);
    setTemplate(cl);
  }

  return (
    <div className="container">
      <h1 className="centered">Grid</h1>
      <Link to="/" className='link linkBtn'>BACK</Link>
      <GridControlProcents  handler={addGridTemplateColumns} />
      <div style={gridTemplateColumns} className={`grid-container`}>
        { elems.map(x => <Item key={x} label={x} />) }
      </div>
      <br/><hr/>
      <GridControlFractions handler={addGridTemplateColumnsFr} />
      <div style={gridTemplateColumnsFr} className={`grid-container`}>
        { elems.map(x => <Item key={x} label={x} />) }
      </div>
      <br/><hr/>
      <GridControlColumnGap handler={addGridColumnGap} />
      <div className={`gridControlFractions ${gridColumnGap}`}>
        { elems.map(x => <Item key={x} label={x} />) }
      </div>
      <br/><hr/>
      <GridControlAutoRows handler={addGridRowsAlignment} />
      <div className={`gridControlFractions columnGapSmall ${gridRowsAlignment}`}>
        { gridItemContent.map(x => <Item key={x.id} label={x.value} />) }
      </div>
      <br/><hr/>
      <GridControlAlignItems handler={addGridAlignItems} />
      <div className={`gridControlFractions columnGapSmall ${gridAlignItems}`}>
        { gridItemContent.map(x => <Item key={x.id} label={x.value} />) }
      </div>
      <br/><hr />
      <GridControlLayout handler={changeLayout} />
      <div className={`gridControlTwoFractions columnGapSmall`}>
        { layoutContent.map(x => <LayoutItem key={x.id} label={x.value} lid={x.id} layoutId={layout} />) }
      </div>
      <br/><hr/>
      <GridControlTemplate handler={changeTemplate} />
      <div className={`gridControlTwoFractions columnGapSmall ${template}`}>
        { templateContent.map(x => <TemplateItem key={x.id} label={x.value} classNm={x.classNm} />) }
      </div>
      <br/><hr/>
    </div>
  )
}
export default Grid;
