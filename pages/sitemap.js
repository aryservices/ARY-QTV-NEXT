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


const sitemap = (props) => {


    //     const [video, setVideo] = useState(props.data);
    //     const [related, setRelated] = useState(props.data1.list[0].id);
    //    console.log("Playlist ID:" + related);
    // const router = useRouter();
    // const { channel } = router.query;


    return (
        <>

            Hello World

        </>

    );
}

export default sitemap;