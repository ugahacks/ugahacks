import "../styles/bootstrap.css";
import "../styles/globals.css";
//import '../styles/Nav.css'
import "../styles/Splash.css";
import "../styles/HallOfFame.css";
import "../styles/About.css";
import "../styles/FAQ.css";
import "../styles/Schedule.css";
import "../styles/Sponsors.css";
import "../styles/Tracks.css";
import "../styles/Footer.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
