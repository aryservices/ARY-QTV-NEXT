import React, { useState } from "react";
import Link from "next/link";
import MainSlider from "../../components/Sliders/MainSlider";
import CardVideos from "../../components/Cards/CardVideos";
import PlaylistSlider from "../../components/Sliders/PlaylistSlider";
import Catfish from "../../components/Ads/Catfish";
import Mrec from "../../components/Ads/Mrec";
import Leaderboard from "../../components/Ads/Leaderboard";

const AuthorPosts = (props) => {
  
  const datas = props.data;
  const author_id = props.id;
  

  const [blogs, setBlogs] = useState(props.data);

  const [isLoading, setIsLoading] = useState(false);
  // const sectionTitle = title;
  const [page, setPage] = useState(2);
  const [prevPage, setPrevPage] = useState(0);
  // console.log(category);

  // useEffect(() => {
  //   // const count = 0;

  //   if (blogs == null) {
  //     // alert(props.id);

  //     fetch('https://blogs.arydigital.tv/wp-json/wp/v2/posts?author_slug=omernadeem&per_page=20&page=1').then((resp) => {

  //       resp.json().then((result) => {
  //         setBlogs(result);

  //         setIsLoading(true);
  //         // alert(result[0].yoast_head_json.og_image[0].url);


  //       })


  //     })
  //   }

    

  // })


  function next() {
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
    setPage(page + 1);
    // alert(page);
    fetch('https://blogs.arydigital.tv/wp-json/wp/v2/posts?author='+author_id+'&per_page=20&page='+ page ).then((resp) => {

      resp.json().then((results) => {
        console.log(results)
        setBlogs(results);
        setPrevPage(page - 1);

      })


    })




  }

  function prev() {
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 

    setPrevPage(prevPage - 1);
    // alert(prevPage);

    fetch('https://blogs.arydigital.tv/wp-json/wp/v2/posts?author='+author_id+'&per_page=20&page='+ prevPage).then((resp) => {

      resp.json().then((results) => {
        console.log(results)
        setBlogs(results);
        setPage(prevPage + 1);
      })


    })




  }

  return (
    <>
    <section className="container px-5 py-20 mx-auto paddingMobile">
     
    <center>
            <Leaderboard />
          </center>
          {/* Blogs */}

          <div className="flex justify-center items-center">

       
  
  <div className="2xl:mx-auto 2xl:container w-96 sm:w-auto mobileBlog">

    <div className="lg:flex items-stretch">
      <div className="lg:w-2/2 mt-10">
        <div className="items-center flex flex-wrap">

        {blogs ? blogs.map((item, i) =>
        <div className="w-full lg:w-3/12 sm:w-1/2 px-2 py-2 relative mobilePadding">
          <div>

          <a href={"/" + item.slug}> <img src={item.yoast_head_json.og_image ? item.yoast_head_json.og_image[0].url : "https://blogs.arydigital.tv/wp-content/uploads/2024/05/Image_not_available.jpg"} className="w-full blogImage" alt={item.title.rendered} /> </a>
          
            {/* <p className="p-1 text-xs font-medium leading-3 absolute top-0 right-0 blogContentDate ">{item.date}</p> */}
            <div className="bottom-0 left-0 p-6 blogContent">
            <a href={"/" + item.slug}> <h2 className="text-xl font-semibold 5 text-white">{item.title.rendered}</h2> </a>
              {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
              <a href={"/" + item.slug} className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          
        </div>
          ) : null}
          

         
        </div>

        <div className="text-center mt-5 mb-5">
            {prevPage > 0 ?
              <button onClick={() => prev()}
                className="bg-yellow text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"> Previous </button>
              : null}
            <span>  </span>
            {blogs && blogs.length > 7 ?

              <button onClick={() => next()}
                className="bg-yellow text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"> Next </button>


              : null}
          </div>
       
      
      </div>
     
    </div>
  </div>
</div>
{/* Blogs */}
          
      </section>





    </>
  );
}


// This gets called on every request
export async function getServerSideProps(context) {
  // console.log(context.query + "Hello");
  const { id, channel } = context.query;
  console.log(id);
  // alert(channel);
  // Fetch data from external API
  const res = await fetch('https://blogs.arydigital.tv/wp-json/wp/v2/posts?author='+id+'&per_page=20&page=1')
  const data = await res.json()

  //   const res1 = await fetch('https://api.dailymotion.com/video/' + id + '/playlists?owner=x1bx0w0')
  //   const data1 = await res1.json()

  // Pass data to the page via props
  return { props: { data, id } }
}

export default AuthorPosts;