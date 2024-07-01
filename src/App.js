import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Navibar from './Components/Navibar/Navibar';
import About from './Pages/About';
import Banquet from './Pages/Banquet';
import Event from './Pages/Event';
import GalleryData from './Pages/GalleryData';

function App() {
  return (
   <>
   <Navibar/>
   {/* <Banquet/> */}
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about-page' element={<About/>}/>
    <Route path='/banquet-page' element={<Banquet/>}/>
    <Route path='/gallery-page' element={<Gallery/>}/>
    <Route path='/event-page' element={<Event/>}/>
    <Route path='/contact' element={<Contact/>}/>
    {
      GalleryData.map((v,i)=>{
        return(<>
          <Route  
           key={i}
           exact
           path={v.slug}
           element={<Event/>}
          
          />
        </>)
      })
    }
   </Routes>
   </>
  );
}

export default App;
