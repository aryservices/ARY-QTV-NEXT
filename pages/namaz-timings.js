import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Leaderboard from '../components/Ads/Leaderboard';

const Namaz = () => {
  const [city, setCity] = useState('Karachi');
  const [prayerData, setPrayerData] = useState(null);
  const [weeklyData, setWeeklyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weeklyLoading, setWeeklyLoading] = useState(true);

  useEffect(() => {
    fetchPrayerTimes(city);
    fetchWeeklyPrayerTimes(city);
  }, [city]);

  const fetchPrayerTimes = async (selectedCity) => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/namaz?city=${encodeURIComponent(selectedCity)}&type=daily`);
      setPrayerData(res.data.items[0]);
    } catch (error) {
      console.error('Error fetching daily prayer data', error);
    }
    setLoading(false);
  };

  const fetchWeeklyPrayerTimes = async (selectedCity) => {
    setWeeklyLoading(true);
    try {
      const res = await axios.get(`/api/namaz?city=${encodeURIComponent(selectedCity)}&type=weekly`);
      setWeeklyData(res.data.items.slice(0, 7)); // Ensure we get 7 days
    } catch (error) {
      console.error('Error fetching weekly prayer data', error);
    }
    setWeeklyLoading(false);
  };

  return (
    <>
      <Head>
        <title>Prayer Timings</title>
      </Head>
      <section className="text-gray-600 body-font custom-site-bg">
        <div className="container px-5 py-20 mx-auto">
          <center>
            <Leaderboard />
          </center>
          <div className="flex flex-wrap mt-10">
            <div className="wpb_wrapper text-dark">
              <h1 className="text-dark font-bold text-2xl">Today Prayer Timings</h1>
              <br/>
              <div className="flex justify-between items-center mb-5">
                <select
                  className="p-2 border rounded text-black"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                >
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Multan">Multan</option>
                </select>
              </div>
              {loading ? (
                <p className="text-dark">Loading prayer timings...</p>
              ) : prayerData ? (
                <>
                  <div className="grid grid-cols-7 gap-4 text-center p-4 rounded-md text-white bg-yellow font-semibold">
                    <div>Date</div>
                    <div>Fajr</div>
                    <div>Sunrise</div>
                    <div>Dhuhr</div>
                    <div>Asr</div>
                    <div>Maghrib</div>
                    <div>Isha</div>
                  </div>
                  <div className="grid grid-cols-7 gap-4 text-center p-4 rounded-md text-dark bg-[#a86835] border">
                    <div>{prayerData.date_for}</div>
                    <div>{prayerData.fajr}</div>
                    <div>{prayerData.shurooq}</div>
                    <div>{prayerData.dhuhr}</div>
                    <div>{prayerData.asr}</div>
                    <div>{prayerData.maghrib}</div>
                    <div>{prayerData.isha}</div>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-dark">Weekly Timings</h3>
                  {weeklyLoading ? (
                    <p className="text-dark">Loading weekly prayer timings...</p>
                  ) : weeklyData.length > 0 ? (
                    <>
                      <div className="grid grid-cols-7 gap-4 text-center p-4 rounded-md bg-yellow text-white font-semibold">
                        <div>Date</div>
                        <div>Fajr</div>
                        <div>Sunrise</div>
                        <div>Dhuhr</div>
                        <div>Asr</div>
                        <div>Maghrib</div>
                        <div>Isha</div>
                      </div>
                      {weeklyData.map((item, index) => (
                        // <div key={index} className="grid grid-cols-7 gap-4 text-center p-4 rounded-md mt-2 text-dark border">
                          <div
                            key={index}
                            className={`grid grid-cols-7 gap-4 text-center p-4 rounded-md mt-2 text-dark border ${
                              index % 2 === 1 ? 'bg-yellow text-white' : ''
                            }`}
                          >
                          <div>{item.date_for}</div>
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
                    <p className="text-dark">Weekly prayer timings not found for {city}</p>
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

export default Namaz;