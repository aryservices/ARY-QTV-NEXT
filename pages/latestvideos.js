import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Leaderboard from '../components/Ads/Leaderboard'; // Make sure this is the correct path
import { fetchConfig, getConfig } from '../config';

const CardVideos = ({ config, playlists, error }) => {
  const [isLoading, setIsLoading] = useState(false);

  // if (!config) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen">
  //       <div className="my-32 mx-auto max-w-sm text-center relative z-50 top-0">
  //         <div className="block mb-4">
  //           <i className="fas fa-circle-notch animate-spin text-white mx-auto text-6xl"></i>
  //         </div>
  //         <h4 className="text-lg font-medium text-white">Loading...</h4>
  //       </div>
  //     </div>
  //   );
  // }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container py-24 mx-auto mobileVideosPadding">
        <center>
          <Leaderboard />
        </center>
        <h2 className="text-white text-center mb-4">{config.title}</h2>
        <div>
          {isLoading ? (
            <div className="flex justify-center items-center">
              <div className="w-16 h-16 border-4 border-gray-300 border-t-transparent rounded-full animate-spin motion-reduce:hidden"></div>
            </div>
          ) : (
            <div className="flex flex-wrap">
              {config.platform === 'youtube' ? (
                playlists.items?.map((item) => (
                  item.snippet.title !== 'Private video' && (
                    <div className="w-full lg:w-3/12 sm:w-1/2 px-2 py-2 mobileVideos" key={item.contentDetails.videoId}>
                      <Link href={`/video/v2/${item.contentDetails.videoId}`}>
                        <div className="Extra">
                          <img alt={item.snippet.title} src={item.snippet.thumbnails.medium.url} className="w-full align-middle rounded-t-lg" />
                          <h4 className="text-xl font-bold text-yellow line-clamp-2">{item.snippet.title}</h4>
                        </div>
                      </Link>
                    </div>
                  )
                ))
              ) : (
                playlists.list?.map((item) => (
                  <div className="w-full lg:w-3/12 sm:w-1/2 px-2 py-2 mobileVideos" key={item.id}>
                    <Link href={`/video/v1/${item.id}`}>
                      <div className="Extra">
                        <img alt={item.title} src={item.thumbnail_240_url} className="w-full align-middle rounded-t-lg" />
                        <h4 className="text-xl font-bold text-yellow line-clamp-2">{item.title}</h4>
                      </div>
                    </Link>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

CardVideos.propTypes = {
  config: PropTypes.object.isRequired,
  playlists: PropTypes.object.isRequired,
  error: PropTypes.string,
};

export async function getServerSideProps() {
  try {
     await fetchConfig();
      const config = getConfig();

    let url = '';
    if (config.platform === 'youtube') {
      url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${config.latestYoutubeID}&key=${config.youtubeApiKey}&maxResults=20`;
    } else {
      url = `https://api.dailymotion.com/user/${config.channel}/videos?fields=owner%2Cthumbnail_180_url%2Cid%2Cthumbnail_240_url%2Cthumbnail_360_url%2Ctitle%2Cid%2Cviews_total%2Cduration%2Cowner.screenname%2Cdescription&limit=20`;
    }

    const response = await fetch(url);
    const playlists = await response.json();

    return {
      props: {
        config,
        playlists,
      },
    };
  } catch (error) {
    return {
      props: {
        config: null,
        playlists: null,
        error: error.message,
      },
    };
  }
}

export default CardVideos;
