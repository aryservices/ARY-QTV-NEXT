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
            <p className="font-normal"><strong><a href="https://arydigital.tv">Arydigital.tv</a></strong>, is an online entertainment platform which brings you its very own official and original content of ARY Digital. We are the only site which offers official and original content from all your favorite shows of ARY Digital.</p>
            <br/>
            <h2>Our Exclusive Content</h2>
            <br/>
            <p className="font-normal">The dramas to reality shows aired of <em>ARY Digital’s</em> channel everything is available on the website. Explore all this and more on our easily accessible site you can also watch the live transmission of <strong>ARY Digital</strong> on our website. Catch full episodes of all the shows you like at your convenience and you can also share it with your friends.</p>
            <br/>
            <p className="font-normal">If you have any queries <a href="https://arydigital.tv//about-us/">about us</a> check out the contact page.</p>
           
            </div>
          </div>
        </div>
      </section>







    </>
  );
}



export default Aboutus;