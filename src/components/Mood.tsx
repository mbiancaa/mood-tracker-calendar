import { generateColorForMood } from "../helpers";
import useMoodTracker from "../customHooks/useMoodTracker";
import React from "react";

interface MoodProps {
    moodIndex: number,
    moodText: string,
    moodType: string
}

const Mood: React.FC<MoodProps> = (props) => {

    const { moodIndex, moodText, moodType } = props;
    const moodBackgroundColor = generateColorForMood(moodIndex, moodType);
    const { addMoodToTracker } = useMoodTracker();

    const selectMood = () => {
        addMoodToTracker(moodText, moodBackgroundColor);
    };

    return (
        <div
            className={`Mood`}
            style={{backgroundColor: moodBackgroundColor}}
            onClick={selectMood}
        >
            <span className="MoodText">{moodText}</span>
        </div>
    );

}

export default Mood;