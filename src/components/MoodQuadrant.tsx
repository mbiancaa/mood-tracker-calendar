import Mood from "./Mood";
import { Moods } from '../constants/moods';
import React from "react";

interface MoodQuadrantProps {
    type: string
}

const MoodQuadrant: React.FC<MoodQuadrantProps> = (props) => {

    const { type } = props;

    return (
        <div className={`MoodQuadrant ${type}`}>
            {Object.keys(Moods[type] || {}).map((mood, i) => (
                <Mood key={i} moodIndex={i} moodText={mood} moodType={type} />
            ))}
        </div>
    );

}

export default MoodQuadrant;