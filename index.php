<?php
    // Fetch country code from server variables
    $country_code = $_SERVER["HTTP_CF_IPCOUNTRY"] ?? '';

    // Function to generate UUID
    function generateUUID()
    {
    $data = random_bytes(16);
    $data[6] = chr(ord($data[6]) & 0x0F | 0x40);
    $data[8] = chr(ord($data[8]) & 0x3F | 0x80);
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
    }

    
    // $validPeriod = 86400;
    // $nowTime = time();
    // $validTime = (int)$nowTime+$validPeriod;
    // $txTime = dechex($validTime);
    // $secretArydigital = 'arydigitalpk';
    // $pathArydigital = '/v1/0183ea2408f90b8ed5941a38bc72/0183ea24302d0b8ed5941a38bc75';
    // $md5Arydigital = md5($secretArydigital.$pathArydigital.$txTime, false);
	// $md5_dashArydigital = md5($secretArydigital.$txTime, false);
    // $urlArydigital = "https://arydigital.aryzap.com/$md5Arydigital/$txTime$pathArydigital/main.m3u8?uuid=".generateUUID();

    $validPeriod = 86400;
    $nowTime = time();
    $validTime = (int)$nowTime+$validPeriod;
    $txTime = dechex($validTime);
    $secretAryqtv = 'aryqtvpk';
    $pathAryqtv = '/v1/0183ea2a0eec0b8ed5941a38bc76/0183ea2a4e470b8ed5aa4d793457';
    $md5Aryqtv = md5($secretAryqtv.$pathAryqtv.$txTime, false);
	$md5_dashAryqtv = md5($secretAryqtv.$path_dash.$txTime, false);
    $urlAryqtv = "https://aryqtv.aryzap.com/$md5Aryqtv/$txTime$pathAryqtv/main.m3u8";

    // Fetch JSON data for Pakistan
    // $jsonPakistan = @file_get_contents('https://cdn.aryzap.com/api/cache_arynews.php?id=appPakistan');
    // $objPakistan = $jsonPakistan ? json_decode($jsonPakistan) : (object)['specific_post' => []];
    ?>



<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="ARY QTV Live | Watch ARY QTV Live Streaming">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>ARY QTV Live Streaming</title>

    <!-- <script>
        if (screen.width < 1140) {
        window.location.href = "https://live.arynews.tv/mobile/";
        }
    </script> -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap"
        rel="stylesheet">


        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
        <script>
        window.googletag = window.googletag || {cmd: []};
        googletag.cmd.push(function() {
            googletag.defineSlot('/67551462/Aryqtv-Live_LB', [[728, 90], [970, 250], [970, 90]], 'div-gpt-ad-1683113397251-0').addService(googletag.pubads());
            googletag.defineSlot('/67551462/Aryqtv-Live_Mrec', [300, 250], 'div-gpt-ad-1683113433913-0').addService(googletag.pubads());
            googletag.defineSlot('/67551462/Aryqtv-Live_LB', [320, 100], 'div-gpt-ad-1683113498548-0').addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });
        </script>


    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="ARY QTV Live Streaming" />
    <meta property="og:description" content="ARY QTV Live | Watch ARY QTV Live Streaming" />
    <meta property="og:url" content="http://live.aryqtv.tv/" />
    <meta property="og:site_name" content="ARY QTV" />
    <meta property="og:image" content="">
    <link rel="canonical" href="http://live.aryqtv.tv/" />
    <link rel="amphtml" href="http://live.aryqtv.tv/mobile" />
    <meta name="title" content="ARY QTV Live Streaming" />

    <?php include_once('./includes/scripts_new.php'); ?>
    <script src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"></script>

    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BroadcastEvent",
        "name": "ARY NEWS",
        "description": "Live.arynews.tv | ARY News Live | Watch ARY News | Live ARY Streaming",
        "isLiveBroadcast": true,
        "videoFormat": "HD",
        "startDate": "2024-02-07",
        "broadcastOfEvent": {
            "@type": "Event",
            "name": "Live: GENERAL ELECTIONS 2024 - LIVE UPDATES",
            "startDate": "2024-02-07",
            "location": {
                "@type": "Place",
                "name": "Pakistan"
            }
        }
    }
    </script>

    <style>
    body {
        font-family: "Red Hat Display", sans-serif;
        background: #f9f1da !important;
        color: #a6682f !important;
    }

    .header-menubar {
        background: #a6682f !important;
        color: white !important;

    }

    .stellarnav.light {
        background: #a6682f !important;
        color: white !important;
    }
    .stellarnav.light a {
        color: white !important;
    }
    .stellarnav .icon-close{
        filter: invert(1)
    }

    .section-title .title {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 0;
        /* text-align: center; */
        text-align: left;
        color: #af7033;
    }

    .section-title.section-title-3 {
        padding-left: 0px !important;
    }

    .section-title.section-title-3::before {
        display: none;
    }

    .livebtns {
        background: #b20000;
        margin: 10px 10px 10px 0px;
        padding: 10px 20px;
        text-align: center;
        box-shadow: 1px 1px 10px #bbb;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        font-size: 12px !important;
    }

    .pr {
        padding-right: 5px;
    }

    .pl {
        padding-left: 5px;
    }

    .livebtns:hover {
        background: white !important;
    }

    .live {
        margin: 0px;
        text-align: center !important;
        justify-content: center;
    }

    .aboutContent p {
        font-size: 20px;
        /* color: black; */
        font-weight: 400;
        line-height: 1.4;
    }

    .aboutContent span {
        font-weight: 800;
        font-size: 25px;
        line-height: 2;
    }

    .aboutContent {
        text-align: left;
    }

    .international-item .text-thumb .thumb {
        min-width: 180px;
        margin-right: 10px;
        margin-left: 0px;
    }

    .line-clamp2 {

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }


    .line-clamp {

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-bottom: 40px;
        color: black;
    }

    .readMore {
        margin-left: 180px !important;
        margin-top: -25px;
    }

    .international-item.international-3-item {
        background: #dddddd;
        border-radius: 8px;
        box-shadow: 0px 3px 6px rgba(23, 34, 43, 0.1);
        padding: 25px;
        margin-bottom: 10px;
    }

    .w-90 {
        width: 90%;
    }

    .widget-news-categories .categories-list ul {
        margin: 0 16px 0 0;
        padding: 0;
        list-style-type: none;
    }

    .widget-news-categories {
        border-top: 2px dashed #000000;
    }

    .row.social h3 {
        text-align: left;
    }

    .row.social a {
        margin: 0px 10px 0px 0px;
    }

    .row.social a img {
        width: 70%;
    }

    .international-item.international-3-item .title {
        color: black;
        font-size: 17px;
        font-weight: 700;
    }

    /* .hq-iframe{
            height:565px;

        } */

    .single-video {
        width: 100%;
        padding-top: 56.25%;
        height: 0;
        position: relative;
    }

    iframe.dailysingle {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .main-column {
        padding-left: 10px !important;
        padding-right: 10px !important;
    }

    .readMore .livebtns {
        margin-left: 10px !important;
    }

    @media only screen and (max-width: 768px) {
        .section-title .title {
            text-align: center !important;
        }

        .trending-3-area .trending-news-3 {
            padding: 0px !important;
        }

        .section-title.section-title-3 {
            padding-left: 0px !important;
        }

        .hq-iframe {
            ` height: 225px !important;

        }
    }

    /* Mobile specific styling */
    @media (max-width: 768px) {
        .livebtns {
            display: block;
            width: 100%;
            margin: 10px !important;
        }

        .col-md-3 {
            width: 100%;
        }

        .livebtns_div {
            display: block;
            width: 100%;

        }

        .mobile-center {
            text-align: center !important;
        }

        .appsDownload a {
            text-align: center !important;
        }

        .mobile-add {
            text-align: center !important;
        }
    }

    .appsDownload img {
        max-width: 300px !important;
    }

    .appsDownload a {
        text-align: left;
    }

    .mobile-add {
        text-align: left;
    }
    </style>
</head>

<body class="home-3-bg">

    <?php
      include_once('./includes/navigationnew.php'); 
    //   include_once('../includes/navigation.php'); ?>

    <section class="trending-3-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-12 text-center">
                    <div class="mt-40">
                        <?php
                if ($_SERVER['HTTP_USER_AGENT'] && preg_match('/Mobi/', $_SERVER['HTTP_USER_AGENT'])) {
                    ?>
                        <!-- /67551462/Aryqtv-Live_LB -->
                        <div id='div-gpt-ad-1683113498548-0' style='min-width: 320px; min-height: 100px;'>
                        <script>
                            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1683113498548-0'); });
                        </script>
                        </div>
                        <?php 
                } else {
                    ?>
                        <!-- /67551462/Aryqtv-Live_LB -->
                        <div id='div-gpt-ad-1683113397251-0' style='min-width: 728px; min-height: 90px;'>
                        <script>
                            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1683113397251-0'); });
                        </script>
                        </div>
                        <?php 
                }
            ?>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-8 pr">
                    <div class="mt-50">
                        <div class="row live text-center">
                            <div class="col-lg-12 col-md-12 main-column" id="changeTab">
                                <!-- <div class="section-title section-title-3">
                        <h3 class="title">ARY NEWS LIVE STREAMING</h3>
                    </div> -->
                                <div class="trending-news-3-item">
                                    <div class="trending-news-thumb">
                                        <div id="rmp"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>

                <div class="col-lg-4 pl-0 mobile-center">

                    <div class="ad mt-5 mb-3 mobile-add">
                        <?php
                        if ($_SERVER['HTTP_USER_AGENT'] && preg_match('/Mobi/', $_SERVER['HTTP_USER_AGENT'])) {
                        ?>
                        <!-- mobile  -->
                        <!-- /67551462/Aryqtv-Live_Mrec -->
                        <div id='div-gpt-ad-1683113433913-0' style='min-width: 300px; min-height: 250px;'>
                        <script>
                            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1683113433913-0'); });
                        </script>
                        </div>
                        <?php
                        }else {
                            ?>



                        <!-- /67551462/Aryqtv-Live_Mrec -->
                        <div id='div-gpt-ad-1683113433913-0' style='min-width: 300px; min-height: 250px;'>
                        <script>
                            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1683113433913-0'); });
                        </script>
                        </div>
                        <?php
                        }
                        ?>


                        <!-- <img src="https://tpc.googlesyndication.com/simgad/14301570182575713076"/> -->
                    </div>

                    <div class="align-items-center mt-3 appsDownload ad">
                        <!-- <div class="section-title text-center">
                    <h3 class="title">ARY NEWS APP DOWNLOAD</h3>
                    <p>Free download, iOS & Android App</p>
                </div> -->

                        <a href="https://apps.apple.com/pk/app/ary-qtv-app/id1330604385" target="_blank">
                            <img class="" src="./assets/images/apple.png" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.aryservices.qtv&hl=en"
                            target="_blank">
                            <img class="mt-3" src="./assets/images/android.png" />
                        </a>
                    </div>

                </div>


            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="mt-20">
                        <div class="row live">
                            <div class="col-lg-12 col-md-12">
                                <div class="aboutContent">
                                    <p>
                                    <span>About ARY QTV</span> ARY QTV, is the most prolific and respected Islamic channel in Pakistan. Ever since it as launched in September 2003, QTV has strived to provide our viewers with correct Islamic information and knowledge on religious affairs. The spiritually informative shows highlight the essence of Quranic teachings and messages which are extracted from the life of Holy Prophet Muhammad (P.B.U.H). Informative transmissions dedicated to the exploration of the Holy Quran and Hadees are featured on QTV. Qtv brings the most renowned scholars for discussions, debates and exceptional religious guides.
                                        <span>So, keep going LIVE with ARY QTV.</span>
                                    </p>

                                    <?php 
                                    include_once('./includes/showsnew.php'); 
                                    ?>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>

            </div>


        </div>
    </section>






    <!-- <section class="feature-area">
        <div class="container">
        <div class="row">
            <div class="col-lg-12">
            <div class="section-title text-center">
                <h3 class="title">ARY NEWS APP DOWNLOAD</h3>
                <p>Free dwonload, iOS & Android App</p>
            </div>
            <div class="d-flex align-items-center">

                <a class="text-center" href="https://apps.apple.com/pk/app/ary-zap/id1475260911" target="_blank">
                <img class="w-90" src="../assets/images/apple.png" />
                </a>
                <a class="text-center" href="https://play.google.com/store/apps/details?id=com.release.arylive&hl=en&pli=1"
                target="_blank">
                <img class="w-90" src="../assets/images/android.png" />
                </a>
            </div>
            </div>
        </div>

        </div>
    </section> -->

    <?php 
    include_once('./includes/footernew.php'); 
    // include_once('../includes/footer.php'); 
    ?>


    <script>
    const backupSrc = [{
        hls: 'https://7rgnwbg2npl8-hls-push.5centscdn.com/mp4/encoding/final%20high%20res/ZAP%20HIGH%20RES_Encoding.mp4/playlist.m3u8'
    }, {
        hls: 'https://7rgnwbg2npl8-hls-push.5centscdn.com/mp4/encoding/final%20high%20res/ZAP%20HIGH%20RES_Encoding.mp4/playlist.m3u8'
    }];
    const schedule = {
        // Preroll
        preroll: "https://tpc.googlesyndication.com/ima3vpaid?vad_format=linear&correlator=&adtagurl=https%3A%2F%2Fpubads.g.doubleclick.net%2Fgampad%2Flive%2Fads%3Fiu%3D%2F67551462%2FARYDigital-Live_640x480%26description_url%3Dhttps%253A%252F%252Flive.arydigital.tv%26tfcd%3D0%26npa%3D0%26sz%3D320x180%257C352x288%257C640x360%257C640x480%257C854x480%257C1280x720%26min_ad_duration%3D5000%26max_ad_duration%3D120000%26gdfp_req%3D1%26unviewed_position_start%3D1%26output%3Dvast%26env%3Dvp%26vpos%3Dpreroll%26vpmute%3D1%26vpa%3Dauto%26type%3Djs%26vad_type%3Dlinear",
        midrollRepeat: [600,
            'https://pubads.g.doubleclick.net/gampad/live/ads?iu=/67551462/ARYDigital-Live_640x480&description_url=https%3A%2F%2Farydigital.tv&vpmute=0&tfcd=1&npa=0&sz=320x180%7C352x288%7C640x360%7C640x480%7C854x480%7C1280x720&min_ad_duration=10000&max_ad_duration=30000&gdfp_req=1&output=vast&env=vp&unviewed_position_start=1&impl=s&correlator='
        ]
    };

    var settings = {
        src: {
            hls: "<?php echo $urlAryqtv; ?>"
        },
        backupSrc: backupSrc,
        autoHeightMode: true,
        autoHeightModeRatio: 1.7777777778,
        autoplay: true,
        preload: "auto",
        speed: true,
        gaTrackingId: "UA-61447232-1",
        contentMetadata: {
            title: "ARYQTV LIVE",
        },
        skin: "s1",
        skinAccentColor: "rgba(255, 0, 0, 1.00)",
        googleCast: true,
        googleCastReceiverAppId: "F2E0CAC7",
        googleCastAndroidReceiverCompatible: true,
        ads: true,
        adSchedule: schedule,
        // adTagUrl: "https://pubads.g.doubleclick.net/gampad/live/ads?iu=/67551462/ARYDigital-Live_640x480&description_url=https%3A%2F%2Flive.arydigital.tv&tfcd=0&npa=0&sz=320x180%7C352x288%7C640x360%7C640x480%7C854x480%7C1280x720&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear", 
        // adTagUrl: "https://pubads.g.doubleclick.net/gampad/live/ads?iu=/67551462/ARYDigital-Live_640x480&description_url=https%3A%2F%2Farydigital.tv&tfcd=0&npa=0&sz=320x180%7C352x288%7C640x360%7C640x480%7C854x480%7C1280x720&min_ad_duration=10000&max_ad_duration=30000&gdfp_req=1&output=vast&env=vp&unviewed_position_start=1&impl=s&correlator=", 
        adTagUrl: "https://pubads.g.doubleclick.net/gampad/live/ads?iu=/67551462/AryQtv-Live_PR&description_url=https%3A%2F%2Faryzap.com&tfcd=0&npa=0&sz=320x180%7C352x288%7C375x210%7C400x300%7C640x360%7C640x480%7C854x480%7C1280x720&min_ad_duration=10000&max_ad_duration=30000&gdfp_req=1&output=vast&env=vp&unviewed_position_start=1&impl=s&correlator=", 
        licenseKey: "eHp1dXRtb3Z5cEAxNDkyNDI4"
    };
    var elementID = "rmp";
    var rmp = new RadiantMP(elementID);
    rmp.init(settings);
    </script>
</body>

</html>