import './form.css'

export default function  Form({ setCity,city,callAPI }) {
  function stateControl(e){
    setCity(e.target.value)
  }
  
  return (
    <div className="flx">
      <form>
        <div className="items lbl"><label>Type the city you want data for:</label></div>

         <div className="items tb"><input
          onChange={stateControl}
          type="text"
          name="city"
          value={city}
        ></input></div>

         <div className="items btn"><button onClick={callAPI}>Submit</button></div>
      </form>
      </div>
  );
}

