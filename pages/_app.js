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
         
          <title>ARY Digital - Watch Pakistani Dramas & Entertainment Shows Online</title>
          <meta name="description" content="Stream the latest ARY Digital Pakistani dramas, entertainment shows, and exclusive digital content online. Stay updated with trending episodes and celebrity news." />
          <meta name="keywords" content="ARY Digital, Pakistani Dramas, ARY Shows, Online Dramas, Latest Pakistani Dramas, ARY Entertainment, old dramas" />
          <meta name="author" content="ARY Digital" />
          <meta name="robots" content="index, follow" />
          
        
        
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="ARY Digital - Watch Pakistani Dramas & Entertainment Shows Online" />
          <meta name="twitter:description" content="Stream the latest ARY Digital Pakistani dramas, entertainment shows, and exclusive digital content online. Stay updated with trending episodes and celebrity news." />
          <meta name="twitter:image" content="/img/ary-qtv-logo.png" />
          <meta name="twitter:site" content="@ARYDigitalAsia" />
          <meta name="twitter:creator" content="@ARYDigitalAsia" />
        
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
