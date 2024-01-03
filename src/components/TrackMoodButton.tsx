import React from "react";
import { Link } from 'react-router-dom';

const TrackMoodButton: React.FC = () => {
    return (
        <>
            <h2>Track Your Mood for Today</h2>
            <Link to="/mood-meter" className={`TrackMoodButton`}>
                Today I feel...
            </Link>
        </>
    );
}

export default TrackMoodButton;