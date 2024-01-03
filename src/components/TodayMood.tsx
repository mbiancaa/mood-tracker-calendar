import React from 'react';

interface TodayMoodProps {
    mood: {
        [moodName: string]: {
            date: string;
            color: string;
        };
    };
}

const TodayMood: React.FC<TodayMoodProps> = ({mood}) => {

    const moodName = Object.keys(mood)[0];
    const moodEntry = Object.values(mood)[0];

    return (
        <div>
            <h4>Today you are feeling</h4>
            <p
                style={{color: moodEntry.color}}
                className={`TodayMood`}
            >{moodName}</p>
        </div>
    );
}

export default TodayMood;