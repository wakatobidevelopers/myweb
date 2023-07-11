import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TagName from './pages/Pages'
import { routers } from './components/router';
import React, {Suspense} from 'react';
import PageSlider from './components/PageSlider';
import ReactSwipe from 'react-swipe';
import Buttons from './components/Buttons';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  let reactSwipeEl
  return (
 
    <div className="App">
      <Navbar />

      {/* <button onClick={() => navigate(1)}>Next</button> */}
   
      <Routes>
      {routers.map((items, index) =>
          <Route key={index} path={items.path} element={<TagName name={items.name} />} />
          )}  
          <Route index element={<TagName name='Home' />} />
      </Routes>
    </div>
    
  );
}

export default App;
