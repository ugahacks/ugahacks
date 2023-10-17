import React from 'react'
import bannerImage from '../../public/banner.png'
import '../../styles/Splash.css'
import Image from 'next/image'

function Splash() {
  return (
    <div className="splash-container">
        <Image src={bannerImage} alt='Splash Image' className='splash-image'/>

    </div>
  )
}

export default Splash