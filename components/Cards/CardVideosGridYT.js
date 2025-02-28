import React, { useState, useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getConfig } from '../../config';

// components

export default function CardVideosGrid({ color, title, user, category, platform }) {

  const [playlists, setPlaylist] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
          const config = getConfig();
  
  // For Youtube
  const [nextPageToken, setNextPageToken] = useState('');
  const [prevPageToken, setPrevPageToken] = useState('');

  const seasonRef = useRef(null); // To scroll to the specific tab

  useEffect(() => {
    fetchVideos(category, '');
  }, [category]); // fetchVideos will run when category changes

  const fetchVideos = (category, pageToken) => {
    setIsLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${category}&key=${config.youtubeApiKey}&maxResults=12&pageToken=${pageToken}`
    )
      .then((resp) => resp.json())
      .then((result) => {
        setPlaylist(result.items); // Correctly setting playlist items
        setNextPageToken(result.nextPageToken || '');
        setPrevPageToken(result.prevPageToken || '');
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setIsLoading(false);
      });
  };

  const handlePageChange = (pageToken) => {
    fetchVideos(category, pageToken);
    if (seasonRef.current) {
      seasonRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            {playlists && playlists.map((item, i) =>
              item.snippet.title !== 'Private video' ? (
                <div key={i} className="w-full lg:w-3/12 sm:w-1/2 py-2">
                  <Link
                    href={{
                      pathname: "/video/v2/" + item.contentDetails.videoId,
                    }}
                    className="hover:scale-110"
                  >
                    <div className="Extra cursor-pointer">
                      <img
                        alt={item.snippet.title}
                        src={item.snippet.thumbnails.medium.url}
                        className="w-full align-middle rounded-t-lg"
                      />
                      <h4 className="text-xl font-bold text-yellow line-clamp-2">
                        {item.snippet.title}
                      </h4>
                    </div>
                  </Link>
                </div>
              ) : null
            )}
          </div>

          {isLoading && (
            <div className="text-center mt-3">
              <p className="text-yellow">Loading...</p>
            </div>
          )}

          <div className="text-center mt-5 mb-5">
            <button
              className={`${!prevPageToken
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-yellow hover:shadow-lg'
                }
              text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150`}
              onClick={() => handlePageChange(prevPageToken)}
              disabled={!prevPageToken}
            >
              Previous
            </button>
            <button
              className={`${!nextPageToken
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-yellow hover:shadow-lg'
                } text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150`}
              onClick={() => handlePageChange(nextPageToken)}
              disabled={!nextPageToken}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
