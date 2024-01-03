import React from "react";

const Intro: React.FC = () => {
    return (
        <div className="Container">
            <p>
                Emotion tracking serves as a valuable tool in promoting self-awareness, stress reduction, effective communication, and overall mental well-being.
                It helps you to take proactive steps towards understanding, managing, and improving your emotional intelligence.
            </p>
            <p>
                We will use a mood quadrant, which divides feelings into 4 distinct categories:
            </p>
            <ul className="ColorsList">
                <li style={{color: `#0014ff`}}>Blue: Low Energy & Unpleasant</li>
                <li style={{color: `#2df042`}}>Green: Low Energy & Pleasant</li>
                <li style={{color: `#ffdf14`}}>Yellow: High Energy & Pleasant</li>
                <li style={{color: `#ff2100`}}>Red: High Energy & Unpleasant</li>
            </ul>
        </div>
    )
}

export default Intro;