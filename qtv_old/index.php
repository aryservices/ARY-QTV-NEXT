<!doctype html>
<html lang="en"> 
<script>
let width = screen.width;
if(width < 768 ){
   window.location="https://live.aryqtv.tv/mobile/"; 
}
</script>
<?php
    
    $validPeriod = 86400;
    $nowTime = time();
    $validTime = (int)$nowTime+$validPeriod;
    $txTime = dechex($validTime);
   $secretAryqtv = 'aryqtvpk';
    $pathAryqtv = '/v1/0183ea2a0eec0b8ed5941a38bc76/0183ea2a4e470b8ed5aa4d793457';
    $md5Aryqtv = md5($secretAryqtv.$pathAryqtv.$txTime, false);
	$md5_dashAryqtv = md5($secretAryqtv.$path_dash.$txTime, false);
    $urlAryqtv = "https://aryqtv.aryzap.com/$md5Aryqtv/$txTime$pathAryqtv/main.m3u8";

   
?>



  <head>
    <!--====== Required meta tags ======-->
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!--====== Title ======-->
    <title>ARY QTV Live Streaming</title>

   <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
<script>
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
    googletag.defineSlot('/67551462/Aryqtv-Live_LB', [[728, 90], [970, 250], [970, 90]], 'div-gpt-ad-1683113397251-0').addService(googletag.pubads());
    googletag.defineSlot('/67551462/Aryqtv-Live_Mrec', [300, 250], 'div-gpt-ad-1683113433913-0').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
</script>


    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="ARY QTV Live Streaming" />
    <meta property="og:description" content="" />
    <meta property="og:url" content="http://live.aryqtv.tv/" />
    <meta property="og:site_name" content="ARY QTV" />
    <meta property="og:image" content="">
    <link rel="canonical" href="http://live.aryqtv.tv/" />
    <link rel="amphtml" href="http://live.aryqtv.tv/mobile" />
    <meta name="title" content="ARY QTV Live Streaming" />
    
    <?php include_once('includes/scripts.php'); ?>
  </head>
  <body class="home-3-bg">

    <!--====== HEADER PART START ======-->
        <?php include_once('includes/navigation.php'); ?>
    <!--====== HEADER PART ENDS ======-->
    <!--====== TRENDING 3 PART START ======-->
    <section class="trending-3-area">
      <div class="container custom-container">
         <div class="row">
             <div class="col-lg-12">
             <center>
                <div class="mt-40">
                    <!-- /67551462/Aryqtv-Live_LB -->
<div id='div-gpt-ad-1683113397251-0' style='min-width: 728px; min-height: 90px;'>
  <script>
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1683113397251-0'); });
  </script>
</div>

                </div>
                        </center>
                        </div>
              </div>  
        <div class="row">
          <div class="col-lg-9">
            <div class="trending-news-3 mt-50">
              
              <div class="row">
               
                <div class="col-lg-12 col-md-12">
                <div class="section-title section-title-3">
                <h3 class="title">ARY QTV Live Streaming</h3>
              </div>                 
                  <div class="trending-news-3-item">
                    <div class="trending-news-thumb">
                        <div id="rmp"></div>
                    </div>
                  </div>
                  <?php //include_once('includes/livebuttons.php'); ?>
                </div>
              </div>
             
            </div>
            
          </div>
          <div class="col-lg-3">
            <div class="ad mt-50">
           
               <!-- /67551462/Aryqtv-Live_Mrec -->
                <div id='div-gpt-ad-1683113433913-0' style='min-width: 300px; min-height: 250px;'>
                  <script>
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1683113433913-0'); });
                  </script>
                </div>
                
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
    <!--====== TRENDING 3 PART ENDS ======-->
    <!--====== FEATURE PART START ======-->
            <?php // include_once('includes/shows.php'); ?>
    <!--====== FEATURE PART ENDS ======-->
    
    <!--====== FOOTER STYLE 2 PART START ======-->
    
 
    <?php 
    include_once('includes/footer.php');
    ?>

  <script>
  var settings = {
      src: {
        hls: "<?php echo $urlAryqtv; ?>"
          
            }, 
        autoHeightMode: true, 
        autoHeightModeRatio: 1.7777777778, 
        autoplay: true, 
        preload: "auto", 
        speed: true, 
        gaTrackingId: "UA-61447232-1", 
        contentMetadata: 
        { 
        title: "ARYQTV LIVE", 
        poster: [""] }, 
        skin: "s1", 
        skinAccentColor: "rgba(255, 0, 0, 1.00)", 
        ads: true, 
        adTagUrl: "https://pubads.g.doubleclick.net/gampad/live/ads?iu=/67551462/AryQtv-Live_PR&description_url=https%3A%2F%2Faryzap.com&tfcd=0&npa=0&sz=320x180%7C352x288%7C375x210%7C400x300%7C640x360%7C640x480%7C854x480%7C1280x720&min_ad_duration=10000&max_ad_duration=30000&gdfp_req=1&output=vast&env=vp&unviewed_position_start=1&impl=s&correlator=", 
        licenseKey: "eHp1dXRtb3Z5cEAxNDkyNDI4" }; 
        var elementID = "rmp"; 
        var rmp = new RadiantMP(elementID); 
        rmp.init(settings); 
</script>


  </body>
</html>