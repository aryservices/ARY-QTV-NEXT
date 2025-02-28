import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { getConfig } from '../../config';

export default function CardVideos({ color, title, user, category, latest, playlist }) {

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

  const [playlists, setPlaylist] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state
  const [error, setError] = useState(null); // Initialize error state
  let url = '';
  
  if (config.platform === 'youtube') {
    url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${config.latestYoutubeID}&key=${config.youtubeApiKey}&maxResults=9`;
  } else {
    url = `https://api.dailymotion.com/user/${config.channel}/videos?fields=owner%2Cthumbnail_180_url%2Cid%2Cthumbnail_240_url%2Cthumbnail_360_url%2Ctitle%2Cid%2Cviews_total%2Cduration%2Cowner.screenname%2Cdescription&limit=9`;
  }

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setPlaylist(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false); // Set loading to false regardless of success or failure
      }
    };

    if (!playlists) {
      fetchPlaylists();
    }
  }, [playlists, url]); // Added dependency array

  return (
    <>
      {/* Code block starts */}
      <div className="container px-1  flex md:flex-row items-start md:items-center justify-between pcm-3">
        <div>
          <h4 className="text-2xl heading mobilefont font-black leading-tight text-gray-800 text-yellow uppercase">{title}</h4>
        </div>
        <div className="md:mt-0">
          <Link href="/latestvideos">
            <button className="text-light-bg bg-yellow transition focus:outline-none duration-150 font-semibold ease-in-out hover:bg-yellow  bg-indigo-700 rounded bg-pink px-3 py-2 text-sm bg-yellow">See More</button>
          </Link>
        </div>
      </div>
      {/* Code block ends */}

      <div>
        {isLoading ? (
          <p className="text-white text-center">Loading...</p> // Display loading message
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p> // Display error message if any
        ) : (
          <Slider {...settings}>
            {config.platform === 'youtube'
              ? playlists.items.map((item) => (
                  item.snippet.title !== 'Private video' && (
                    <Link key={item.id.videoId} href={`/video/v2/${item.contentDetails.videoId}`}>
                      <div className="Extra cursor-pointer">
                        <img alt={item.snippet.title} src={item.snippet.thumbnails.medium.url} className="w-full align-middle rounded-t-lg" />
                        <h4 className="text-lg font-bold text-yellow truncate">{item.snippet.title}</h4>
                      </div>
                    </Link>
                  )
                ))
              : playlists.list.map((item) => (
                  <Link key={item.id} href={`/video/v1/${item.id}`}>
                    <div className="Extra cursor-pointer">
                      <img alt={item.title} src={item.thumbnail_240_url} className="w-full align-middle rounded-t-lg" />
                      <h4 className="text-lg font-bold text-yellow truncate">{item.title}</h4>
                    </div>
                  </Link>
                ))}
          </Slider>
        )}
      </div>
    </>
  );
}

CardVideos.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  user: PropTypes.string,
  category: PropTypes.string,
  latest: PropTypes.bool,
  playlist: PropTypes.array,
};
