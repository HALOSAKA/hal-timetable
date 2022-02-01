import { VFC } from "react";
import { periods, timetable } from "../config";
import { useCurrentDatetime } from "../hooks/useCurrentDatetime";
import styles from "./Timetable.module.css";

const weeks = ["月", "火", "水", "木", "金"] as const;
const baseUrl = "https://us04web.zoom.us/j/" as const;

export const Timetable: VFC = () => {
  const { week: currentWeek } = useCurrentDatetime();

  return (
    <table className={styles.timetable}>
      <thead>
        <tr>
          <th />
          {weeks.map((week) => (
            <th
              key={week}
              className={`${styles.week} ${
                week === currentWeek ? styles.active : "inactive"
              }`}
            >
              {week}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {timetable.map((row, i) => (
          <tr key={i}>
            <th className={styles.period}>
              {i + 1}限
              <br />
              <span className={`${styles.time} ${styles.hide}`}>
                ({periods[i].start})
              </span>
            </th>
            {row.map((item, i) =>
              item.name ? (
                <td key={i}>
                  <a
                    className={`${styles.link} ${
                      weeks[i] === currentWeek ? styles.active : "inactive"
                    }`}
                    href={baseUrl + item.id}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.name}
                  </a>
                </td>
              ) : (
                <td
                  key={i}
                  className={
                    weeks[i] === currentWeek ? styles.active : "inactive"
                  }
                />
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
