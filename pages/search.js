import React, {useState, useEffect } from 'react';
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import Slider from "react-slick";
import Link from 'next/link';
import { Tab } from '@headlessui/react'
import { getConfig } from '../config';


const Search = (props) => {
        
    // const { query } = useRouter();
    // const {id, liveid} = useParams();

     const router = useRouter()
    const {query} = router.query;
      const config = getConfig();
    // const [videos, setVideos] = useState(null);
    const [isloading, setisloading] = useState(false);

    const [playlists, setPlaylist] = useState(null);
      const [page, setPage] = useState(1);
      const [prevPage, setPrevPage] = useState(0);

      let
          url = 'https://api.dailymotion.com/user/'+ config.channel +'/videos?fields=id,title,thumbnail_360_url,views_total,views_last_day,owner.screenname,duration&search='+query+'&page='+page+'&limit=8';
      
      useEffect(() => {
        // const count = 0;
        
        if(playlists == null){ 
			// alert(props.id);
            
         fetch(url).then((resp) => {

        resp.json().then((result) => {
            setPlaylist(result);
            setPage(2);

		setisloading(true);
		console.log(result)
          
     
  })


  }) }

})



function next(){
	
  setPage(page + 1);
	// alert(page);
fetch('https://api.dailymotion.com/user/'+ config.channel +'/videos?fields=id,title,thumbnail_360_url,views_total,views_last_day,owner.screenname,duration&search='+query+'&page='+page+'&limit=8').then((resp) => {

	resp.json().then((results) => {
		console.log(results)
		setPlaylist(results);
    setPrevPage(page - 1);
		
	})


})




}

function prev(){

  setPrevPage(prevPage - 1);
	// alert(prevPage);

fetch('https://api.dailymotion.com/user/'+ config.channel +'/videos?fields=id,title,thumbnail_360_url,views_total,views_last_day,owner.screenname,duration&search='+query+'&page='+prevPage+'&limit=8').then((resp) => {

	resp.json().then((results) => {
		console.log(results)
		setPlaylist(results);
		setPage(prevPage +1);
	})


})




}



  return (
    <>

    

        {/* <h2 className="text-2xl mb-5 heading text-white font-semibold leading-normal">
              {title}
          </h2> */}

        
<section className="text-gray-600 body-font bg-black"> 
  <div className="container py-24 mx-auto">
  <div className="flex flex-wrap">
  {playlists ? playlists.list.map((item, i) => (
  <div className="w-full lg:w-3/12 sm:w-1/2 px-2 py-2">
      
        
  <Link href={{
       pathname: "/video/"+item.id,
      }}
      className="hover:scale-110"
      // as={`video/${item.id}/${item.title}`}
      >
      <div className="Extra">
      <img
              alt="..."
              src={item.thumbnail_360_url}
              className="w-full align-middle rounded-t-lg cursor-pointer "
            />
            
              <h4 className="text-xl font-bold text-white line-clamp-2">
                {item.title}
              </h4>
              {/* <p className="text-md font-light mt-2 text-white">
                Putting together a page has never been easier than matching
                
              </p> */}
     
      </div>
      </Link>
    
  </div>

    )): null }
    </div>

    
   

    <div className="text-center mt-5 mb-5">
					{prevPage > 0 ?
          <button onClick={() => prev()}
          className="bg-yellow text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
          type="button"> Previous </button>
					: null } 
					<span>  </span>
					{playlists && playlists.list.length > 7 ?

            <button onClick={() => next()}
            className="bg-yellow text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
            type="button"> Next </button>

				
					: null }
					</div>

  </div>
</section>



     
      

     
    </>
  );
}



// // This gets called on every request
// export async function getServerSideProps(context) {
//   // console.log(context.query);
//   // Fetch data from external API
//   const res = await fetch('https://zap.migary.com/api/schedule.php')
//   const data = await res.json()
// // console.log(data);
//   // Pass data to the page via props
//   return { props: { data } }
// }




export default Search;

