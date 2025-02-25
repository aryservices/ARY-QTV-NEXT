import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Leaderboard from '../components/Ads/Leaderboard';


// components

const Aboutus = (props) => {

  const [playlists, setPlaylist] = useState(props.data);
  const [isloading, setisloading] = useState(false);



  return (
    <>

    


      <section className="text-gray-600 body-font bg-black">
        <div className="container px-5 py-20 mx-auto">
          <center>
            <Leaderboard />
          </center>
          <div className="flex flex-wrap mt-10">
          <div className="wpb_wrapper text-white">
            <h1>About Us</h1>
             <br/>
            <p className="font-normal"><strong><a href="https://aryqtv.tv/">ARY QTV</a></strong>,  is a leading Islamic channel dedicated to spreading the message of Islam through authentic teachings, discussions, and spiritual enlightenment. With a commitment to removing misconceptions and promoting harmony, we provide insightful programs, live transmissions, and educational content for millions of viewers worldwide.</p>
            <br/>
            <h2>Our Vision & Content</h2>
            <br/>
            <p className="font-normal">Launched in September 2003, <strong>ARY QTV</strong> has become a premier Global Islamic Satellite TV Channel, delivering Islamic knowledge and guidance to over 144 countries. Our mission is to eliminate misconceptions, encourage religious tolerance, and highlight the true essence of Islam.
            </p>            
            <br/>
            <p>From renowned scholars and spiritual leaders to detailed Quranic interpretations, Hadith explanations, and Hamd/Naat recitations, <strong>ARY QTV</strong> offers a comprehensive Islamic viewing experience. Our platform provides live broadcasts of major religious events, engaging discussions, and educational programs that inspire and guide viewers.</p>            
            <br/>
            <p>Explore our official website <a href="https://aryqtv.tv">aryqtv.tv</a> for 24/7 live streaming, recorded shows, and exclusive Islamic content anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>







    </>
  );
}



export default Aboutus;