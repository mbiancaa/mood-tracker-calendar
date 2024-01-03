import React from 'react';
import TrackMoodButton from "./TrackMoodButton";
import TodayMood from "./TodayMood";
import useMoodTracker from "../customHooks/useMoodTracker";

const Home: React.FC = () => {
    const { getTodayMood } = useMoodTracker();
    const todayMood = getTodayMood();

    return (
        <>
            {Object.keys(todayMood).length ? (
                <TodayMood mood={todayMood} />
            ) : (
                <TrackMoodButton />
            )}
        </>
    );
}

export default Home;