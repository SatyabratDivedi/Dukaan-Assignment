import "./App.css";
import HeroSection from "./Component/HeroSection";
import Sidebar from "./Component/Sidebar";

function App() {
  return (
    <>
      <div className=" w-[100vw] h-[100vh] flex  ">
        <Sidebar />
        <HeroSection />
      </div>
    </>
  );
}

export default App;
