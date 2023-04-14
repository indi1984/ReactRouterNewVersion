import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Blue, Red, Yellow } from './index';


const App = (props) => {
  return (
    <BrowserRouter>
      <h1>Hello!</h1>
      <nav>
        <p>
          <Link to='/'>Go to BLUE</Link>
        </p>
        <p>
          <Link to='/red'>Go to RED</Link>
        </p>
        <p>
          <Link to='/red/yellow'>Go to YELLOW</Link>
        </p>
      </nav>
      <Routes>
        <Route path="/" element={ <Blue /> }/>
        <Route path="/red" element={ <Red /> }/>
        <Route path="/red/yellow" element={ <Yellow/> }/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
