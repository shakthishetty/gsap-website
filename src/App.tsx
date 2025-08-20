import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Cocktail from "./components/Cocktail"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

 gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
  return (
      <main>
        <Navbar  />
        <Hero/>
        <Cocktail/>
      </main>
  )
}

export default App

