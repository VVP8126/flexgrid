const Select = ({handle, options}) => {
  return (
    <select onChange={e => handle(e)} className="pointer">
      { options.map(op => <option key={op.id}>{op.value}</option>) }
    </select>
  );
}
export default Select;
