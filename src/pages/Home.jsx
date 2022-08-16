import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1 className="centered">Home</h1>
      <br />
      <Link to={"flex"} className="link" >Flex Example</Link>
      <Link to={"grid"} className="link" >Grid Example</Link>
    </div>
  )
}
export default Home;
