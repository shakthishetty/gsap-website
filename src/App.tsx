import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

 gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
  return (
    <div className = ' flex-center text-[100vh]'>
        <h1 className="text-3xl text-blue-700">gsap-moktail</h1>
    </div>
  )
}

export default App

