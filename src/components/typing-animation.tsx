import { useState, useEffect } from "react";

interface TypingAnimationProps {
  text: string;
  speed?: number;
}

export default function TypingAnimation({ text, speed = 100 }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span>
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-cyan-400`}>|</span>
    </span>
  );
}
