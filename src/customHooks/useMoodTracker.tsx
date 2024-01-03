import { useState } from 'react';

function useMoodTracker() {
    const getInitialMoodTrackerData = () => {
        const existingData = localStorage.getItem('MoodTracker');
        return existingData ? JSON.parse(existingData) : {};
    };

    const [moodTrackerData, setMoodTrackerData] = useState(getInitialMoodTrackerData);

    const addMoodToTracker = (moodText: string, moodBackgroundColor: string) => {
        const date = new Date().toISOString().substring(0, 10);
        const updatedMoodTrackerData = {
            ...moodTrackerData,
            [moodText]: { date, color: moodBackgroundColor }
        };

        localStorage.setItem('MoodTracker', JSON.stringify(updatedMoodTrackerData));
        setMoodTrackerData(updatedMoodTrackerData);
    };

    interface MoodTrackerData {
        [mood: string]: {
            date: string;
            color: string;
        };
    }

    const getAllTrackedMoods = (): MoodTrackerData => {
        const storedDataString = localStorage.getItem('MoodTracker');
        return storedDataString
            ? JSON.parse(storedDataString) as MoodTrackerData
            : {};
    };

    const getTodayMood = (): { [mood: string]: { date: string; color: string } } => {
        const allTrackedMoods = getAllTrackedMoods();
        const currentDate = new Date().toISOString().substring(0, 10);

        return Object.fromEntries(
            Object.entries(allTrackedMoods).filter(([_, moodData]) => moodData.date === currentDate)
        );
    };

    return {
        moodTrackerData,
        addMoodToTracker,
        getAllTrackedMoods,
        getTodayMood
    };
}

export default useMoodTracker;