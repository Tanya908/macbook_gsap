import NavBar from "./components/NavBar.tsx";
import Hero from "./components/Hero.tsx";
import ProductViewer from "./components/ProductViewer.tsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <ProductViewer/>
        </main>
    )
}
export default App
