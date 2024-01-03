import MoodQuadrant from "./MoodQuadrant";
import { Moods } from "../constants/moods";
import React from "react";

const MoodMeter: React.FC = () => {

    return (
        <div className="MoodMeter">
            {
                Object.keys(Moods).map((quadrant, i) => <MoodQuadrant key={i} type={quadrant} />)
            }
        </div>
    );

}

export default MoodMeter;