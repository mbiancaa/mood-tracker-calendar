import { generateColorForMood } from "../helpers";

export default function Mood(props) {

    const { moodIndex, moodText, moodType } = props;

    return (
        <div
            className={`Mood`}
            style={{backgroundColor: generateColorForMood(moodIndex, moodType)}}
        >
            <span className="MoodText">{moodText}</span>
        </div>
    );

}