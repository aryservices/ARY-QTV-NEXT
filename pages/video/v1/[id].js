// DAILYMOTION

/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MainSlider from "../../../components/Sliders/MainSlider";
import CardVideos from "../../../components/Cards/CardVideos";
import PlaylistSlider from "../../../components/Sliders/PlaylistSlider";
import Dailymotion from 'react-dailymotion';
import Head from "next/head";
import CardVideosGridDM from "../../../components/Cards/CardVideosGridDM";
import Mrec from "../../../components/Ads/Mrec";
import Leaderboard from "../../../components/Ads/Leaderboard";


const SingleVideoid = (props) => {


  const [video, setVideo] = useState(props.data);
  // const [related, setRelated] = useState(props.data1.list[0].id);
  const [related, setRelated] = useState(
    props.data1?.list?.length > 0 ? props.data1.list[0].id : null
  );
  
  const [adRefreshKey, setAdRefreshKey] = useState(0);

  // console.log("Playlist ID:" + related);
  // const router = useRouter();
  // const { channel } = router.query;

      useEffect(() => {
        const interval = setInterval(() => {
          setAdRefreshKey((prevKey) => prevKey + 1); // Change state to trigger re-render
        }, 10000); // Refresh every 10 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
      }, []);


  return (
    <>

      {video ?
        <>
          {/* <Head>
            <title>{video.title}</title>
            <meta name="description" content={video.description.substring(0, 155)} />
            <meta name="title" content={video.title} />
            <meta property="og:title" content={video.title} />
            <meta property="og:description" content={video.description.substring(0, 155)} />
            <meta property="og:image" content={video.thumbnail_720_url} />

          </Head> */}


          <Head>
  {/* Primary Meta Tags */}
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <title>
    {video.title}
  </title>
  <meta name="description" content={video.description.substring(0, 155)} />
  
  <meta name="robots" content="index, follow" />
  <meta name="language" content="English" />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="video.episode" />
  <meta property="og:title" content={video.title} />
  <meta property="og:description" content={video.description.substring(0, 155)} />
  <meta property="og:image" content={video.thumbnail_720_url} />
  <meta property="og:url" content={"https://www.arydigital.tv/video/v1/" + video.id} />


  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={video.title} />
  <meta name="twitter:description" content={video.description.substring(0, 155)} />
  <meta name="twitter:image" content={video.thumbnail_720_url} />

  {/* Canonical URL */}
  <link rel="canonical" href={"https://www.arydigital.tv/video/v1/" + video.id} />

  {/* Favicon */}
  <link rel="icon" type="image/png" href="https://arydigital.tv/img/ary-qtv-logo.png" />
</Head>

          <section className="header relative pt-16 items-center flex bg-black">

            <div className="container mx-auto items-center flex flex-wrap">
              <div className="w-full md:w-12/12 lg:w-12/12 xl:w-12/12 px-4 mt-3">

                <center>
                  {/* <Leaderboard key={adRefreshKey} /> */}
                  <Leaderboard/>
                </center>
              </div>
              <div className="w-full sm:w-12/12 md:w-9/12 lg:w-9/12 xl:w-12/12 px-4 mt-5">

                <div className="single-video ">
                {/* <iframe frameborder="0" width="300px" height="100%" 
                    src="https://geo.dailymotion.com/player/x1bgu.html?video=x8coxcu" 
                    allowfullscreen 
                    allow="autoplay; fullscreen; picture-in-picture">
                </iframe> */}
                  <iframe className="dailysingle" frameborder="0" allowfullscreen="true" allow="autoplay" autoplay="true"
                  title= {video.title} 
                  width="100%" 
                  src= { "https://geo.dailymotion.com/player/x1bog.html?video=" + video.id}>
                  </iframe>
                  {/* <Dailymotion
                    video={video.id}
                    uiTheme="dark"
                    sharing={true}
                    width="100%"
                    uiShowLogo={true}
                    className="dailysingle"
                    autoplay={true}
                    subtitles="false"
                    showEndScreen={true}
                    showQueue={true}
                  /> */}


                </div>
                <h3 className="text-xl font-bold text-white truncate">
                  {video.title}
                </h3>
              </div>

              <div className="w-full sm:w-12/12 md:w-3/12 lg:w-3/12 xl:w-12/12 px-4 mt-5">


                <center>
                  <Mrec />
                  {/* <Mrec /> */}
                </center>

              </div>

            </div>

          </section>

          <section className="pt-40 pb-40 relative bg-black">

            <div className="container mx-auto">
            <h4 className="text-2xl heading mobilefont font-bold leading-tight text-gray-800 text-white mt-40">RELATED VIDEOS</h4>

              {/* <h2 className="text-2xl heading text-white font-semibold leading-normal">
                OTHER EPISODES
              </h2> */}
              <CardVideosGridDM category={related} />
            </div>


          </section>
        </>


        : null}

    </>
  );
}



// This gets called on every request
export async function getServerSideProps(context) {
  console.log(context.query);
  const { id, channel } = context.query;
  console.log(channel);
  // alert(channel);
  // Fetch data from external API
  const res = await fetch('https://api.dailymotion.com/video/' + id + '?fields=id%2Cowner%2Cowner.playlists_total%2Cplayer_next_video.duration%2Cplayer_next_video.likes_total%2Cviews_total%2Curl%2Cembed_url%2Caspect_ratio%2Cchannel%2Clikes_total%2Cthumbnail_720_url%2Cthumbnail_180_url%2Cthumbnail_480_url%2Cthumbnail_360_url%2Ctitle%2Cdescription%2Cchannel.description%2Cowner.description%2Ctags%2Cchannel%2Cowner%2Cduration')
  const data = await res.json()

  const res1 = await fetch('https://api.dailymotion.com/video/' + id + '/playlists?owner=x1c3iqq')
  const data1 = await res1.json()

  // Pass data to the page via props
  return { props: { data, data1 } }
}

export default SingleVideoid;