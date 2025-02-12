import React from 'react'
import './home.css'
import video from '../../Asset/video.mp4';
import { GrLocationPin } from "react-icons/gr";
import { FaFilter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa"
import { MdOutlineMarkEmailUnread } from "react-icons/md"

const  Home=() => {
  return (
    <>
    <section className='home'>
      <div className="overlay">
      <video  className="ocean" src={video}  muted autoPlay loop type="video5/mp4"></video></div>
      <div className="homeContent container">
      <div className="textDiv">


        <span className="smallText"></span>

           <h1 className="homeTitle">Unlock Your Travel Dreams <p>With us !    <button className='btn'>Get started</button></p></h1>
           </div>


       <div className="cardDiv grid">
              <label    className="op-1" htmlFor="city">Search your destination : </label>
              <span>
              <input  className="op-1" type="text" placeholder='Entre a name here...'   />
              <GrLocationPin className="icon"/>
              </span>
              <label  className="op-1" htmlFor='date'>Select date : </label>
              <span>
                <input  className="op-1" type="date" placeholder='Entre Date of boooking'/>
              </span>
              
              <label   className="op-1" htmlFor="price">Max:  $5000 </label>
              <span>
                <input className="op-1" type="range" max="5000" min="1000" placeholder="Entre Date of boooking"/>
              </span>

              <div className="searchoption flex">
                <FaFilter  className='icon'/>
                <span>More Filters</span>
              </div>
              

              <div className="homefotterIcons">
          <div className="rightIcons">
          <FaFacebookF  className='icon'/>
          <GrInstagram className='icon'/> 
            <FaPhoneAlt  className='icon'/>
            <MdOutlineMarkEmailUnread 
            className='icon'/>
          </div>
        </div>
        </div>
    </div>
    </section>
    </>
  )
}
export default Home