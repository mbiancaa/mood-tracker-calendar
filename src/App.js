import './App.css';
import MoodMeter from "./components/MoodMeter";
import MoodOverview from "./components/MoodOverview";

function App() {
  return (
    <div className="App">
        <MoodOverview />
        <MoodMeter />
    </div>
  );
}

export default App;
