import React from 'react';
import bannerImage from '../../public/banner.png';
import placeholderImage from '../../public/placeholder.png';
import '../../styles/Splash.css';
import Image from 'next/image';

function Splash() {
  return (
    <div className="splash-container">
      <div className="banner-container">
        <Image src={bannerImage} alt='Splash Image' className='splash-image'/>
      </div>

      <div className="images-row">
        {['ABOUT', 'FAQ', 'OUR TEAM', 'SPONSORS'].map((text, index) => (
          <div key={index} className="image-container">
            <Image src={placeholderImage} alt={`Image ${index + 1}`} className='placeholder-image' />
            <div className="image-text">{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Splash;
