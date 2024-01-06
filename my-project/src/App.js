import logo from './logo.svg';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Analytics from './Components/Analytics'
import './App.css';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import Newsletter from './Components/Newsletter';
import Card from './Components/Card';
import Footer from './Components/Footer';

function App() {
  return (
<div>
   <Navbar/>
   <Hero/>
   <Analytics/>
   <Newsletter/>
   <Card/>
   <Footer/>
   </div>
  );
}

export default App;
