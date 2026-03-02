 

import Home from './pages/Home'

import Weather from './pages/WeatherHome'

import { BrowserRouter, Routes, Route } from 'react-router-dom';



export default function App() {
  
  return (
     <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path="/weatherapp" element={<Weather/>} />
        
      </Routes>
    </BrowserRouter>
  );
}


