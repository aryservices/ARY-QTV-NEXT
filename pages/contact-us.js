import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Leaderboard from '../components/Ads/Leaderboard';


// components

const Contactus = (props) => {

  const [playlists, setPlaylist] = useState(props.data);
  const [isloading, setisloading] = useState(false);



  return (
    <>

    


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <center>
            <Leaderboard />
          </center>
          <div className="flex flex-wrap mt-10">
          <div className="wpb_wrapper text-yellow">
             <h1>Contact Us</h1>
             <br/>
            <p className="font-normal"><strong>Head Office:</strong></p>
            <p className="font-normal">ARY Communications, 6th Floor, Madina City Mall, Abdullah Haroon Road, Saddar, Karachi, Sindh, Pakistan</p>
            <br/>
            <p className="font-normal"><strong>ARY FILMS & TV PRODUCTIONS:</strong></p>
            <p className="font-normal">D-120 S.I.T.E, Karachi, Sindh, Pakistan</p>
            <br/>
            <p className="font-normal"><strong>UAE: </strong></p>
            <p className="font-normal">ARY DIGITAL FZ LLC Office 207, Building-4 Dubai Studio City Dubai, UAE</p>
            <p className="font-normal">Ph: +971-4-5515900</p>
            <br/>
            <p className="font-normal"><strong>UK/EUROPE: </strong></p>
            <p className="font-normal">Distributed & Marketed By NewVision TV Ltd. AMC House, Cumberland Avenue London, NW10 7QL United Kingdom</p>
            <br/>
            <p className="font-normal"><strong>U.S.A :</strong></p>
            <p className="font-normal">ARY Digital Network USA PO Box 220, Hicksville, NY 11801</p>
            <p className="font-normal">Email: sales@arydigital.tv</p>

            <br/>
            <p className="font-normal"><strong>Careers:</strong></p>
            <p className="font-normal">For career opportunities, send your resume at career@arydigital.tv</p>

            </div>
          </div>
        </div>
      </section>







    </>
  );
}



export default Contactus;