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
import Sakshi from '../../../src/Assets/Images/TeamImage/Sakshi.png'
import Vrushti from '../../../src/Assets/Images/TeamImage/Vrushti.png'
import sejal from '../../../src/Assets/Images/TeamImage/Sejal.png'
import Aditya from '../../../src/Assets/Images/TeamImage/Aditya.png'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Asishpal from '../../../src/Assets/Images/TeamImage/Ashish pal.png'
import Saish from '../../../src/Assets/Images/TeamImage/Saish.png'
import Syed from '../../../src/Assets/Images/TeamImage/Syed.png'
import Jay from '../../../src/Assets/Images/TeamImage/Jay.png'
import Vinay from '../../../src/Assets/Images/TeamImage/Vinay.png'




function Ourteamimages() {
  // Define an array of team members with their details
  const teamMembers = [
    { name: 'Kushal Shah', image: Kushal, role: 'Co-Founder', linkedin: 'https://www.linkedin.com/in/kushal-shah-132801104/' },
    { name: 'Poonam Shah', image: Poonam, role: 'Co-Founder', linkedin: 'https://www.linkedin.com/in/poonam-shah-945728a1/' },
    { name: 'Hiral Dalal', image: Hiral, role: 'Co-Founder', linkedin: 'https://www.linkedin.com/in/hiral-dalal-28904713/' },
    { name: 'Karan Nanesha', image: Karan, role: 'Web Developer', linkedin: 'https://www.linkedin.com/in/karan-nanesha-291b68207/' },
    { name: 'Vrushti Ashar', image: Vrushti, role: 'Project Manager', linkedin: 'https://www.linkedin.com/in/vrushti-ashar-86a852143/' },
    { name: 'Ajay Sharma ', image: Ajay, role: 'Full Stack Developer', linkedin: 'https://www.linkedin.com/in/ajay-sharma-453348142/' },
    { name: 'Jay Shah ', image: Jay, role: 'Business Partner', linkedin: '' },
    { name: 'Sakshi Virulkar', image: Sakshi, role: 'UI/UX Designer', linkedin: 'https://www.linkedin.com/in/sakshi-virulkar/' },
    { name: 'Aditya Ingle', image: Aditya, role: 'App Developer', linkedin: 'https://www.linkedin.com/in/aditya-ingle-95b582211/' },
    { name: 'Ashish Sawant', image: Sawant, role: 'Full Stack Developer', linkedin: 'https://www.linkedin.com/in/ashish-sawant/' },
    { name: 'Sejal Shah', image: sejal, role: 'Graphic Designer', linkedin: '' },
    { name: 'Shivanshu Singh', image: Shiva, role: 'Frontend Developer', linkedin: 'https://www.linkedin.com/in/shivanshu-01singh/' },
    { name: 'Ashish Pal', image: Asishpal, role: 'Full Stack Developer', linkedin: 'https://www.linkedin.com/in/web-developer-ashish-pal/' },
    { name: 'Vinay Mange', image: Vinay, role: 'Frontend Developer', linkedin: 'https://www.linkedin.com/in/vinay-mange-b5b700209/' },
    { name: 'Saish Jagtap', image: Saish, role: 'Frontend Developer', linkedin: 'https://www.linkedin.com/in/saishj/' },
    { name: 'Prafulla Mishra', image: Prafulla, role: 'Software Test Engineer', linkedin: 'https://www.linkedin.com/in/prafulla-mishra-b88921267/' },
    { name: 'Syed Maaz', image: Syed, role: 'Frontend Developer', linkedin: 'https://www.linkedin.com/in/syed-maaz-636477193/' },


    // { name: '', image: "", role: '', linkedin: '' },

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
