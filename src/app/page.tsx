import styles from "./page.module.scss";
import { MainSection } from "./components/MainSection/MainSection";
import About from "./components/About/About";
import Activities from "./components/Activities/Activities";
import Footer from "./components/Footer/Footer";
import { Video } from "./components/Video/Video";
import Schedule from "./components/Schedule/Schedule";
import FAQ from "./components/FAQ/FAQ";

export default function Home() {
  return (
    <div className={styles.container}>
      <MainSection />
      <main className={styles.main}>
        <About />
        <Video />
        <Schedule />
        <Activities />
      </main>
      <FAQ />
      <Footer />
    </div>
  );
}
