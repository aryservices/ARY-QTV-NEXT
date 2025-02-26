import React, { createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from "../components/PageChange/PageChange.js";
import { fetchConfig, getConfig } from "../config";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css";
import '../styles/custom.css';
import Footer from "../components/Footers/Footer";
import IndexNavbar from "../components/Navbars/IndexNavbar.js";

// Create a Context for Config
export const ConfigContext = createContext(null);

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

const MyApp = ({ Component, pageProps }) => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        await fetchConfig(); // Fetch config
        setConfig(getConfig()); // Retrieve and set config
      } catch (error) {
        console.error("Failed to load config:", error);
        setConfig({}); // Set empty config in case of failure
      }
    };

    loadConfig(); // Call async function
  }, []);

  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <ConfigContext.Provider value={config}>
      <React.Fragment>
         <Head>
          {/* Primary Meta Tags */}
         
          <title>ARY QTV | 1st Religious Channel from Pakistan</title>

          {/* <!-- Primary Meta Tags --> */}
          <meta name="description" content="Stream ARY QTV, the first religious channel from Pakistan. Explore Islamic programs, Naats, Hadeeth, and Tilawat-e-Quran with renowned scholars." />
          <meta name="keywords" content="ARY QTV, Religious Channel, Naats, Hadeeth, Tilawat-e-Quran, Pakistan" />
          <meta name="author" content="ARY QTV" />
          <meta name="robots" content="index, follow" />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://aryqtv.tv/" />
          <meta property="og:title" content="ARY QTV | 1st Religious Channel from Pakistan" />
          <meta property="og:description" content="Stream ARY QTV, the first religious channel from Pakistan. Explore Islamic programs, Naats, Hadeeth, and Tilawat-e-Quran with renowned scholars." />
          <meta property="og:image" content="https://aryqtv.tv/img/ary-qtv-logo.png" />
          <meta property="og:site_name" content="ARY QTV" />

          {/* <!-- Twitter Card --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="ARY QTV – Religious Programs, Naats & Quran" />
          <meta name="twitter:description" content="Watch ARY QTV for Islamic programs, Naats, Hadeeth, Tilawat-e-Quran, and more. Stay enlightened with authentic teachings by renowned scholars." />
          <meta name="twitter:image" content="https://aryqtv.tv/img/ary-qtv-logo.png" />
          <meta name="twitter:site" content="@ARYQTV" />
          <meta name="twitter:creator" content="@ARYQTV" />


        
          {/* Favicon */}
          <link rel="icon" type="image/png" href="/img/ary-qtv-logo.png" />
        
        </Head>
        

        <IndexNavbar fixed />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </React.Fragment>
    </ConfigContext.Provider>
  );
};

export default MyApp;
