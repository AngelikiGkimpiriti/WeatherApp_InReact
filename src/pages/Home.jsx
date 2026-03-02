import Navbar from '../components/home/Navbar'
import  Headers  from '../components/home/header'
import Description from '../components/home/desc'
import './home.css'

export default function Home() {
  
  return (
    <div>
      <header>
      <Navbar/>
      </header>

    
      <main>
        <div className="cont">
        <Headers />
        <Description />
        </div>
      </main>
      
    </div>
  );
}
