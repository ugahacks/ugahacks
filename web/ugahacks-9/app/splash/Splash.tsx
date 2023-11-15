import React from 'react';
import bannerImage from '../../public/banner.png';
import img1 from '../../public/img1.png';
import img2 from '../../public/img2.png'
import img3 from '../../public/img3.png'
import img4 from '../../public/img4.png'

import '../../styles/Splash.css';
import Image from 'next/image';

function Splash() {
  const images = [img1, img2, img3, img4];

  return (
    <div className="splash-container">
      <div className="banner-container">
      </div>
      <div className="images-row">
        {['ABOUT', 'FAQ', 'OUR TEAM', 'SPONSORS'].map((text, index) => (
          <div key={index} className="image-container">
            <Image src={images[index]} alt={`Image ${index + 1}`} className='placeholder-image' />
            <div className="image-text">{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Splash;
