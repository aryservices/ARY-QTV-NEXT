import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import Leaderboard from "../../components/Ads/Leaderboard";

const Namaz = ({ city: initialCity }) => {
  // Default to "Karachi" if no city is provided from query
  const [city, setCity] = useState(initialCity || "Karachi");
  const [prayerData, setPrayerData] = useState(null);
  const [weeklyData, setWeeklyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weeklyLoading, setWeeklyLoading] = useState(true);

  // Helper to format date
  function formatDate(dateStr) {
    const dateObj = new Date(dateStr);
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;
  }

  function capitalizeWords(str) {
    if (!str) return "";
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  // Fetch daily prayer times
  const fetchPrayerTimes = async (selectedCity) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `/api/namaz?city=${encodeURIComponent(selectedCity)}&type=daily`
      );
      setPrayerData(res.data.items[0]);
    } catch (error) {
      console.error("Error fetching daily prayer data", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch monthly prayer times
  const fetchWeeklyPrayerTimes = async (selectedCity) => {
    setWeeklyLoading(true);
    try {
      const res = await axios.get(
        `/api/namaz?city=${encodeURIComponent(selectedCity)}&type=monthly`
      );
      // Grabbing first 30 days
      setWeeklyData(res.data.items.slice(0, 30));
    } catch (error) {
      console.error("Error fetching weekly prayer data", error);
    } finally {
      setWeeklyLoading(false);
    }
  };

  // Whenever `city` changes, fetch new data
  useEffect(() => {
    if (city) {
      fetchPrayerTimes(city);
      fetchWeeklyPrayerTimes(city);
    }
  }, [city]);

  return (
    
    <>
       {city && (
        <>
      <Head>
        <title>{capitalizeWords(city)} Namaz Timings Today - Prayer Times for Fajr, Dhuhr, Asr, Maghrib & Isha</title>
        <meta name="description" content={`Find accurate ${city} Namaz Timings for today. Get daily updated prayer times for Fajr, Dhuhr, Asr, Maghrib, and Isha. Stay informed with ARY QTV Islamic prayer schedule.`} />
        <meta name="keywords" content={`${city} namaz timings, prayer times ${city}, ${city} prayer schedule, Islamic prayer times ${city}, fajr time ${city}, maghrib time ${city}, ARY QTV prayer timings`} />

        {/* <!-- Canonical URL (Avoids Duplicate Content Issues) --> */}
        <link rel="canonical" href={`https://aryqtv.tv/namaz-timings/${city}`} />

        {/* <!-- Open Graph Meta Tags (For Social Media Sharing) --> */}
        <meta property="og:title" content={`${capitalizeWords(city)} Namaz Timings Today - Prayer Times for Fajr, Dhuhr, Asr, Maghrib & Isha`} />
        <meta property="og:description" content={`Find accurate ${city} Namaz Timings for today. Get daily updated prayer times for Fajr, Dhuhr, Asr, Maghrib, and Isha. Stay informed with ARY QTV Islamic prayer schedule.`} />
        <meta property="og:url" content={`https://aryqtv.tv/namaz-timings/${city}`} />
        <meta property="og:site_name" content="ARY QTV" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="https://aryqtv.tv/assets/images/{city}-namaz-timings.jpg" /> */}

        {/* <!-- Twitter Card Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${capitalizeWords(city)} Namaz Timings Today - Prayer Times for Fajr, Dhuhr, Asr, Maghrib & Isha`} />
        <meta name="twitter:description" content={`Find accurate ${city} Namaz Timings for today. Get daily updated prayer times for Fajr, Dhuhr, Asr, Maghrib, and Isha. Stay informed with ARY QTV Islamic prayer schedule.`} />
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
        <div className="container px-5 py-20 mx-auto">
          <center>
            <Leaderboard />
          </center>
          <div className="flex flex-wrap mt-10">
            <div className="wpb_wrapper text-dark w-full">
              {/* <div className="flex flex-wrap gap-3 my-3">
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
              </div> */}

              <div className=" text-center">
                <h1 className="text-yellow font-black text-3xl">
                  Today Namaz Timings
                </h1>
                <p className="text-yellow mt-1 text-lg font-extrabold text-gray-900">
                  {capitalizeWords(city)} ({formatDate(prayerData?.date_for)})
                </p>
              </div>

              <br />

              {loading ? (
                <p className="text-dark">Loading Namaz timings...</p>
              ) : prayerData ? (
                <>
                  <div className="grid grid-cols-7 gap-1 text-center p-1 rounded-md text-white bg-yellow font-semibold">
                    <div>Date</div>
                    <div>Fajr</div>
                    <div>Sunrise</div>
                    <div>Dhuhr</div>
                    <div>Asr</div>
                    <div>Maghrib</div>
                    <div>Isha</div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center p-1 rounded-md bg-[#a86835] border text-yellow bg-yellow-light2">
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
                      Monthly Namaz Timings
                    </h1>
                    <p className="text-yellow mt-1 text-lg font-extrabold text-gray-900">{capitalizeWords(city)}</p>
                  </div>
                  {weeklyLoading ? (
                    <p className="text-dark">
                      Loading monthly Namaz timings...
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  const { city } = context.query;
  // Pass the city to the component (falls back to "Karachi" if undefined)
  return { props: { city: city || null } };
}

export default Namaz;
