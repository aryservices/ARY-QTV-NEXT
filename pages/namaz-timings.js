import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import Leaderboard from "../components/Ads/Leaderboard";

const Namaz = () => {
  // (New) Start with a fallback city (e.g. "Karachi") while we detect IP-based location
  const [city, setCity] = useState("Karachi");
  const [prayerData, setPrayerData] = useState(null);
  const [weeklyData, setWeeklyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weeklyLoading, setWeeklyLoading] = useState(true);

  // (New) Add a separate loader for fetching location from IP
  const [locationFetching, setLocationFetching] = useState(true);

  
  

  // Helper to format date
  function formatDate(dateStr) {
    const dateObj = new Date(dateStr);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;
  }

  // (New) 1. Fetch user's city from IPinfo (or another IP-based service) on first load
  useEffect(() => {
    async function getCityFromIP() {
      try {
        const response = await fetch(`https://ipinfo.io/json?token=c60a055b17e826`);
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
        <p className="text-dark font-bold text-xl">Detecting your location...</p>
      </div>
    );
  }

  // From here on, the page is exactly your original code:
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
            <div className="wpb_wrapper text-dark w-full">
              <div className="flex justify-between items-center">
                <select
                  className="p-2 border rounded text-black w-100 custom-site-bg border-secondary"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                >
                  <option value="">Select a country</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cabo Verde">Cabo Verde</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Central African Republic">Central African Republic</option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</option>
                  <option value="Congo (DRC)">Congo (DRC)</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Eswatini">Eswatini</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Greece">Greece</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea (North)">Korea (North)</option>
                  <option value="Korea (South)">Korea (South)</option>
                  <option value="Kosovo">Kosovo</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia">Micronesia</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar (Burma)">Myanmar (Burma)</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="North Macedonia">North Macedonia</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Sudan">South Sudan</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Timor-Leste">Timor-Leste</option>
                  <option value="Togo">Togo</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Vatican City">Vatican City</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>
              <div className="flex flex-wrap gap-3 my-3">
                <button
                  onClick={() => setCity("Karachi")}
                  className="text-light transition focus:outline-none duration-150 font-semibold ease-in-out hover:bg-yellow bg-yellow bg-indigo-700 rounded bg-pink px-3 py-2 text-sm bg-yellow-light"
                >
                  Karachi
                </button>
                <button
                  onClick={() => setCity("Lahore")}
                  className="text-light transition focus:outline-none duration-150 font-semibold ease-in-out hover:bg-yellow bg-yellow bg-indigo-700 rounded bg-pink px-3 py-2 text-sm bg-yellow-light"
                >
                  Lahore
                </button>
                <button
                  onClick={() => setCity("Peshawar")}
                  className="text-light transition focus:outline-none duration-150 font-semibold ease-in-out hover:bg-yellow bg-yellow bg-indigo-700 rounded bg-pink px-3 py-2 text-sm bg-yellow-light"
                >
                  Peshawar
                </button>
                <button
                  onClick={() => setCity("Islamabad")}
                  className="text-light transition focus:outline-none duration-150 font-semibold ease-in-out hover:bg-yellow bg-yellow bg-indigo-700 rounded bg-pink px-3 py-2 text-sm bg-yellow-light"
                >
                  Islamabad
                </button>
                <button
                  onClick={() => setCity("Multan")}
                  className="text-light transition focus:outline-none duration-150 font-semibold ease-in-out hover:bg-yellow bg-yellow bg-indigo-700 rounded bg-pink px-3 py-2 text-sm bg-yellow-light"
                >
                  Multan
                </button>
              </div>

              <div>
                <h1 className="text-yellow font-bold text-2xl">
                  Today Namaz Timings
                </h1>
                <p className="text-dark mt-1">
                  {city} ({formatDate(prayerData?.date_for)})
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
                  <div className="grid grid-cols-7 gap-1 text-center p-1 rounded-md text-dark bg-[#a86835] border bg-light">
                    <div>{formatDate(prayerData?.date_for)}</div>
                    <div>{prayerData.fajr}</div>
                    <div>{prayerData.shurooq}</div>
                    <div>{prayerData.dhuhr}</div>
                    <div>{prayerData.asr}</div>
                    <div>{prayerData.maghrib}</div>
                    <div>{prayerData.isha}</div>
                  </div>

                  <div className="mb-6 mt-3">
                    <h1 className="text-yellow font-bold text-2xl">
                      Monthly Namaz Timings
                    </h1>
                    <p className="text-dark mt-1">{city}</p>
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
                          className="grid grid-cols-7 text-center p-1 rounded-md mt-2 text-dark border bg-light"
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

export default Namaz;
