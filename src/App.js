import Navbar from "./Component/Navbar"
import HeroSection from "./Component/HeroSection"
import '../src/App.css'
import OurClients from "./Component/OurClients"
import Helping from "./Component/Helping"
import HowToDesign from "./Component/HowToDesign"
import MeetAllCustomers from "./Component/MeetAllCustomers"
import CaringMarketing from "./Component/CaringMarketing"
import GetDemo from "./Component/GetDemo"
import Footer from "./Component/Footer"

const App = ()=> {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <OurClients/>
    <Helping/>
    <HowToDesign/>
    <MeetAllCustomers/>
    <CaringMarketing/>
    <GetDemo/>
    <Footer/>
    </>
  )
}

export default App;
