import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoodMeter from "./components/MoodMeter";
import Menu from "./components/Menu/Menu";
import Home from './components/Home';
import MoodsHistory from "./components/MoodsHistory";
import Intro from "./components/Intro";

const App: React.FC = () => {
    return (
        <Router>
            <div className="App Container">
                <Routes>
                    <Route path="/mood-meter" element={<MoodMeter />} />
                    <Route path="/history" element={<MoodsHistory />} />
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/" element={<Home />} />
                </Routes>
                <Menu />
            </div>
        </Router>
    );
}

export default App;