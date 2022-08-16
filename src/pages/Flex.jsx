import { useState } from 'react';
import {Link} from 'react-router-dom';
import Card from '../card/Card';
import AlignmentControl from '../components/controls/AlignmentControl';
import { mainAxisContent, justifyContentData, alignItemsData, flexWrapData, flexBasisData } from './../utils/selectAxisAlignContent.js';

const Flex = () => {

  const nums = [1, 2, 3, ];
  const manyItems = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  const [additionalClass, setAdditionalClass] = useState("");
  const [justifyContent,  setJustifyContent ] = useState("");
  const [alignItems,      setAlignItems     ] = useState("");
  const [flexWrap,        setFlexWrap       ] = useState("");
  const [flexBasis,       setFlexBasis      ] = useState("");
  const [cols,            setCols           ] = useState([1, 2, 3, 4]);

  const onMainAxisSelect = (e) => {
    setAdditionalClass(e.target.value);
  }
  const onJustifyContentSelect = (e) => {
    setJustifyContent(e.target.value);
  }
  const onAlignItemsSelect = (e) => {
    setAlignItems(e.target.value);
  }
  const onFlexWrapSelect = (e) => {
    setFlexWrap(e.target.value);
  }
  const onFlexBasisSelect = (e) => {
    let colsNum = Number(e.target.value.substring(9, 11));
    colsNum = Math.round(100 / colsNum);
    switch (colsNum) {
      case 2:  setCols([1, 2]);          break;
      case 3:  setCols([1, 2, 3]);       break;
      case 4:  setCols([1, 2, 3, 4]);    break;
      default: setCols([1, 2, 3, 4, 5]); break;
    }
    // console.log("cols="+cols + ", type:" + typeof cols);
    setFlexBasis(e.target.value);
  }

  return (
    <div className="container">
      <h1 className="centered">Flex</h1>
      <Link to="/" className='link linkBtn'>BACK</Link>
      <h3 className='centered'>Flex-container</h3>
      <div className={`flexedContainer ${additionalClass} ${justifyContent} ${alignItems}`}>
        {nums.map(n => <Card key={n} label={n} />)}
      </div>
      <div className={`flexed`}>
        <AlignmentControl label="Main axis alignment (flex-direction):" 
                          onSelect={onMainAxisSelect} 
                          options={mainAxisContent} />
        <AlignmentControl label="Justify content alignment (justify-content):" 
                          onSelect={onJustifyContentSelect} 
                          options={ justifyContentData } />
      </div>
      <AlignmentControl label="Cross axis alignment (align-items):" 
                        onSelect={onAlignItemsSelect} 
                        options={alignItemsData} >
      </AlignmentControl>
      <h3 className='centered margined'>Flex-container for a lot of items</h3>
      <div className={`flexedContainer ${flexWrap}`}>
        {manyItems.map(n => <Card key={n} label={n} />)}
      </div>
      <AlignmentControl label="Many items alignment (flex-wrap):" 
                        onSelect={onFlexWrapSelect} 
                        options={flexWrapData} >
      </AlignmentControl>
      <h3 className='centered margined'>Flex-container and columns</h3>
      <div className={`flexedContainer`}>
        {cols.map(n => <Card key={n} label={n} col={flexBasis} wrap={"flexWrapWrap"} />)}
      </div>
      <AlignmentControl label="Change width of columns (flex-basis):" 
                        onSelect={onFlexBasisSelect} 
                        options={flexBasisData} >
      </AlignmentControl>

      <a className='link' href="http://flexboxfroggy.com/#ru">Details...</a>
    </div>
  )
}
export default Flex;
