import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


const Blue = (props) => {
  return (
    <h1>BLUE</h1>
  );
};

const App = (props) => {
  return (
    <BrowserRouter>
      <h1>Hello!</h1>
      <Routes>
        <Route path="/" element={<Blue />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
