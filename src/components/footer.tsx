import { useEffect, useState } from "react";
import { getCurrentVancouverTimeString } from "../util/date";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className = "" }: FooterProps) => {
  const [currentTime, setCurrentTime] = useState<string>(
    getCurrentVancouverTimeString()
  );

  useEffect(() => {
    const updateTimeIntervalMs = 1000;
    const updateTime: number = setInterval(() => {
      setCurrentTime(getCurrentVancouverTimeString());
    }, updateTimeIntervalMs); // Every second

    return () => clearInterval(updateTime);
  }, []);

  return (
    <footer
      className={`opacity-0 animate-blur-in [--blur-delay:150ms] max-w-screen-sm m-auto font-mono text-gray-400 flex justify-between pb-4 px-6 lg:px-0 ${className}`}
    >
      <p className="text-[0.63rem]">Always building, always learning</p>
      <p className="text-[0.63rem]">{currentTime} PST</p>
    </footer>
  );
};
