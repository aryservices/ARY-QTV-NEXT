import React, { useState } from 'react';
import Link from 'next/link';
import Leaderboard from '../components/Ads/Leaderboard';
import { fetchConfig, getConfig } from '../config';

// Shimmer with 2 rows of 5 placeholders each, 280x400
const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="w-full lg:w-2/12 sm:w-1/2 px-2 py-2">
          <center>
            <div className="Extra cursor-pointer AdjustHeight">
              <div
                className="bg-gray-500 animate-pulse rounded"
              />
            </div>
          </center>
        </div>
      ))}
    </div>
  );
};

const PopularPlaylist = ({ data, config }) => {
  const [playlists, setPlaylists] = useState(data.series || []);
  const [page, setPage] = useState(data.pagination?.currentPage || 1); // Initialize with SSR current page
  const [totalPages, setTotalPages] = useState(
    Math.ceil(
      (data.pagination?.totalSeries || 0) / (data.pagination?.pageSize || 1)
    )
  );
  const [loading, setLoading] = useState(false);

  // Fetch the next page when the "Load More" button is clicked
  const loadMore = async () => {
    if (loading || page >= totalPages) return;

    setLoading(true);
    try {
      await fetchConfig();
      const config = getConfig();

      // Fetch data for the next page
      const nextPage = page + 1;
      const res = await fetch(`${config.popularplaylist}?page=${nextPage}`);
      const nextData = await res.json();

      // Append new series to the existing playlists
      if (nextData.series) {
        setPlaylists((prev) => {
          const uniqueSeries = nextData.series.filter(
            (item) => !prev.find((existing) => existing._id === item._id)
          );
          return [...prev, ...uniqueSeries];
        });
      }

      // Update totalPages if the API provides new pagination data
      if (nextData.pagination) {
        setTotalPages(
          Math.ceil(
            nextData.pagination.totalSeries / nextData.pagination.pageSize
          )
        );
      }

      // Increment the page number
      setPage(nextPage);
    } catch (error) {
      console.error('Error fetching next page:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="text-gray-600 body-font bg-black">
      <div className="container py-24 mx-auto">
        <center>
          <Leaderboard />
        </center>

        {playlists.length === 0 && loading ? (
          // Show shimmer loader only when there are no playlists loaded (initial load)
          <Shimmer />
        ) : (
          <>
            {/* Render loaded data */}
            <div className="flex flex-wrap">
              {playlists.length > 0 ? (
                playlists
                  .filter((item) => item.status !== 'draft')
                  .map((item) => (
                    <div
                      key={item._id}
                      className="w-full lg:w-2/12 sm:w-1/2 px-2 py-2"
                    >
                      <center>
                        <Link href={`/playlist/${item._id}`}>
                          <div className="Extra cursor-pointer">
                            <img
                              src={`${config.appImagePath + item.imagePoster}`}
                              alt={item.title}
                              onError={(e) =>
                                (e.target.src = '/fallback-image.png')
                              }
                            />
                          </div>
                        </Link>
                      </center>
                    </div>
                  ))
              ) : (
                <p className="text-white text-center w-full">
                  No series available
                </p>
              )}
            </div>

            {/* Show shimmer loader below content for subsequent pages */}
            {loading && page >= 1 && (
              <>
                <div className="">
                  <Shimmer />
                </div>

                <div className="text-center mt-5">
                  <button
                    onClick={loadMore}
                    disabled
                    className="bg-yellow hover:shadow-lg disabled text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  >
                    Loading...
                  </button>
                </div>
              </>
            )}

            {/* "Load More" Button */}
            {!loading && page < totalPages && (
              <div className="text-center mt-5">
                <button
                  onClick={loadMore}
                  className="bg-yellow hover:shadow-lg text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  await fetchConfig();
  const config = getConfig();
  const page = context.query.page || 1;

  try {
    const res = await fetch(`${config.popularplaylist}?page=${page}`);
    const data = await res.json();
    return { props: { data, config } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: {
          series: [],
          pagination: { totalSeries: 0, pageSize: 1 },
        },
      },
    };
  }
}

export default PopularPlaylist;
