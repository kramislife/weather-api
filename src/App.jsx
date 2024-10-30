import Temperature from "./components/Hero/Temperature";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="bg-base text-surface h-screen w-screen">
      <Navbar />
      <Temperature />
    </div>
  );
};

export default App;
