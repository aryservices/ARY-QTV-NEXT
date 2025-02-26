import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { getConfig } from '../../config';

export default function PlaylistSlider({ title, id, category }) {
  const config = getConfig();

  const [playlists, setPlaylist] = useState(null);
  const [playlistTitle, setplaylistTitle] = useState(title);
  const [isloading, setisloading] = useState(false);

  useEffect(() => {
    if (!playlists) {
      fetch(config.bycatID + category +'/PK')
        .then((resp) => resp.json())
        .then((result) => {
          setPlaylist(result);
          setisloading(true);
          // console.log(result);
        });
    }
  }, [playlists]);

  const totalSlides = playlists ? playlists.series.length : 0;

  const settings = {
    dots: true,
    centerMode: false, // Ensure centerMode is disabled
    variableWidth: false, // Make sure slides have uniform width
    navigation: false,
    infinite: totalSlides > 5, // Disable infinite if less than 5 slides
    autoplay: false,
    speed: 500,
    slidesToShow: playlistTitle === "SHOWS" ? 3 : Math.min(totalSlides, 5), // Adjust slidesToShow
    slidesToScroll: 1,
    pauseOnHover: true,
    fade: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(totalSlides, 5),
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
          infinite: totalSlides > 5,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: Math.min(totalSlides, 5),
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
          infinite: totalSlides > 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: playlistTitle === "SHOWS" ? 1 : Math.min(totalSlides, 3),
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
          infinite: totalSlides > 3,
        },
      },
    ],
  };

  return (
    <div>
      {/* <h2 className="text-2xl mb-5 heading text-white font-semibold leading-normal">
        {playlistTitle}
      </h2> */}

      <h4 className="text-2xl heading mt-40 mobilefont font-bold leading-tight text-gray-800 text-yellow uppercase">{playlistTitle}</h4>

      <Slider {...settings}>
            {playlists && playlists.series
        .filter(item => item.status !== "draft")  // Filter out the "draft" items
        .map((item, i) => (
          <Link
            href={{
              pathname: "/playlist/" + item.seriesDM,
              query: {
                story: item.description,
                name: item.title,
                timings: item.time,
                days: item.day
              }
            }}
            as={`playlist/${item._id}`}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
          >
            <div className="Extra cursor-pointer">
              <img src={playlistTitle === "SHOWS" ?  config.appImagePath + item.imageCoverBig : config.appImagePath + item.imagePoster} alt={item.title} />
      
            </div>
          </Link>

        ))}
      </Slider>
    </div>
  );
}
