import React from 'react';
import './Ourteam.css';
import Kushal from '../../../src/Assets/Images/TeamImage/Kushal.png';
import Poonam from '../../../src/Assets/Images/TeamImage/Poonam.png';
import Hiral from '../../../src/Assets/Images/TeamImage/Hiral.png';
import Karan from '../../../src/Assets/Images/TeamImage/Karan.png';
import Shiva from '../../../src/Assets/Images/TeamImage/Shiva.png';
import Ajay from '../../../src/Assets/Images/TeamImage/Ajay.png';
import Prafulla from '../../../src/Assets/Images/TeamImage/Prafulla.png';
import Sawant from '../../../src/Assets/Images/TeamImage/Sawant.png';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Ourteamimages() {
  // Define an array of team members with their details
  const teamMembers = [
    { name: 'Kushal Shah', image: Kushal, role: 'Co-Founder', linkedin: 'https://www.linkedin.com/in/kushal-shah-132801104/' },
    { name: 'Poonam Shah', image: Poonam, role: 'Co-Founder', linkedin: 'https://www.linkedin.com/in/poonam-shah-945728a1/' },
    { name: 'Hiral Dalal', image: Hiral, role: 'Co-Founder', linkedin: 'https://www.linkedin.com/in/hiral-dalal-28904713/' },
    { name: 'Karan Nanesha', image: Karan, role: 'Web Developer', linkedin: 'https://www.linkedin.com/in/karan-nanesha-291b68207/' },
    { name: 'Ajay Sharma ', image: Ajay, role: 'Full Stack Developer', linkedin: 'https://www.linkedin.com/in/ajay-sharma-453348142/' },
    { name: 'Ashish Sawant', image: Sawant, role: 'Full Stack Developer', linkedin: 'https://www.linkedin.com/in/ashish-sawant/' },
    { name: 'Shivanshu Singh', image: Shiva, role: 'Frontend Developer', linkedin: 'https://www.linkedin.com/in/shivanshu-01singh/' },
    { name: 'Prafulla Mishra', image: Prafulla, role: 'Software Test Engineer', linkedin: 'https://www.linkedin.com/in/prafulla-mishra-b88921267/' },
    { name: '', image: "", role: '', linkedin: '' },
    
    // Add more team members with their details here

  ];

  return (
    <div className='Ourteamimages'>
      <div className='Ourteamimagesbanner'>
        {/* Map through the team members and render their details */}
        {teamMembers.map((member, index) => (
          <div className='team-images' key={index}>
            <div className='images-dwb'>
              <img src={member.image} alt="" />
            </div>
            <div className='dwb-image-overlay'>
              <div className='Dwb-linkedIn'>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <p>LinkedIn</p>
                  <ArrowOutwardIcon />
                </a>
              </div>
              <div className='overlay-anim'>
                <div className="marquee-overlay">
                  <ul className="marquee__contentoverlay scroll">
                    <p>{member.role}</p>
                    <p>{member.role}</p>
                    <p>{member.role}</p>
                    <p>{member.role}</p>
                  </ul>
                  <ul className="marquee__contentoverlay scroll" aria-hidden="true">
                    <p>{member.role}</p>
                    <p>{member.role}</p>
                    <p>{member.role}</p>
                    <p>{member.role}</p>
                  </ul>
                </div>
                <div className="marquee-overlayTwo">
                  <ul className="marquee__contentoverlayTwo scroll">
                    <p className='dwb-dev-name'>{member.name}</p>
                    <p className='dwb-dev-name'>{member.name}</p>
                    <p className='dwb-dev-name'>{member.name}</p>
                    <p className='dwb-dev-name'>{member.name}</p>
                  </ul>
                  <ul className="marquee__contentoverlayTwo scroll" aria-hidden="true">
                    <p className='dwb-dev-name'>{member.name}</p>
                    <p className='dwb-dev-name'>{member.name}</p>
                    <p className='dwb-dev-name'>{member.name}</p>
                    <p className='dwb-dev-name'>{member.name}</p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ourteamimages;
