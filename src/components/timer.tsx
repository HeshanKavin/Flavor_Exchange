import { useState, useEffect } from "react";
import { Button } from "./ui/button";

interface TimerProps {
  cookingTime: string; // Cooking time in minutes (e.g., "30 mins")
}

const Timer = ({ cookingTime }: TimerProps) => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Convert cooking time to seconds
  useEffect(() => {
    const timeInMinutes = parseInt(cookingTime.split(" ")[0], 10);
    setSecondsLeft(timeInMinutes * 60);
  }, [cookingTime]);

  // Timer function
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isActive && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsActive(false);
      // alert("Time's up!");
    }

    return () => clearInterval(timer); // Cleanup on unmount
  }, [isActive, secondsLeft]);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  const startStopTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSecondsLeft(parseInt(cookingTime.split(" ")[0], 10) * 60);
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="text-8xl font-semibold">{formatTime(secondsLeft)}</div>
      <div className="flex mt-4 space-x-4">
        <Button
          onClick={startStopTimer}
          className="px-6 py-3 rounded transition duration-200"
        >
          {isActive ? "Pause" : "Start"}
        </Button>
        <Button
          onClick={resetTimer}
          className="px-6 py-3 rounded transition duration-200"
        >
          Reset
        </Button>
      </div>
    </div>

  );
};

export default Timer;
