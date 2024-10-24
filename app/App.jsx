import About from "./components/About";
import Hero from "./components/Hero";
import WorkEx from "./components/WorkEx";

export default function App() {
    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <div className="w-[650px] space-y-10">
                <Hero />
                <About />
                <WorkEx />
            </div>
        </div>
    )
}
