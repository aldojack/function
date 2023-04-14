import Banner from "./components/Banner"
import CarouselContainer from "./components/CarouselContainer"
import DoorwayContainer from "./components/DoorwayContainer"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-grow">
      <Feature/>
      <CarouselContainer/>
      <DoorwayContainer/>
      <Banner/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
