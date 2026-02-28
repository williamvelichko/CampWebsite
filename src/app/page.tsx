import styles from "./page.module.scss";
import { MainSection } from "./components/MainSection/MainSection";
import About from "./components/About/About";
import Activities from "./components/Activities/Activities";
import { Video } from "./components/Video/Video";
import { isTemporaryModeEnabled } from "./config/site";

export default function Home() {
  return (
    <div className={styles.container}>
      <MainSection />
      <main className={styles.main}>
        <About />
        {!isTemporaryModeEnabled && <Video />}
        <Activities />
      </main>
    </div>
  );
}
