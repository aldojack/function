import CarouselContainer from "./components/CarouselContainer"
import DoorwayContainer from "./components/DoorwayContainer"
import Feature from "./components/Feature"
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <div className="w-full">
      <Navbar/>
      <main className="h-screen">
      <Feature/>
      <CarouselContainer/>
      <DoorwayContainer/>
      </main>
    </div>
  )
}

export default App
