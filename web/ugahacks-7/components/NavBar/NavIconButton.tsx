import React, { ReactElement } from "react";
import Image from 'next/image'
import styles from '../../styles/NavIconButton.module.css'



function NavIconButton( props: {name: string, myClick: any} ): ReactElement {
    return (
        <div className={styles.container}>
            <button type='button' onClick={props.myClick} className={styles.icon}>
                <Image src="/graphics/fileicon-01.svg" alt="file icon" width={60} height={60} />
                <p className={styles.caption}>{props.name}</p>
            </button>
        </div>
    )
}

export default NavIconButton;