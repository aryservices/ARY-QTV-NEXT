import React, { useState, useEffect } from "react";

import Head from "next/head";
import axios from "axios";
import Leaderboard from "../components/Ads/Leaderboard";

const Namaz = () => {
  // (New) Start with a fallback city (e.g. "{city}") while we detect IP-based location
  const [city, setCity] = useState("{city}");
  const [prayerData, setPrayerData] = useState(null);
  const [weeklyData, setWeeklyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weeklyLoading, setWeeklyLoading] = useState(true);

  // (New) Add a separate loader for fetching location from IP
  const [locationFetching, setLocationFetching] = useState(true);

  function capitalizeWords(str) {
    if (!str) return "";
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  // Helper to format date
  function formatDate(dateStr) {
    const dateObj = new Date(dateStr);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;
  }

  // (New) 1. Fetch user's city from IPinfo (or another IP-based service) on first load
  useEffect(() => {
    async function getCityFromIP() {
      try {
        const response = await fetch(
          `https://ipinfo.io/json?token=c60a055b17e826`
        );
        const data = await response.json();
        if (data.city) {
          setCity(data.city);
        } else {
          setCity("{city}"); // fallback
        }
      } catch (error) {
        console.error(error);
        setCity("{city}"); // fallback
      } finally {
        setLocationFetching(false);
      }
    }
    getCityFromIP();
  }, []);

  // (New) 2. Only fetch prayer times once we have a city AND finished location fetch
  useEffect(() => {
    if (!locationFetching && city) {
      fetchPrayerTimes(city);
      fetchWeeklyPrayerTimes(city);
      
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [city, locationFetching]);
  

  const fetchPrayerTimes = async (selectedCity) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `/api/namaz?city=${encodeURIComponent(selectedCity)}&type=daily`
      );
      setPrayerData(res.data.items[0]);
    } catch (error) {
      console.error("Error fetching daily prayer data", error);
    }
    setLoading(false);
  };

  const fetchWeeklyPrayerTimes = async (selectedCity) => {
    setWeeklyLoading(true);
    try {
      const res = await axios.get(
        `/api/namaz?city=${encodeURIComponent(selectedCity)}&type=monthly`
      );
      setWeeklyData(res.data.items.slice(0, 30));
    } catch (error) {
      console.error("Error fetching weekly prayer data", error);
    }
    setWeeklyLoading(false);
  };

  // (New) 3. If still trying to get the city from IP, show a short loader or message
  if (locationFetching) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-yellow font-black text-xl">
          Detecting your location...
        </p>
      </div>
    );
  }

  // From here on, the page is exactly your original code:
  return (
    <>
      {city && (
        <>
          <Head>
            <title>
              {capitalizeWords(city)} Namaz Timings Today - Prayer Times for
              Fajr, Dhuhr, Asr, Maghrib & Isha
            </title>
            <meta
              name="description"
              content={`Find accurate ${city} Namaz Timings for today. Get daily updated prayer times for Fajr, Dhuhr, Asr, Maghrib, and Isha. Stay informed with ARY QTV Islamic prayer schedule.`}
            />
            <meta
              name="keywords"
              content={`${city} namaz timings, prayer times ${city}, ${city} prayer schedule, Islamic prayer times ${city}, fajr time ${city}, maghrib time ${city}, ARY QTV prayer timings`}
            />

            {/* <!-- Canonical URL (Avoids Duplicate Content Issues) --> */}
            <link
              rel="canonical"
              href={`https://aryqtv.tv/namaz-timings/${city}`}
            />

            {/* <!-- Open Graph Meta Tags (For Social Media Sharing) --> */}
            <meta
              property="og:title"
              content={`${capitalizeWords(
                city
              )} Namaz Timings Today - Prayer Times for Fajr, Dhuhr, Asr, Maghrib & Isha`}
            />
            <meta
              property="og:description"
              content={`Find accurate ${city} Namaz Timings for today. Get daily updated prayer times for Fajr, Dhuhr, Asr, Maghrib, and Isha. Stay informed with ARY QTV Islamic prayer schedule.`}
            />
            <meta
              property="og:url"
              content={`https://aryqtv.tv/namaz-timings/${city}`}
            />
            <meta property="og:site_name" content="ARY QTV" />
            <meta property="og:type" content="website" />
            {/* <meta property="og:image" content="https://aryqtv.tv/assets/images/{city}-namaz-timings.jpg" /> */}

            {/* <!-- Twitter Card Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content={`${capitalizeWords(
                city
              )} Namaz Timings Today - Prayer Times for Fajr, Dhuhr, Asr, Maghrib & Isha`}
            />
            <meta
              name="twitter:description"
              content={`Find accurate ${city} Namaz Timings for today. Get daily updated prayer times for Fajr, Dhuhr, Asr, Maghrib, and Isha. Stay informed with ARY QTV Islamic prayer schedule.`}
            />
            {/* <meta name="twitter:image" content="https://aryqtv.tv/assets/images/{city}-namaz-timings.jpg" /> */}

            {/* <!-- Robots Meta Tag (Ensures Indexing & Following Links) --> */}
            <meta name="robots" content="index, follow" />

            {/* <!-- Viewport for Mobile Responsiveness --> */}
            {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}

            {/* <!-- Favicon --> */}
            {/* <link rel="icon" href="https://aryqtv.tv/favicon.ico" type="image/x-icon" /> */}
          </Head>
        </>
      )}
      <section className="text-gray-600 body-font custom-site-bg">
        <div className="container px-5  mx-auto NamazPaddingCustom">
          <center>
            <Leaderboard />
          </center>
          <div className="flex flex-wrap mt-4">
            <div className="wpb_wrapper text-dark w-full">
              <div className="text-center">
                <h1 className="text-yellow font-black text-3xl">
                  {capitalizeWords(city)} Today Namaz Timings (
                  {formatDate(prayerData?.date_for)})
                </h1>
                {/* <p className="text-yellow mt-1 text-lg font-extrabold text-gray-900">
                  {city} ({formatDate(prayerData?.date_for)})
                </p> */}
              </div>

              <br />

              {loading ? (
                <p className="text-yellow font-black">Loading ...</p>
              ) : prayerData ? (
                <>
                  <div className="grid grid-cols-7 gap-1 text-center p-2 rounded-md text-white bg-yellow font-semibold daily-text-namaz">
                    <div>Date</div>
                    <div>Fajr</div>
                    <div>Sunrise</div>
                    <div>Dhuhr</div>
                    <div>Asr</div>
                    <div>Maghrib</div>
                    <div>Isha</div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center p-2 rounded-md bg-[#a86835] border text-yellow bg-yellow-light2 daily-text-namaz">
                    <div>{formatDate(prayerData?.date_for)}</div>
                    <div>{prayerData.fajr}</div>
                    <div>{prayerData.shurooq}</div>
                    <div>{prayerData.dhuhr}</div>
                    <div>{prayerData.asr}</div>
                    <div>{prayerData.maghrib}</div>
                    <div>{prayerData.isha}</div>
                  </div>
                  <div className="py-3 text-yellow">
                    <h2 className="font-black text-2xl mb-2 text-yellow"> {capitalizeWords(city)} Namaz Timings – Daily Prayer Schedule</h2>
                    <p className="mb-3">
                      Are you looking for <b>accurate {capitalizeWords(city)} Namaz Timings?</b> Stay
                      connected with <b>ARY QTV</b> for the most precise prayer times
                      for <b>Fajr, Dhuhr, Asr, Maghrib, and Isha</b> in  <b>{capitalizeWords(city)}.</b> Performing Salah (prayer) on time is essential
                      for every Muslim, and having the correct <b>{capitalizeWords(city)} prayer
                      timings</b> helps you maintain a disciplined routine of
                      worship.
                    </p>
                    <p className="mb-3">
                      Our daily updated timetable ensures that you never miss
                      your prayers. Whether you are at home, at work, or
                      traveling, you can rely on <b>ARY QTV</b> to provide you with
                      <b> Islamic prayer timings in {capitalizeWords(city)}</b> according to <b>Fiqh Hanafi
                      & Fiqh Jafria</b>. Bookmark this page and stay updated with
                      the latest <b>{capitalizeWords(city)} Namaz schedule</b>.
                    </p>
                    <p className="">
                      For your convenience, we provide <b>monthly and weekly namaz
                      timings</b> to help you plan your prayers in advance. Don't
                      forget to share this page with family and friends so they,
                      too, can stay informed about the <b>{capitalizeWords(city)} Salah timings</b>.
                    </p>
                  </div>

                  <div className="mb-6 mt-4 text-center">
                    <h1 className="text-yellow font-black text-3xl">
                      {capitalizeWords(city)} Monthly Namaz Timings
                    </h1>
                  </div>
                  {weeklyLoading ? (
                    <p className="text-yellow font-black">
                      Loading ...
                    </p>
                  ) : weeklyData.length > 0 ? (
                    <>
                      <div className="grid grid-cols-7 gap-1 text-center p-1 rounded-md bg-yellow text-white font-semibold">
                        <div>Date</div>
                        <div>Fajr</div>
                        <div>Sunrise</div>
                        <div>Dhuhr</div>
                        <div>Asr</div>
                        <div>Maghrib</div>
                        <div>Isha</div>
                      </div>
                      {weeklyData.map((item, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-7 text-center p-1 rounded-md mt-2 border text-yellow bg-yellow-light2"
                        >
                          <div>{formatDate(item.date_for)}</div>
                          <div>{item.fajr}</div>
                          <div>{item.shurooq}</div>
                          <div>{item.dhuhr}</div>
                          <div>{item.asr}</div>
                          <div>{item.maghrib}</div>
                          <div>{item.isha}</div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <p className="text-dark">
                      Monthly prayer timings not found for {city}
                    </p>
                  )}
                </>
              ) : (
                <p className="text-dark">Prayer timings not found for {city}</p>
              )}

              <div className="flex flex-wrap gap-3 mb-3 justify-content-center mt-4">
                <button
                  onClick={() => setCity("Karachi")}
                  className="text-light-bg bg-yellow transition focus:outline-none duration-150 font-semibold ease-in-out hover:bg-yellow bg-yellow bg-indigo-700 rounded bg-pink px-3 py-2 text-sm"
                >
                  Karachi
                </button>
                <button
                  onClick={() => setCity("Lahore")}
                  className="text-light-bg bg-yellow transition focus:outline-none duration-150 font-semibold ease-in-out hover:bg-yellow bg-yellow bg-indigo-700 rounded bg-pink px-3 py-2 text-sm"
                >
                  Lahore
                </button>
                <button
                  onClick={() => setCity("Peshawar")}
                  className="text-light-bg bg-yellow transition focus:outline-none duration-150 font-semibold ease-in-out hover:bg-yellow bg-yellow bg-indigo-700 rounded bg-pink px-3 py-2 text-sm"
                >
                  Peshawar
                </button>
                <button
                  onClick={() => setCity("Islamabad")}
                  className="text-light-bg bg-yellow transition focus:outline-none duration-150 font-semibold ease-in-out hover:bg-yellow bg-yellow bg-indigo-700 rounded bg-pink px-3 py-2 text-sm"
                >
                  Islamabad
                </button>
                <button
                  onClick={() => setCity("Multan")}
                  className="text-light-bg bg-yellow transition focus:outline-none duration-150 font-semibold ease-in-out hover:bg-yellow bg-yellow bg-indigo-700 rounded bg-pink px-3 py-2 text-sm"
                >
                  Multan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Namaz;
