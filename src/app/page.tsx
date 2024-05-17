import styles from "./page.module.scss";
import { MainSection } from "./components/MainSection/MainSection";
import About from "./components/About/About";
import Activities from "./components/Activities/Activities";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <MainSection />
      <main className={styles.main}>
        <About />
        <Activities />
      </main>
      <Footer />
    </div>
  );
}
