const Card = ({label, col, wrap}) => {
    return <div className={`card width10per ${col} ${wrap}`}>{label}</div>
}
export default Card;
