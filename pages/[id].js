/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MainSlider from "../components/Sliders/MainSlider";
import CardVideos from "../components/Cards/CardVideos";
import PlaylistSlider from "../components/Sliders/PlaylistSlider";
import Dailymotion from 'react-dailymotion';
import Head from "next/head";
import CardVideosGrid from "../components/Cards/CardVideosGrid";
import Mrec from "../components/Ads/Mrec";
import Leaderboard from "../components/Ads/Leaderboard";
import renderHTML from 'react-render-html';
import HTMLRenderer from 'react-html-renderer';



const SingleBlogid = (props) => {

  const datas = props.data;
  const [video, setVideo] = useState(datas);

  //   const [related, setRelated] = useState(props.data1.list[0].id);
  //console.log("Playlist ID:" + video.content);
  // const router = useRouter();
  // const { channel } = router.query;

  // const sanitizedHtmlContent = DOMPurify.sanitize(video.content);
  function htmlDecode(content) {
    let e = document.createElement('div');
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
  return (
    <>

      {video ? video.map((item, i) => (
        <>
          <Head>
            <title>{item.title}</title>
            <meta name="description" content={item.excerpt} />
            <meta name="title" content={item.title} />
            <meta property="og:title" content={item.title} />
            <meta property="og:description" content={item.excerpt} />
            <meta property="og:image" content={item.image} />
          </Head>



          <section className="header relative pt-16 items-start flex bg-black">

            <div className="container mx-auto items-start flex flex-wrap DekstopVerticalPadding">
              <div className="w-full md:w-12/12 lg:w-12/12 xl:w-12/12 px-4 mt-3">

                <center>
                  <Leaderboard />
                </center>
              </div>

              <div className="w-full sm:w-12/12 md:w-9/12 lg:w-9/12 xl:w-9/12 px-4 mt-5">



                <img src={item.image} className="w-full rounded-lg" alt={item.title} />
                <h3 className="text-xl font-bold text-white truncate mt-3">
                  {item.title}
                </h3>
                <div className="post__content SearchResult-body" dangerouslySetInnerHTML={{ __html: item.content }}>

                </div>
                {/* <div className="post__content SearchResult-body" dangerouslySetInnerHTML={{__html: item.content}}> */}
                {/* <HTMLRenderer
                  html={item.content}
                  components={{
                    h1: props => <Heading color="red" {...props} />,
                    a: Link,
                  }}
                /> */}
              </div>

              <div className="w-full sm:w-12/12 md:w-3/12 lg:w-3/12 xl:w-3/12 px-4 mt-5 mb-5">


                <center>
                  <Mrec/>
                  </center>
                <h2 className="text-2xl mb-5 heading text-white font-semibold leading-normal">
          Author
        </h2>
                <a className="inline-flex items-center" href={"/author/" + item.author.id}>
                    <img alt="blog" src={item.author.image} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                    <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-white">{item.author.name}</span>
                        {/* <span className="text-gray-400 text-xs tracking-widest mt-0.5">{item.author.description}</span> */}
                    </span>
                </a>
                <p className="text-white font-normal text-xs">{item.author.description}</p>
                {/* <img src={item.image} className="w-full rounded-lg" alt={item.title} /> */}
                {/* <h3 className="text-xl font-bold text-white truncate mt-3">
                  {item.pub_date}
                </h3>
                 */}
               
              </div>

            </div>

          </section>

          {/* <section className="pt-40 pb-40 relative bg-black">

            <div className="container mx-auto">

              <h2 className="text-2xl heading text-white font-semibold leading-normal">
                OTHER EPISODES
              </h2>
              <CardVideosGrid category={related} />
            </div>


          </section> */}
        </>


      )) : null}

    </>
  );
}



// This gets called on every request
export async function getServerSideProps(context) {
  console.log(context.query);
  const { id, channel } = context.query;
  console.log(channel);
  // alert(channel);
  // Fetch data from external API
  const res = await fetch('https://blogs.arydigital.tv/api/post.php?slug=' + id)
  const data = await res.json()

  //   const res1 = await fetch('https://api.dailymotion.com/video/' + id + '/playlists?owner=x1bx0w0')
  //   const data1 = await res1.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default SingleBlogid;