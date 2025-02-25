/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MainSlider from "../components/Sliders/MainSlider";
import CardVideos from "../components/Cards/CardVideos";
import PlaylistSlider from "../components/Sliders/PlaylistSlider";
import Dailymotion from 'react-dailymotion';
import Head from "next/head";
import CardVideosGrid from "../components/Cards/CardVideosGrid";
import PlyrLive from "./Plyr.tsx";
// import ReactHlsPlayer from 'react-hls-player';
// import ReactjsPlayer from 'reactjs-player';
import Mrec from "../components/Ads/Mrec";


const livevideo = (props) => {


  //     const [video, setVideo] = useState(props.data);
  //     const [related, setRelated] = useState(props.data1.list[0].id);
  //    console.log("Playlist ID:" + related);
  // const router = useRouter();
  // const { channel } = router.query;


  return (
    <>

      <Head>
        <title>ARY Digital Live</title>
        <meta name="description" content="Live Streaming" />
        <meta name="title" content="ARY Digital Live" />
        <meta property="og:title" content="ARY Digital Live" />
        <meta property="og:description" content="Live Streaming" />
        <meta property="og:image" content="https://arydigital.tv/wp-content/uploads/2019/06/digital-logo.gif" />
      </Head>

      <section className="header relative pt-16 items-center flex bg-black">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full sm:w-12/12 md:w-9/12 lg:w-9/12 xl:w-12/12 px-4 mt-5">

            <div className="single-videos">
              <PlyrLive link="https://6zklx4wryw9b-hls-live.5centscdn.com/arydigital/f7b44cfafd5c52223d5498196c8a2e7b.sdp/playlist.m3u8" />
            </div>

          </div>

          <div className="w-full sm:w-12/12 md:w-3/12 lg:w-3/12 xl:w-12/12 px-4 mt-5">


            <center>
              <Mrec />
            </center>

          </div>

        </div>

      </section>

      <section className="pt-40 pb-40 relative bg-black">

        <div className="container mx-auto">

          <CardVideos title="LATEST VIDEOS" user="arydigitalofficial" category="latest" />
        </div>


      </section>
    </>

  );
}

export default livevideo;