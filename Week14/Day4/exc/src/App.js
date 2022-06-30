import "./App.css";
import Car from "./Components/Car";
import Events from "./Components/Events";
import Phone from "./Components/Phone";
import Color from "./Components/Color";

const carinfo = { name: "Ford", model: "Mustang" };
function App() {
  return (
    <div className="App">
      <Car carInfo={carinfo} />
      <Events />
      <Phone />
      <Color />
    </div>
  );
}

export default App;