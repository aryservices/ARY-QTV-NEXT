/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MainSlider from "../components/Sliders/MainSlider";
import CardVideos from "../components/Cards/CardVideos";
import PlaylistSlider from "../components/Sliders/PlaylistSlider";
import Dailymotion from 'react-dailymotion';
import CardVideosGrid from "../components/Cards/CardVideosGrid";
import Mrec from "../components/Ads/Mrec";
import Leaderboard from "../components/Ads/Leaderboard";
import renderHTML from 'react-render-html';
import HTMLRenderer from 'react-html-renderer';
import { fetchConfig, getConfig } from '../config';
// import { ConfigContext } from "./_app";
import Head from 'next/head';

export default function Schedule() {
  const [data, setData] = useState(null);
  const [isloading, setisloading] = useState(false);
  const [config, setConfig] = useState(null);
  // const config = getConfig();

    useEffect(() => {
      // Fetch the configuration when the component mounts
      fetchConfig().then(() => {
        const configData = getConfig();
        setConfig(configData);
      });
    }, []);

  
  
  useEffect(() => {
    // const count = 0;

    if (config && !data) {
      // alert(props.id);

      fetch(config.scheduleApi).then((resp) => {

        resp.json().then((result) => {
          setData(result);
          setisloading(true);
          console.log(result)


        })


      })
    }

  })

  if (!config) {
    return (

     
      <div className="flex justify-center items-center min-h-screen">
         <div className="my-32 mx-auto max-w-sm text-center relative z-50 top-0">
        <div className="block mb-4">
          <i className="fas fa-circle-notch animate-spin text-white mx-auto text-6xl"></i>
        </div>
        <h4 className="text-lg font-medium text-white">
        Loading...
        </h4>
      </div>
      </div>
    ); // Show a spinner loader if config isn't ready
  }


  return (
    <>

      <Head>
  {/* Primary Meta Tags */}
  <title>ARY Digital Drama Schedule - Watch Pakistani Dramas & Entertainment Shows Online</title>
  <meta name="description" content="Check the latest schedule for ARY Digital's Pakistani dramas, entertainment shows, and exclusive digital content. Stay up to date with airing times and upcoming episodes." />
  <meta name="keywords" content="ARY Digital Drama Schedule, Pakistani Dramas, ARY Shows, Drama Timetable, ARY Entertainment, Drama Episode Airing Time, Upcoming Episodes" />
  <meta name="author" content="ARY Digital" />
  <meta name="robots" content="index, follow" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="ARY Digital Drama Schedule - Watch Pakistani Dramas & Entertainment Shows Online" />
  <meta name="twitter:description" content="Check the latest schedule for ARY Digital's Pakistani dramas, entertainment shows, and exclusive digital content. Stay up to date with airing times and upcoming episodes." />
  <meta name="twitter:image" content="/img/ary-qtv-logo.png" />
  <meta name="twitter:site" content="@ARYDigitalAsia" />
  <meta name="twitter:creator" content="@ARYDigitalAsia" />

  {/* Favicon */}
  <link rel="icon" type="image/png" href="/img/ary-qtv-logo.png" />
</Head>

      <section className="container mt-20 pt-1 pb-60">

      <center className="pb-10">
            <Leaderboard />
          </center>

        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#Monday" type="button" role="tab" aria-controls="home" aria-selected="true">Monday</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#Tuesday" type="button" role="tab" aria-controls="profile" aria-selected="false">Tuesday</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Wednesday" type="button" role="tab" aria-controls="contact" aria-selected="false">Wednesday</button>
          </li>
         
          <li className="nav-item" role="presentation">
            <button className="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#Thursday" type="button" role="tab" aria-controls="home" aria-selected="true">Thursday</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#Friday" type="button" role="tab" aria-controls="home" aria-selected="true">Friday</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#Saturday" type="button" role="tab" aria-controls="home" aria-selected="true">Saturday</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#Sunday" type="button" role="tab" aria-controls="home" aria-selected="true">Sunday</button>
          </li>
          {/* <!-- Add remaining days here --> */}
        </ul>
        <div className="tab-content" id="myTabContent">
         
          {/* <!-- Add remaining tab panes for other days --> */}

          <div className="tab-pane fade show active" id="Monday" role="tabpanel" aria-labelledby="contact-tab">
          <div className="flex flex-wrap">
            {data ? data.Schedule.filter(drama => drama.dramaDays.monday).map((drama, index) => (
              <div className="w-full lg:w-3/12 sm:w-1/2 px-2 py-2">
                <center>
                <Link href={{
                    pathname: "/playlist/" + drama.dramaPlaylist
                  }}
                  >
                  <div className="Extra cursor-pointer">

                    <img src={drama.dramaPoster} alt={drama.dramaName} />
                    <div className="scheduleContent">
                    {/* <h2>{drama.dramaName}</h2>
                    <p>{drama.dramaDesc}</p> */}
                    <p className="timings">{drama.dramaTime}</p>
                    </div>
                  </div>
                  </Link>
                </center>
              </div>
            )) : null}
          </div>
          </div>

          <div className="tab-pane fade" id="Tuesday" role="tabpanel" aria-labelledby="contact-tab">
          <div className="flex flex-wrap">
            {data ? data.Schedule.filter(drama => drama.dramaDays.tuesday).map((drama, index) => (
              <div className="w-full lg:w-3/12 sm:w-1/2 px-2 py-2">
              <center>
              <Link href={{
                  pathname: "/playlist/" + drama.dramaPlaylist
                }}
                >
                <div className="Extra cursor-pointer">

                  <img src={drama.dramaPoster} alt={drama.dramaName} />
                  <div className="scheduleContent">
                  {/* <h2>{drama.dramaName}</h2>
                  <p>{drama.dramaDesc}</p> */}
                  <p className="timings">{drama.dramaTime}</p>
                  </div>
                </div>
                </Link>
              </center>
            </div>
            )) : null}
          </div>
          </div>

          <div className="tab-pane fade" id="Wednesday" role="tabpanel" aria-labelledby="contact-tab">
          <div className="flex flex-wrap">
            {data ? data.Schedule.filter(drama => drama.dramaDays.wednesday).map((drama, index) => (
              <div className="w-full lg:w-3/12 sm:w-1/2 px-2 py-2">
              <center>
              <Link href={{
                  pathname: "/playlist/" + drama.dramaPlaylist
                }}
                >
                <div className="Extra cursor-pointer">

                  <img src={drama.dramaPoster} alt={drama.dramaName} />
                  <div className="scheduleContent">
                  {/* <h2>{drama.dramaName}</h2>
                  <p>{drama.dramaDesc}</p> */}
                  <p className="timings">{drama.dramaTime}</p>
                  </div>
                </div>
                </Link>
              </center>
            </div>
            )) : null}
          </div>
          </div>

          <div className="tab-pane fade" id="Thursday" role="tabpanel" aria-labelledby="contact-tab">
          <div className="flex flex-wrap">
            {data ? data.Schedule.filter(drama => drama.dramaDays.thursday).map((drama, index) => (
              <div className="w-full lg:w-3/12 sm:w-1/2 px-2 py-2">
              <center>
              <Link href={{
                  pathname: "/playlist/" + drama.dramaPlaylist
                }}
                >
                <div className="Extra cursor-pointer">

                  <img src={drama.dramaPoster} alt={drama.dramaName} />
                  <div className="scheduleContent">
                  {/* <h2>{drama.dramaName}</h2>
                  <p>{drama.dramaDesc}</p> */}
                  <p className="timings">{drama.dramaTime}</p>
                  </div>
                </div>
                </Link>
              </center>
            </div>
            )) : null}
          </div>
          </div>

          <div className="tab-pane fade" id="Friday" role="tabpanel" aria-labelledby="contact-tab">
          <div className="flex flex-wrap">
            {data ? data.Schedule.filter(drama => drama.dramaDays.friday).map((drama, index) => (
              <div className="w-full lg:w-3/12 sm:w-1/2 px-2 py-2">
              <center>
              <Link href={{
                  pathname: "/playlist/" + drama.dramaPlaylist
                }}
                >
                <div className="Extra cursor-pointer">

                  <img src={drama.dramaPoster} alt={drama.dramaName} />
                  <div className="scheduleContent">
                  {/* <h2>{drama.dramaName}</h2>
                  <p>{drama.dramaDesc}</p> */}
                  <p className="timings">{drama.dramaTime}</p>
                  </div>
                </div>
                </Link>
              </center>
            </div>
            )) : null}
          </div>
          </div>

          <div className="tab-pane fade" id="Sunday" role="tabpanel" aria-labelledby="contact-tab">
          <div className="flex flex-wrap">
            {data ? data.Schedule.filter(drama => drama.dramaDays.sunday).map((drama, index) => (
              <div className="w-full lg:w-3/12 sm:w-1/2 px-2 py-2">
              <center>
              <Link href={{
                  pathname: "/playlist/" + drama.dramaPlaylist
                }}
                >
                <div className="Extra cursor-pointer">

                  <img src={drama.dramaPoster} alt={drama.dramaName} />
                  <div className="scheduleContent">
                  {/* <h2>{drama.dramaName}</h2>
                  <p>{drama.dramaDesc}</p> */}
                  <p className="timings">{drama.dramaTime}</p>
                  </div>
                </div>
                </Link>
              </center>
            </div>
            )) : null}
          </div>
          </div>

          <div className="tab-pane fade" id="Saturday" role="tabpanel" aria-labelledby="contact-tab">
          <div className="flex flex-wrap">
          {data ? data.Schedule.filter(drama => drama.dramaDays.saturday).map((drama, index) => (
              <div className="w-full lg:w-3/12 sm:w-1/2 px-2 py-2">
              <center>
              <Link href={{
                  pathname: "/playlist/" + drama.dramaPlaylist
                }}
                >
                <div className="Extra cursor-pointer">

                  <img src={drama.dramaPoster} alt={drama.dramaName} />
                  <div className="scheduleContent">
                  {/* <h2>{drama.dramaName}</h2>
                  <p>{drama.dramaDesc}</p> */}
                  <p className="timings">{drama.dramaTime}</p>
                  </div>
                </div>
                </Link>
              </center>
            </div>
            )) : null}
          </div>

        </div>
        </div>

        
      </section>


    </>
  );
}
