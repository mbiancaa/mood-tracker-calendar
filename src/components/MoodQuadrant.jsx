import Mood from "./Mood";
import { Moods } from '../constants/moods';

export default function MoodQuadrant(props) {

    const { type } = props;

    return (
        <div className={`MoodQuadrant ${type}`}>
            {
                Object.keys(Moods[type] || {}).map((mood, i) => <Mood key={i} moodIndex={i} moodText={mood} moodType={type} />)
            }
        </div>
    );

}