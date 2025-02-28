import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { fetchConfig, getConfig } from '../config';


class MyDocument extends Document {

  static async getInitialProps(ctx) {
    await fetchConfig();
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  
  render() {
      const config = getConfig();

    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/img/ary-qtv-logo.png" />
          <link rel="stylesheet" href="https://cdn.plyr.io/3.6.12/plyr.css" />
          <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${config.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${config.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              <script type="text/javascript">
                var sc_project=9555754;
                var sc_invisible=0;
                var sc_security="7455e167";
                var scJsHost = "https://";
                document.write("<sc"+"ript type='text/javascript' src='" +
                scJsHost+
                "statcounter.com/counter/counter.js'></"+"script>");
                </script>
                <noscript><div class="statcounter"><a title="Web Analytics
                Made Easy - Statcounter" href="https://statcounter.com/"
                target="_blank"><img class="statcounter"
                src="https://c.statcounter.com/9555754/0/7455e167/0/"
                alt="Web Analytics Made Easy - Statcounter"
                referrerPolicy="no-referrer-when-downgrade"></a></div></noscript>
          `,
            }}
          />
            <script src="https://cdn.aryzap.com/api/prebid.js" type="ef52158cd669839c4009cc30-text/javascript"></script>
          <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.googletag = window.googletag || {cmd: []};
              googletag.cmd.push(function() {
                googletag.defineSlot('/67551462/Aryqtv_videos_300x250', [[120, 600], [300, 250], [300, 600], [160, 600], [336, 280]], 'div-gpt-ad-1649415057320-0').addService(googletag.pubads());
            googletag.defineSlot('/67551462/Aryqtv_videos_728x90', [[728, 90], [320, 100], [970, 250], [320, 50], [970, 90]], 'div-gpt-ad-1649415264663-0').addService(googletag.pubads());
                googletag.pubads().collapseEmptyDivs();
                googletag.enableServices();
              });
  `,
            }}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/img/ary-qtv-logo.png"
          />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
            {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
            a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
            r.src=n;var u=t.getElementsByTagName(s)[0];
            u.parentNode.insertBefore(r,u);})(window,document,
            'https://sc-static.net/scevent.min.js');

            snaptr('init', '0ed39399-dd48-4fa9-95a2-a53c4a3dde57', {});

            snaptr('track', 'PAGE_VIEW');
          `,
            }}
          /> */}
        
        </Head>
        <body className="text-blueGray-700 custom-site-bg antialiased">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
