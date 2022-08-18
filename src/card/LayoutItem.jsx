const LayoutItem = ({label, lid, layoutId}) => {
    return <div className={`gridItem ${lid === layoutId && "itemlayout"}`}>{label}</div>
}
export default LayoutItem;
