import { FocusEventHandler, useCallback } from "react";
import { useStudentNumber } from "../hooks/useStudentNumber";
import styles from "./StudentNumber.module.css";

export const StudentNumber = () => {
  const { studentNumber, setStudentNumber, saveStudentNumber } =
    useStudentNumber();

  const handleBlur: FocusEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setStudentNumber(event.target.value);
    },
    [setStudentNumber]
  );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault();
      saveStudentNumber();
    },
    [saveStudentNumber]
  );

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="studentNumber" className={styles.label}>
          出席入力{" "}
          <span className={styles.note}>※ LocalStorageに保存されます</span>
        </label>
        <div className={styles.outer}>
          <input
            id="studentNumber"
            className={styles.input}
            type="text"
            onBlur={handleBlur}
            defaultValue={studentNumber}
          />
          <button className={styles.button}>保存</button>
        </div>
      </form>
    </div>
  );
};
