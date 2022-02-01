import { useCallback, useEffect, useState } from "react";

const computeCurrentDatetime = (now: Date) => {
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const week = ["日", "月", "火", "水", "木", "金", "土"][now.getDay()];

  return {
    year,
    month,
    date,
    hours,
    minutes,
    seconds,
    week,
  };
};

export const useCurrentDatetime = () => {
  const [currentDatetime, setCurrentDatetime] = useState(
    computeCurrentDatetime(new Date())
  );

  const tick = useCallback(() => {
    setCurrentDatetime(computeCurrentDatetime(new Date()));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    return () => clearInterval(interval);
  }, [tick]);

  return currentDatetime;
};
