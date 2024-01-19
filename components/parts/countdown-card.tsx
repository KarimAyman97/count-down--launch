"use client";
import "@/components/parts/count-down-card.css";
import { memo, useEffect, useState } from "react";

const displayedValue = (value: number | undefined) =>
  value === undefined
    ? ""
    : Math.min(Math.max(value, 0), 99).toString().padStart(2, "0");

type CardItemProps = {
  prev?: number;
  current?: number;
  label?: string;
};

const CountDownCard = ({ prev, current, label }: CardItemProps) => {
  const [shouldFlip, setShouldFlip] = useState(false);

  useEffect(() => {
    setShouldFlip(current != prev);
    const timeoutId = setTimeout(() => {
      setShouldFlip(false);
    }, 700);
    return () => clearTimeout(timeoutId);
  }, [prev, current]);

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="card">
        <div className="card-top rounded font-red-hat font-bold ">
          {displayedValue(current)}
        </div>
        <div className="card-bottom rounded font-red-hat font-bold">
          {displayedValue(prev)}
        </div>
        <div
          className={`card-flip-top rounded font-red-hat font-bold ${
            shouldFlip ? "start-flip-top" : ""
          }`}
        >
          {displayedValue(prev)}
        </div>
        <div
          className={`card-flip-bottom rounded font-red-hat font-bold ${
            shouldFlip ? "start-flip-bottom" : ""
          }`}
        >
          {displayedValue(current)}
        </div>
        <div className="circle-before"></div>
        <div className="circle-after"></div>
      </div>
      <div className="mt-5">
        <p className="uppercase font-medium tracking-widest text-gray-blue text-base text-center">
          {label}
        </p>
      </div>
    </div>
  );
};

export default memo(CountDownCard);
