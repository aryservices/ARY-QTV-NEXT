import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

// components

export default function CardVideosGridDM({ color, title, user, category }) {
  const [playlists, setPlaylist] = useState(null);
  const [isloading, setisloading] = useState(false);
  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);

  let url =
    "https://api.dailymotion.com/playlist/" +
    category +
    "/videos?fields=owner%2Cthumbnail_180_url%2Cid%2Cthumbnail_240_url%2Cthumbnail_360_url%2Ctitle%2Cid%2Cviews_total%2Cduration%2Cowner.screenname%2Cdescription&page=" +
    page +
    "&limit=8";

  useEffect(() => {
    // const count = 0;

    if (playlists == null) {
      // alert(props.id);

      fetch(url).then((resp) => {
        resp.json().then((result) => {
          setPlaylist(result);
          setPage(2);

          setisloading(true);
          // console.log(result)
        });
      });
    }
  });

  function next() {
    setPage(page + 1);
    // alert(page);
    fetch(
      "https://api.dailymotion.com/playlist/" +
        category +
        "/videos?fields=owner%2Cthumbnail_180_url%2Cid%2Cthumbnail_240_url%2Cthumbnail_360_url%2Ctitle%2Cid%2Cviews_total%2Cduration%2Cowner.screenname%2Cdescription&page=" +
        page +
        "&limit=8"
    ).then((resp) => {
      resp.json().then((results) => {
        // console.log(results)
        setPlaylist(results);
        setPrevPage(page - 1);
      });
    });
  }

  function prev() {
    setPrevPage(prevPage - 1);
    // alert(prevPage);

    fetch(
      "https://api.dailymotion.com/playlist/" +
        category +
        "/videos?fields=owner%2Cthumbnail_180_url%2Cid%2Cthumbnail_240_url%2Cthumbnail_360_url%2Ctitle%2Cid%2Cviews_total%2Cduration%2Cowner.screenname%2Cdescription&page=" +
        prevPage +
        "&limit=8"
    ).then((resp) => {
      resp.json().then((results) => {
        // console.log(results)
        setPlaylist(results);
        setPage(prevPage + 1);
      });
    });
  }

  return (
    <>
      <section className="text-gray-600 body-font bg-black">
        <div className="container mx-auto">
          {/* <h3 className="text-xl font-bold text-white truncate">
                {playlists.title}
            </h3> */}
          <div className="flex flex-wrap">
            {playlists?.list?.length > 0 ? (
              playlists.list.map((item, i) => (
                <div key={i} className="w-full lg:w-3/12 sm:w-1/2 py-2">
                  <Link
                    href={{ pathname: `/video/v1/${item.id}` }}
                    className="hover:scale-110"
                  >
                    <div className="Extra cursor-pointer">
                      <img
                        alt="Thumbnail"
                        src={item.thumbnail_240_url}
                        className="w-full align-middle rounded-t-lg"
                      />
                      <h4 className="text-xl font-bold text-white line-clamp-2">
                        {item.title}
                      </h4>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-white">No playlists available</p>
            )}
          </div>

          <div className="text-center mt-5 mb-5">
            {prevPage > 0 ? (
              <button
                onClick={() => prev()}
                className="bg-yellow text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"
              >
                {" "}
                Previous{" "}
              </button>
            ) : null}
            <span> </span>
            {playlists?.list?.length > 7 ? (
              <button
                onClick={() => next()}
                className="bg-yellow text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"
              >
                Next
              </button>
            ) : null}

          </div>
        </div>
      </section>
    </>
  );
}
