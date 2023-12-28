import MoodQuadrant from "./MoodQuadrant";
import { Moods } from "../constants/moods";

export default function MoodMeter() {

    return (
        <div className="MoodMeter">
            {
                Object.keys(Moods).map((quadrant, i) => <MoodQuadrant key={i} type={quadrant} />)
            }
        </div>
    );

}