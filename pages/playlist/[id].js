import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import CardVideosGridDM from "../../components/Cards/CardVideosGridDM";
import CardVideosGridYT from "../../components/Cards/CardVideosGridYT";
import Leaderboard from "../../components/Ads/Leaderboard";
import { fetchConfig } from "../../config";
import Head from "next/head";

const PlaylistId = ({ data1, id, config }) => {
  const playlistDetails = data1;
  const DMplaylistID = data1.seriesDM;
  const YTplaylistID = data1.seriesYT;

  // Find and Replace function
  const findAndReplace = (str, find, replace) => {
    return str.replace(find, replace);
  };

  return (
    <>
      {playlistDetails && (
        <>
          <Head>
            {/* Primary Meta Tags */}
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>
              {playlistDetails.title +
                " Program | Watch All Latest Episodes in HD"}
            </title>
            <meta
              name="description"
              content={
                "Watch all episodes of " +
                playlistDetails.title +
                " in stunning HD quality. Read reviews, share your thoughts, and stay updated with the latest episodes online."
              }
            />
            <meta
              name="keywords"
              content={
                playlistDetails.title +
                ", " +
                playlistDetails.title +
                " episodes, latest " +
                playlistDetails.title +
                " episodes, " +
                playlistDetails.title +
                " watch online, " +
                playlistDetails.title +
                " HD episodes, watch " +
                playlistDetails.title +
                " online, " +
                playlistDetails.title +
                " Show ary qtv, ary qtv"
              }
            />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="video.tv_show" />
            <meta
              property="og:title"
              content={
                playlistDetails.title + " | Watch All Latest Episodes in HD"
              }
            />
            <meta
              property="og:description"
              content={
                "Watch all episodes of " +
                playlistDetails.title +
                " in stunning HD quality. Read reviews, share your thoughts, and stay updated with the latest episodes online."
              }
            />
            <meta
              property="og:image"
              content={config.appImagePath + playlistDetails.imageCoverMobile}
            />
            <meta
              property="og:url"
              content={"https://aryqtv.tv/playlist/" + playlistDetails._id}
            />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content={
                playlistDetails.title +
                " Program | Watch All Latest Episodes in HD"
              }
            />
            <meta
              name="twitter:description"
              content={
                "Watch all episodes of " +
                playlistDetails.title +
                " in stunning HD quality. Read reviews, share your thoughts, and stay updated with the latest episodes online."
              }
            />
            <meta
              name="twitter:image"
              content={config.appImagePath + playlistDetails.imageCoverMobile}
            />
            <meta name="twitter:site" content="@ARTQTV" />
            <meta name="twitter:creator" content="@ARTQTV" />

            {/* Canonical URL */}
            <link
              rel="canonical"
              href={"https://aryqtv.tv/playlist/" + playlistDetails._id}
            />

            {/* Favicon */}
            <link
              rel="icon"
              type="image/png"
              href="https://aryqtv.tv/img/ary-qtv-logo.png"
            />
          </Head>
          <div className="mt-10  mx-auto mb-minus relative">
            {/* Background Image Div */}
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundColor: "hsl(0deg 0% 0%)",
                backgroundImage: `url('/img/qtv-banner-blurred.webp')`,
                // backgroundImage: `linear-gradient(to left,rgba(248, 242, 219, 0.77),rgba(248, 242, 219, 0.72)), url(${
                //   config.appImagePath + playlistDetails.imageCoverDesktop
                // })`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                // boxShadow: "2px -62px 89px 10px rgba(248, 242, 219, 0.77) inset",
                // transform: "scaleX(-1)", // Flips background image horizontally
                zIndex: 0,
              }}
            ></div>

            {/* Content Div */}
            <section>
              <div className="py-10 lg:text-left">
                <div className="mx-auto">
                  <div className="grid items-center gap-2 lg:grid-cols-2">
                    <div className="lg:mt-0 px-6 py-3 md:px-12 contentDiv">
                    <h1 className="mb-6 text-light-bg text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                          {playlistDetails.title}
                        </h1>
                      <p className="text-lg text-light-bg">
                        {playlistDetails.description}
                      </p>

                      {playlistDetails.categoryId[0].title !==
                        "DRAMA ARCHIVE" && playlistDetails.time ? (
                        <div className="mt-6 px-0 ">
                          <button
                            className="text-light-bg active:bg-blueGray-600 text-xs font-bold uppercase rounded outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                            type="button"
                          >
                            <i className="fas fa-clock text-light-bg"></i>{" "}
                            {`${playlistDetails.time} - `}{" "}
                            <i className="fas fa-calendar text-light-bg"></i>{" "}
                            {` ${playlistDetails.day}`}
                          </button>
                        </div>
                      ) : null}
                    </div>

                    {/* Video Section */}
                    <div className="mb-12 lg:mb-0 px-6 py-3">
                      <div className="single-video">
                        <iframe
                          className="dailysingle custom-iframe"
                          src={findAndReplace(
                            playlistDetails.ost.split("&list=")[0],
                            "https://www.youtube.com/watch?v=",
                            "https://www.youtube.com/embed/"
                          )}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={`${playlistDetails.title} Video`}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}

      {/* Videos Section */}
      <section className="text-gray-600 body-font mb-60 mt-4 pt-1">
        <div className="container-fluid mx-auto">
          <center>
            <Leaderboard />
          </center>

          {config.platform === "youtube" ? (
            <CardVideosGridYT category={YTplaylistID} platform="YT" />
          ) : (
            <CardVideosGridDM category={DMplaylistID} platform="DM" />
          )}
        </div>
      </section>
    </>
  );
};

PlaylistId.propTypes = {
  data1: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  config: PropTypes.object.isRequired, // Ensure config is required
};

// Server-Side Rendering (SSR)
export async function getServerSideProps(context) {
  const { id } = context.query;

  try {
    // Fetch the configuration
    await fetchConfig(); // Ensures config is loaded before calling getConfig
    const { getConfig } = require("../../config"); // Import after fetching
    const config = getConfig(); // Now config should be available

    // Fetch series details from API
    const res1 = await fetch(`https://node.aryzap.com/api/series/${id}`);
    const data1 = await res1.json();

    if (!res1.ok || !data1) {
      console.error("Failed to fetch data from series API");
      return { notFound: true };
    }

    // Pass data and config to the page via props
    return { props: { id, data1, config } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { notFound: true };
  }
}

export default PlaylistId;
