import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
  const [ session, loading ] = useSession()

  console.log(session);
  return (
    <div className={styles.container}>
      <Head>
        <title>UGAHacks 7</title>
        <meta name="description" content="UGAHacks 7 Event Site [[ event info here ]]" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!session && <>
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.name} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>}

      <main className={styles.main}>
        <h1 className={styles.title}>
            Welcome to 7.ugahacks.com!
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>This page is currently under construction!</code>
        </p>

        <div className={styles.grid}>
          <a href="https://ugahacks.com" className={styles.card}>
              <h2>UGAHacks.com &rarr;</h2>
              <p>UGAHacks&apos; organization site</p>
          </a>

          <a href="https://ugeorgia.ca1.qualtrics.com/jfe/form/SV_82Gn6acN70D0wg6" className={styles.card}>
            <h2>UGAHacks 7&rarr;</h2>
            <p>Pre-Register for our seventh event, coming this October 22-24th, 2021!</p>
          </a>
          
          <a href="https://6.ugahacks.com" className={styles.card}>
            <h2>6.ugahacks.com &rarr;</h2>
            <p>Previous event site</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}