// components/CookingTimer.tsx
import { useEffect, useState } from "react";

interface CookingTimerProps {
    cookingTime: number; // Cooking time in minutes
}

export const CookingTimer: React.FC<CookingTimerProps> = ({ cookingTime }) => {
    const [seconds, setSeconds] = useState(cookingTime * 60); // Convert cooking time to seconds
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;

        if (isRunning && seconds > 0) {
            timer = setInterval(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);
        }

        if (seconds <= 0) {
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        };
    }, [isRunning, seconds]);

    const startTimer = () => {
        setIsRunning(true);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setSeconds(cookingTime * 60);
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
    };

    return (
        <div className="flex items-center gap-4 mt-6">
            <div className="text-xl font-semibold">Cooking Time: {formatTime(seconds)}</div>
            <div>
                {!isRunning ? (
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={startTimer}
                    >
                        Start Timer
                    </button>
                ) : (
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={resetTimer}
                    >
                        Reset Timer
                    </button>
                )}
            </div>
        </div>
    );
};
