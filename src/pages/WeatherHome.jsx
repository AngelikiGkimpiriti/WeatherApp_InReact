import Navbar from '../components/home/Navbar'
import Table from '../components/weatherapp/wTable'
import Form  from '../components/weatherapp/wForm'


import { useState, useEffect } from "react";

export default function Weather() {
     const [city, setCity] = useState("");
    const [wData, setwData] = useState(null);
    const url = `${import.meta.env.VITE_API_BASE_URL}/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`;

    function stateControl(e) {
    setCity(e.target.value);
    }

     function makeTheCall(e){
      e.preventDefault()

      if(!city.trim()){
      alert("Input a city!")
      return;
      }
  
    fetch(url)
      .then((res) => res.json())
      .then((Weatherdata) => setwData(Weatherdata));
    };

   return (
    <div >
      <header>
        <header>
              <Navbar/>
              </header>
      </header>
        <main>
        <Form  setCity={setCity} callAPI={makeTheCall} city={city} /> 
        <Table weathData={wData}/> 
      </main>
    </div>
  );
  }