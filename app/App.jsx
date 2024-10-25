import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hackathon from "./components/Hackathon";
import Hero from "./components/Hero";
import MyProjects from "./components/MyProjects";
import Research from "./components/Research";
import Skills from "./components/Skills";
import WorkEx from "./components/WorkEx";
// import MyDock from "./components/MyDock";

export default function App() {
    return (
        <div className="flex flex-col justify-center items-center mt-20 pb-20">
            <div className="w-[380px] lg:w-[650px] space-y-10">
                <Hero />
                <About />
                <WorkEx />
                <Education />
                <Skills />
                <MyProjects />
                <Hackathon />
                <Research />
                <Contact />
                {/* <MyDock /> */}
            </div>
        </div>
    )
}
