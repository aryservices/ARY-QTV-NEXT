import React, { useState, useEffect } from 'react';
import Link from "next/link";
import MainSlider from "../components/Sliders/MainSlider";
import CardVideos from "../components/Cards/CardVideos";
import PlaylistSlider from "../components/Sliders/PlaylistSlider";
import Catfish from "../components/Ads/Catfish";
import Mrec from "../components/Ads/Mrec";
import Leaderboard from "../components/Ads/Leaderboard";

export default function Blogs({ category, title }) {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const sectionTitle = title;
  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);

  useEffect(() => {
    if (blogs == null) {
      setIsLoading(true);
      fetch(`https://blogs.arydigital.tv/api/jsonify.php?post_type=post&cat=drama-reviews&tax=category&count=12&page=0`)
        .then((resp) => resp.json())
        .then((result) => {
          setBlogs(result.data);
          setIsLoading(false);
        });
    }
  }, []);

  function fetchData(pageNumber) {
    setIsFetching(true);
    fetch(`https://blogs.arydigital.tv/api/jsonify.php?post_type=post&cat=drama-reviews&tax=category&count=12&page=${pageNumber}`)
      .then((resp) => resp.json())
      .then((results) => {
        setBlogs(results.data);
        setIsFetching(false);
      });
  }

  function next() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage(page + 1);
    fetchData(page + 1);
  }

  function prev() {
    if (page > 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setPage(page - 1);
      fetchData(page - 1);
    }
  }

  return (
    <>
      <section className="container px-5 py-20 mx-auto paddingMobile">
        <center>
          <Leaderboard />
        </center>
        <div className="flex justify-center items-center">
          <div className="2xl:mx-auto 2xl:container w-96 sm:w-auto mobileBlog">
            <div className="lg:flex items-stretch">
              <div className="lg:w-2/2 mt-10">
                <div className="items-center flex flex-wrap">
                  {isFetching || isLoading ? (
                    <div className="w-full text-center my-10">
                      <i className="fas fa-circle-notch animate-spin text-white text-6xl"></i>
                      <p className="text-lg font-medium text-white mt-2">Loading...</p>
                    </div>
                  ) : blogs ? (
                    blogs.specific_post.map((item, i) => (
                      <div key={i} className="w-full lg:w-3/12 sm:w-1/2 px-2 py-2 relative mobilePadding">
                        <div>
                          <a href={`/${item.slugs}`}>
                            <img
                              src={item.image ? item.image.replace("-150x150", "") : item.thumbnail}
                              className="w-full blogImage"
                              alt={item.title}
                            />
                          </a>
                          <div className="bottom-0 left-0 p-6 blogContent">
                            <a href={`/${item.slugs}`}>
                              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                            </a>
                            <a
                              href={`/${item.slugs}`}
                              className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                            >
                              <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                              <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="my-32 mx-auto max-w-sm text-center relative z-50 top-0">
                      <div className="block mb-4">
                        <i className="fas fa-circle-notch animate-spin text-white mx-auto text-6xl"></i>
                      </div>
                      <h4 className="text-lg font-medium text-white">Loading page contents</h4>
                    </div>
                  )}
                </div>
                <div className="text-center mt-5 mb-5">
                  {page > 1 && (
                    <button
                      onClick={prev}
                      className="bg-yellow text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    >
                      Previous
                    </button>
                  )}
                  {blogs && blogs.specific_post.length > 11 && (
                    <button
                      onClick={next}
                      className="bg-yellow text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
