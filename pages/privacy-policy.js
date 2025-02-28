import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Leaderboard from '../components/Ads/Leaderboard';

// components

const PrivacyPolicy = (props) => {

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
              <h1>Privacy Policy</h1>
              <br/>
              <h2>About ARY QTV</h2>
              <br/>
              <p className="font-normal">
                <strong><a href="https://aryqtv.tv">ARYQTV.TV</a></strong> is a global Islamic channel dedicated to spreading the message of Islam through authentic teachings, discussions, and spiritual enlightenment. Our platform provides a wealth of religious content, including Quranic interpretations, Hadith explanations, and live religious broadcasts.
              </p>
              <br/>
              <p className="font-normal">
                ARY QTV is committed to removing misconceptions about Islam and promoting harmony through its diverse programming. From in-depth discussions with renowned scholars to inspiring Hamd/Naat recitations and live coverage of significant Islamic events, we offer a comprehensive Islamic viewing experience.
              </p>
              <br/>

              <h2>Privacy Policy</h2>
              <br/>
              <p className="font-normal">
                This privacy policy covers the information about ARY QTV; personal information of users is collected if they register on our website for any programs. The information is securely stored and used only for registration and user authentication purposes.
              </p>
              <br/>

              <h2>Terms and Conditions</h2>
              <br/>
              <p className="font-normal">
                This document is an electronic record outlining the terms applicable to users of ARY QTV’s website. By accessing the site or using any of its services, you agree to these terms and conditions.
              </p>
              <br/>
              <p className="font-normal">
                The content available on ARY QTV's website is the copyrighted material of ARY QTV. Users are not allowed to download, reproduce, modify, distribute, or republish any content without explicit permission.
              </p>
              <br/>
              <p className="font-normal">
                You agree that your interaction with the website, including viewing, sharing, and commenting, will be in accordance with these terms. Any misuse of the content, including unauthorized sharing or uploading to external platforms, is strictly prohibited.
              </p>
              <br/>
              <p className="font-normal">
                If you have any concerns regarding posted content or wish to report an issue, please contact us at: <strong>web@aryservices.com</strong>. Your email should include your name and details about the objectionable content.
              </p>
              <br/>

              <h2>Changes in Privacy Policy</h2>
              <br/>
              <p className="font-normal">
                ARY QTV reserves the right to update this privacy policy from time to time as needed.
              </p>
              <br/>
              <h2>Contact Us</h2>
              <br/>
              <p className="font-normal">
                For any questions regarding this privacy policy or any other inquiries, please contact us at: <strong>web@aryservices.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
