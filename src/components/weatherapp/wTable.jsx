import './table.css'

export default function Table({ weathData }) {
  

  return (
    
       weathData?.weather && (
        <table className="flx2">
           <thead>
          <tr>
            <th>City</th>
            <th>Weather</th>
            <th>Temperature</th>
            <th>Wind</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{weathData.name}</td>
            <td>{weathData.weather?.[0]?.main}</td>
            <td>{weathData.main?.temp} °C</td>
            <td>{weathData.wind?.speed} m/s</td>
          </tr>
        </tbody>
      </table>
      
      )
    
  );
}

