import Head from 'next/head'
import styles from '../styles/Sponsorship.module.css'

export default function Sponsorship() {
    return (
        <div>
            <Head>
                <title>UGAHacks 7 Sponsorship Packet</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <iframe className={styles.sponsorship}
                    src="https://storage.googleapis.com/ugahacks-public/external/UH7SponsorshipPacket.pdf">
                </iframe>
            </body>
        </div>
    )
}
