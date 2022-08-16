import { Link } from 'react-router-dom';
import Card from '../card/Card';

const Grid = () => {
  const elems = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className="container">
      <h1 className="centered">Grid</h1>
      <Link to="/" className='link linkBtn'>BACK</Link>
      <div className="container">
        {elems.map(x => <Card key={x} x={x} />)}
      </div>
    </div>
  )
}
export default Grid;
