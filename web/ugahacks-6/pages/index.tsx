import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Splash from './components/Splash/Splash'
import HallOfFame from './components/HallOfFame/HallOfFame';
import About from './components/About/About';
import Schedule from './components/Schedule/Schedule';
import FAQ from './components/FAQ/FAQ';
import Sponsors from './components/Sponsors/Sponsors';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    
    <div className={styles.container}>
              <Splash />
              <HallOfFame />
              <About />
              <Schedule />
              <FAQ />
              <Sponsors />
              <Footer />

    </div>
  )
}

