import './navbar.css'

export default function Navbar(){
    return(
        
    <navbar>
      <ul className="flxbx">
        <li className="cell">
          <a className="links" href="/">
            Home
          </a>
        </li>
        <li className="cell">
          <a className="links" href="/weatherapp">
            Weather App
          </a>
        </li>
        
      </ul>
    </navbar>
  );
}