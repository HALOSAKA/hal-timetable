import { VFC } from "react";
import { useCurrentDatetime } from "../hooks/useCurrentDatetime";
import styles from "./Time.module.css";

export const Time: VFC = () => {
  const { year, month, date, week, hours, minutes, seconds } =
    useCurrentDatetime();

  return (
    <div className={styles.time}>
      <time>{`${year}年 ${month}月 ${date}日 (${week}) ${hours}:${minutes}:${seconds}`}</time>
    </div>
  );
};
