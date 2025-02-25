import React, { useState, useEffect } from 'react';

export default function Blog({ category, title }) {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const cachedData = localStorage.getItem('cachedData');

      if (cachedData) {
        // Use cached data
        setBlogs(JSON.parse(cachedData));
        setIsLoading(false);
      } else {
        await fetchDataFromAPI();
      }
    };

    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch(`https://blogs.arydigital.tv/api/jsonify.php?count=100&post_type=post&cat=drama-reviews&tax=category`);
        const result = await response.json();
        setBlogs(result.data);
        setIsLoading(false);
        // Cache the data
        localStorage.setItem('cachedData', JSON.stringify(result.data));
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();

    // Set interval to refresh data from API every minute
    const interval = setInterval(fetchDataFromAPI, 60000); // 1 minute

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [category]); // Fetch data when category changes

  return (
    <>
      <section className="paddingMobile">
        {/* Your JSX content */}
        {/* Display loading indicator while fetching data */}
        {isLoading && <p>Loading...</p>}

        <div className="mt-10 flex md:flex-row items-start md:items-center justify-between">
          <div>
            <h4 className="text-2xl heading mobilefont font-bold leading-tight text-gray-800 text-white">{title}</h4>

          </div>
          <div className="md:mt-0">

            <a href={"/blogs"} target="_blank">
              <button className="text-black transition focus:outline-none duration-150 font-semibold	 ease-in-out hover:bg-yellow bg-yellow bg-indigo-700 rounded bg-pink px-3 py-2 text-sm">Read More</button>
            </a>


          </div>
          {/* Code block ends */}
        </div>
        {/* Display blogs when data is fetched */}
        {blogs && (
          <div className="flex justify-center items-center">
            <div className="2xl:mx-auto 2xl:container w-96 sm:w-auto mobileBlog">
              <div className="lg:flex items-stretch">
                <div className="lg:w-2/2 mt-2">
                  <div className="items-center flex flex-wrap">
                    {blogs.specific_post.slice(0, 4).map((item, i) => (
                      <div key={i} className="w-full lg:w-3/12 sm:w-1/2 px-2 py-2 relative mobilePadding">
                        <div>

                          <a href={"/" + item.slugs} target="_blank"> <img src={item.image ? item.image.replace("-150x150", "") : item.thumbnail} className="w-full blogImage" alt={item.title} /> </a>

                          {/* <p className="p-1 text-xs font-medium leading-3 absolute top-0 right-0 blogContentDate ">{item.date}</p> */}
                          <div className="bottom-0 left-0 p-6 blogContent">
                            <a href={"/" + item.slugs}> <h2 className="text-xl font-semibold 5 text-white">{item.title}</h2> </a>
                            {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                            <a href={"/" + item.slugs} className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                              <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                              <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}