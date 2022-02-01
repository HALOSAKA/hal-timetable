import { Time } from "./components/Time";
import { Timetable } from "./components/Timetable";
import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>時間割</h1>
        <Time />
      </header>
      <main className={styles.main}>
        <Timetable />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/hirokikondo86"
          target="_blank"
          rel="noreferrer"
        >
          <small>©︎2022 Hiroki Kondo</small>
        </a>
      </footer>
    </>
  );
};

export default App;
