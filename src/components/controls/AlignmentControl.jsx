const AlignmentControl = ( { options, label, onSelect } ) => {
    return (
        <div className='alignmentControl'>
          <label className='selections'>{label}</label>
          <select className='selections' onChange={(e) => onSelect(e)} >
            {options.map(op => <option key={op.id} value={op.clName}>{op.value}</option>)}
          </select>
        </div>
    );
}
export default AlignmentControl;
