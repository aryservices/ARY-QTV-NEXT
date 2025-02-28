import React, { useState, useEffect, useContext } from 'react';
import Link from "next/link";
import MainSlider from "../components/Sliders/MainSlider";
import CardVideos from "../components/Cards/CardVideos";
import CardVideosDM from "../components/Cards/CardVideosDM";
import CardVideosYT from "../components/Cards/CardVideosYT";
import PlaylistSlider from "../components/Sliders/PlaylistSlider";
import Catfish from "../components/Ads/Catfish";
import Mrec from "../components/Ads/Mrec";
import MrecHome from "../components/Ads/MrecHome";
import Leaderboard from "../components/Ads/Leaderboard";
import Blogs from './blog';
import LeaderboardHome from '../components/Ads/LeaderboardHome';
import ScheduleHome from './ScheduleHome';
import { fetchConfig, getConfig } from '../config';
import Head from 'next/head';

export default function Index() {
  const [config, setConfig] = useState(null);
  const [playlists, setPlaylist] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch the configuration when the component mounts
    fetchConfig().then(() => {
      const configData = getConfig();
      setConfig(configData);
    });
  }, []);

  useEffect(() => {
    // Fetch playlists only once when the component mounts and config is available
    if (config && !playlists) {
      fetch(config.singleseries).then((resp) => {
        resp.json().then((result) => {
          setPlaylist(result);
          setIsLoading(true);
        });
      });
    }
  }, [config, playlists]); // Only run if config or playlists changes

  if (!config) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="my-32 mx-auto max-w-sm text-center relative z-50 top-0">
          <div className="block mb-4">
            <i className="fas fa-circle-notch animate-spin text-yellow mx-auto text-6xl"></i>
          </div>
          <h4 className="text-xl text-yellow font-black">
            LOADING...
          </h4>
        </div>
      </div>
    ); // Show a spinner loader if config isn't ready
  }

  return (
    <>

      <div className='mainSlider bannerMarginCustom'>
        <center>
          <MainSlider />
        </center>
      </div>
      
      <section className="homePageMobile">
        <div className="container-fluid mx-auto items-center flex flex-wrap  homepageAdDiv">
          <div className="w-full sm:w-12/12 md:w-12/12 lg:w-12/12 xl:w-12/12 px-4 mb-3">
            <center>
              <LeaderboardHome />
            </center>
          </div>
        </div>
      </section>

      {/* <section className="onAir bg-gradient-golden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-12">
              <div className="text-white p-xl-0">
                <h2 className="h1 text-white scheduleHeading">TODAY <span>ON AIR </span></h2>
              </div>
            </div>
            <div className="col-lg-9 col-12 d-lg-block">
              <ScheduleHome />
            </div>
          </div>
        </div>
      </section> */}

      <section className="pb-40 relative">
        <div className="container mx-auto">
          <div className="w-full md:w-12/12 lg:w-12/12 xl:w-12/12 px-4 "></div>
          <CardVideos title="LATEST VIDEOS" category="latest" />
          <PlaylistSlider title="ON AIR" id="0" category="QTV ON AIR" />
          <PlaylistSlider title="SHOWS" id="0" category="QTV FEATURED" slides="3" />
          {/* <Blogs category="drama-reviews" title="EDITORIAL" /> */}

          {playlists ? playlists.series.slice(0, 4).map((item, i) =>
            config.platform === 'youtube' ? (
              <CardVideosYT key={i} title={item.title} category={item.seriesYT} playlist={item._id} />
            ) : (
              <CardVideosDM key={i} title={item.title} category={item.seriesDM} playlist={item._id} />
            )
          ) : null}

          {/* <PlaylistSlider title="POPULAR" id="2" category="QTV Popular" /> */}
          <PlaylistSlider title="ARCHIVE DRAMAS" id="1" category="QTV ARCHIVE" />
        </div>
      </section>
    </>
  );
}