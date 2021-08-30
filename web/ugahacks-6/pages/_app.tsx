import '../styles/globals.css'
import '../styles/About.css'
import '../styles/FAQ.css'
import '../styles/Footer.css'
import '../styles/HallOfFame.css'
//import '../styles/Nav.css'
import '../styles/Schedule.css'
import '../styles/Splash.css'
import '../styles/Sponsors.css'
import '../styles/Tracks.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
