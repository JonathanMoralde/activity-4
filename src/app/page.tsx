"use client";

import { useState } from "react";

export default function Home() {
  // text size state
  const [textSize, setTextSize] = useState<number>(1);
  const [hexColor, setHexColor] = useState<string>("#2dd4bf");

  // Handle Button Click
  const handleClick = () => {
    setTextSize((prevTextSize) => {
      if (prevTextSize < 64) {
        return prevTextSize * 2; // Double the current size
      } else {
        return 1; // Reset to 1rem
      }
    });
    setHexColor(randomizeColor());
  };

  // get a random hex color value
  const randomizeColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 16) //generate a random value using Math.random() multiplied by 16 then get floor number
        .toString(16) //convert to string and pass 16 to get hex equivalent
        .toUpperCase();
    }
    return color;
  };

  return (
    <main className="min-h-screen grid place-items-center">
      <button
        type="button"
        className={`py-2 px-4  rounded-full shadow hover:opacity-75 transition-opacity`}
        style={{ fontSize: `${textSize}rem`, backgroundColor: hexColor }}
        onClick={handleClick}
      >
        GROW
      </button>
    </main>
  );
}
