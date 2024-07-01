import React from 'react'
import Navibar from '../Navibar/Navibar'
import Banner from '../Banner/Banner'
import About from '../About/About'
import Essence from '../Essence/Essence'
import WhyChoose from '../WhyChoose/WhyChoose'
import Counter from '../Counter/Counter'
import Testimoniall from '../Testimoniall/Testimoniall'
import Footer from '../Footer/Footer'
import Mission from '../Mission/Mission'




function Home() {
  return (
    <>
      {/* <Navibar/> */}
      <Banner/>
      <About/>
     
      <Essence/>
    
     <WhyChoose/>
     <Counter/>
     <Testimoniall/>
     <Mission/>
     
     <Footer/>
   
    </>
  )
}

export default Home
