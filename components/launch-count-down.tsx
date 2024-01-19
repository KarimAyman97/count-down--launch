"use client";
import styles from "@/components/launch-count-down.module.css";
import CountDownCard from "./parts/countdown-card";
import { useEffect, useState } from "react";
import {
  RemainingTime,
  getLaunchDate,
  getRemainingTimeFromDate,
} from "@/helpers/helpers";
import CountDownTitle from "./parts/count-down-title";
import CountDownSocial from "./parts/count-down-social";

const LaunchCountDown = () => {
  const [launchDate, setLaunchDate] = useState<Date>();
  const [remaining, setRemaining] = useState<{
    current: RemainingTime;
    previous?: RemainingTime;
  }>();

  const updateRemaining = (date: Date | undefined) => {
    if (date) {
      setRemaining((s) => ({
        previous: s?.current,
        current: getRemainingTimeFromDate(date),
      }));
    } else {
      setRemaining(undefined);
    }
  };

  useEffect(() => {
    setLaunchDate(getLaunchDate());
  }, []);

  useEffect(() => {
    updateRemaining(launchDate);
    const intervalId = setInterval(() => {
      updateRemaining(launchDate);
    }, 900);
    return () => clearInterval(intervalId);
  }, [launchDate]);

  return (
    <div className={`${styles.bg}`}>
      <div className="flex flex-col justify-between  h-screen items-center tracking-widest text-base">
        <div className="mt-16">
          <CountDownTitle title="we're launching soon" />
        </div>
        <div className="flex flex-row justify-center items-center  gap-7">
          <CountDownCard
            current={remaining?.current?.days}
            prev={remaining?.previous?.days}
            label="days"
          />
          <CountDownCard
            current={remaining?.current?.hours}
            prev={remaining?.previous?.hours}
            label="hours"
          />
          <CountDownCard
            current={remaining?.current?.minutes}
            prev={remaining?.previous?.minutes}
            label="minutes"
          />
          <CountDownCard
            current={remaining?.current?.seconds}
            prev={remaining?.previous?.seconds}
            label="seconds"
          />
        </div>
        <div className="flex flex-row justify-center gap-5 mb-16">
          <CountDownSocial />
        </div>
      </div>
    </div>
  );
};

export default LaunchCountDown;
