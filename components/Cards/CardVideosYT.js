import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import { getConfig } from '../../config';

// components


export default function CardVideosYT({ color, title, user, category, latest, playlist }) {

        const config = getConfig();
  


  const settings = {
    dots: false,
    centerMode: false,
    navigation: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    fade: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
    ],
  };


  // alert(category);
  // alert(process.env.channel);
  const [playlists, setPlaylist] = useState(null);
  const [isloading, setisloading] = useState(false);

  

  let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${category}&key=${config.youtubeApiKey}&maxResults=9`;

  useEffect(() => {
    // const count = 0;

    if (playlists == null) {
      // alert(props.id);

      fetch(url).then((resp) => {

        resp.json().then((result) => {
          setPlaylist(result);
          setisloading(true);
          // console.log(result)


        })


      })
    }

  })



  return (
    <>
      {/* Code block starts */}
      <div className="mt-5 container px-1 flex md:flex-row items-start md:items-center justify-between">
        <div>
        <h4 className="text-2xl heading mobilefont font-black leading-tight text-gray-800 text-yellow uppercase">{title}</h4>
        </div>
        <div className="md:mt-0">

          <a href={"playlist/" + playlist}>
            <button className="transition focus:outline-none duration-150  font-semibold	 ease-in-out hover:bg-yellow bg-indigo-700 rounded  px-3 py-2 text-sm text-light-bg bg-yellow">See More</button>
          </a>


        </div>
        {/* Code block ends */}
      </div>

      <div>
        <Slider {...settings}>

          {playlists && playlists.items.map((item, i) =>
            item.snippet.title !== 'Private video' ? (
              <Link
                key={i}  // Added key here
                href={{
                  pathname: "/video/v2/" + item.contentDetails.videoId,
                }}
              >
                <div className="Extra cursor-pointer">
                  <img
                    alt={item.snippet.title || 'Thumbnail'}
                    src={item.snippet.thumbnails.medium.url}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <h4 className="text-lg font-bold text-yellow truncate">
                    {item.snippet.title}
                  </h4>
                </div>
              </Link>
            ) : null
          )}

        </Slider>
      </div>


    </>
  );
}
