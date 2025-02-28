import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import Leaderboard from "../components/Ads/Leaderboard";

const Ramadan = () => {
  // (New) Start with a fallback city (e.g. "Karachi") while we detect IP-based location
  const [city, setCity] = useState("Karachi");
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

  const adjustTime = (timeStr, minutes) => {
    const [hour, minute, period] = timeStr
      .match(/(\d+):(\d+) (\w{2})/)
      .slice(1);
    let date = new Date();
    date.setHours(
      period === "pm" && hour !== "12" ? parseInt(hour) + 12 : parseInt(hour)
    );
    date.setMinutes(parseInt(minute) + minutes);

    // Format back to 12-hour format
    let newHour = date.getHours();
    let newMinute = date.getMinutes();
    let newPeriod = newHour >= 12 ? "pm" : "am";

    if (newHour > 12) newHour -= 12;
    if (newHour === 0) newHour = 12;

    return `${newHour}:${newMinute.toString().padStart(2, "0")} ${newPeriod}`;
  };

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
          setCity("Karachi"); // fallback
        }
      } catch (error) {
        console.error(error);
        setCity("Karachi"); // fallback
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
    }
    // We'll run whenever city changes or locationFetching changes
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
            {capitalizeWords(city)} Ramadan 2025 Sehr & Iftar Timings - Daily Fasting Schedule
          </title>
          <meta
            name="description"
            content={`Find accurate ${city} Ramadan 2025 Sehr and Iftar timings. Stay updated with daily fasting schedule, Suhoor and Iftar times for ${city}. Plan your Ramadan prayers and fasting with ARY QTV.`}
          />
          <meta
            name="keywords"
            content={`${city} Ramadan 2025 timings, Sehr time ${city}, Iftar time ${city}, Ramadan prayer times ${city}, fasting schedule ${city}, Islamic calendar ${city}, ARY QTV Ramadan timings`}
          />

          {/* <!-- Canonical URL (Avoids Duplicate Content Issues) --> */}
          <link
            rel="canonical"
            href={`https://aryqtv.tv/ramadan-timings/${city}`}
          />

          {/* <!-- Open Graph Meta Tags (For Social Media Sharing) --> */}
          <meta
            property="og:title"
            content={`${capitalizeWords(city)} Ramadan 2025 Sehr & Iftar Timings - Daily Fasting Schedule`}
          />
          <meta
            property="og:description"
            content={`Find accurate ${city} Ramadan 2025 Sehr and Iftar timings. Stay updated with daily fasting schedule, Suhoor and Iftar times for ${city}. Plan your Ramadan prayers and fasting with ARY QTV.`}
          />
          <meta
            property="og:url"
            content={`https://aryqtv.tv/ramadan-timings/${city}`}
          />
          <meta property="og:site_name" content="ARY QTV" />
          <meta property="og:type" content="website" />
          {/* <meta property="og:image" content={`https://aryqtv.tv/assets/images/${city}-ramadan-timings.jpg`} /> */}

          {/* <!-- Twitter Card Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content={`${capitalizeWords(city)} Ramadan 2025 Sehr & Iftar Timings - Daily Fasting Schedule`}
          />
          <meta
            name="twitter:description"
            content={`Find accurate ${city} Ramadan 2025 Sehr and Iftar timings. Stay updated with daily fasting schedule, Suhoor and Iftar times for ${city}. Plan your Ramadan prayers and fasting with ARY QTV.`}
          />
          {/* <meta name="twitter:image" content={`https://aryqtv.tv/assets/images/${city}-ramadan-timings.jpg`} /> */}

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
        <div className="container px-5 NamazPaddingCustom mx-auto">
          <center>
            <Leaderboard />
          </center>
          <div className="flex flex-wrap mt-4">
            <div className="wpb_wrapper text-dark w-full">
              <div className="text-center">
                <h1 className="text-yellow font-black text-3xl">
                  {capitalizeWords(city)} Today Ramadan Timings (
                    {formatDate(prayerData?.date_for)})
                </h1>
              </div>

              <br />

              {loading ? (
                <p className="text-yellow font-black">Loading ...</p>
              ) : prayerData ? (
                <>
                  <div className="grid grid-cols-3 gap-1 text-center p-3 rounded-md text-white bg-yellow font-semibold daily-text">
                    <div>Date</div>
                    <div>Sehar</div>
                    <div>Iftar</div>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-center p-3 rounded-md bg-[#a86835] border text-yellow bg-yellow-light2  daily-text">
                    <div>{formatDate(prayerData?.date_for)}</div>
                    <div>{adjustTime(prayerData.fajr, -1)}</div>
                    <div>{adjustTime(prayerData.maghrib, 1)}</div>
                  </div>
                  <div className="text-yellow bg-yellow-light2">                    
                    <h1 className="font-black text-lg text-center">(Fiqh Jafria: Suhoor Time -10min | Iftar Time +10min)</h1>
                  </div>
                  <div className="py-5 text-yellow">
                    <h2 className="font-black text-2xl mb-2 text-yellow">
                      {capitalizeWords(city)} Ramadan 2025 Sehr & Iftar Timings – Daily Fasting Schedule
                    </h2>
                    <p className="mb-3">
                      Are you searching for <b>accurate {capitalizeWords(city)} Sehr and Iftar timings for Ramadan 2025?</b> Stay connected with 
                      <b> ARY QTV</b> for the most precise daily fasting schedule. Observing <b>Sehri and Iftar</b> at the right time 
                      is essential during the holy month of <b>Ramadan</b>, and our updated timetable ensures you never miss a moment 
                      of this blessed journey.
                    </p>
                    <p className="mb-3">
                      Our <b>daily updated Ramadan calendar</b> provides accurate <b>fasting times in {capitalizeWords(city)}</b>, 
                      including Sehri (pre-dawn meal) and Iftar (breaking fast) schedules according to <b>Fiqh Hanafi & Fiqh Jafria</b>. 
                      Whether you are at home, at work, or traveling, rely on <b>ARY QTV</b> for <b>authentic Ramadan prayer and fasting timings.</b> 
                      Bookmark this page and stay updated throughout the holy month.
                    </p>
                    <p className="">
                      For your convenience, we offer <b>weekly and monthly Ramadan Sehr & Iftar schedules</b>, helping you plan your fasting in advance. 
                      Share this page with your loved ones so they too can stay informed about <b>{capitalizeWords(city)} Ramadan 2025 fasting timings</b> 
                      and make the most of this sacred month.
                    </p>
                  </div>

                  <div className="mb-6 mt-2 text-center">
                    <h1 className="text-yellow font-black text-3xl">
                      {capitalizeWords(city)} Monthly Ramadan Timings 
                    </h1>
                  </div>
                  {weeklyLoading ? (
                    <p className="text-yellow font-black">
                      Loading ...
                    </p>
                  ) : weeklyData.length > 0 ? (
                    <>
                      <div className="grid grid-cols-3 gap-1 text-center p-1 rounded-md bg-yellow text-white font-semibold">
                        <div>Date</div>
                        <div>Sehar</div>
                        <div>Iftar</div>
                      </div>
                      {weeklyData.map((item, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-3 text-center p-1 rounded-md mt-2 border text-yellow bg-yellow-light2"
                        >
                          <div>{formatDate(item.date_for)}</div>

                          <div>{adjustTime(item.fajr, -1)}</div>
                          <div>{adjustTime(item.maghrib, 1)}</div>
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
              <div className="text-yellow text-center">
                <p>
                  <em>
                    Disclaimer: Please note there is a 01 minute preventative
                    difference in both as Sehri ends 1 minute earlier and iftar
                    starts with 01 minute delay. ARY makes every effort to
                    verify all info & time along with DST in (some countries)
                    but its always better to double consult from your local
                    Mosque / Masjid.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ramadan;
