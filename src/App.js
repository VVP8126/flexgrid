import './styles/styles.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Grid from './pages/Grid';
import Flex from './pages/Flex';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index        element={ <Home /> } />
          <Route path='grid'  element={ <Grid /> } />
          <Route path='flex'  element={ <Flex /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
