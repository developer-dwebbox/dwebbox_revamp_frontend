import React from 'react'
import './Ourteam.css';
import joinourteamimg from '../../../src/Assets/Images/OurTeam/Group.png'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Ourteamheading() {
  return (
    <div className='Ourteamheading'>
      <div className='OurteamheadSection'>
    <div className='ourteamcontent'>
    <div className='ourteamparagraph' >
    <div className='ourteamdot'></div>
    <p>Our Team</p>
    </div>
      <h1 className='TalentedteamHeading' >Talented team.</h1>
      <p className='ourteamdescriptionsection' >We’re a diverse team that works as fancies attention to details, enjoys beers on Friday nights and aspires to design the dent in the universe.</p>
    </div>
    <div className='ourteamanim'>
    <div className='team-circle-container'>
      <div className='team-circle'>
       <img src={joinourteamimg} alt="" />
       <div className='arrow-circle'>
        <ArrowOutwardIcon/>
       </div>
      </div>
    </div>
    </div>
      </div>

      <div className="marqueeFour">
  <div className="marquee__contentFour scrollFour">
   <h1>Our TEAM</h1>
   <h1 className='stroke-heading' >Our TEAM</h1>
  </div>
  <div className="marquee__contentFour scrollFour">
   <h1>Our TEAM</h1>
   <h1  className='stroke-heading'>Our TEAM</h1>
  </div>
</div>


    </div>
  )
}

export default Ourteamheading
