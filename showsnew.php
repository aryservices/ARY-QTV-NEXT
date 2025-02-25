<?php
$ch = curl_init();

// curl_setopt($ch, CURLOPT_URL, "https://videos.arydigital.tv/api/drama_playlists.php");
curl_setopt($ch, CURLOPT_URL, "https://node.aryzap.com/api/series/byCatID/Qtv%20Shows/PK");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");


$headers = array();
$headers[] = "Accept: application/json";
$headers[] = "Authorization: Bearer APIKEY";
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close ($ch);
//echo $result;
$results = json_decode($result);

// Check if the series key exists in the response
if (isset($results->series) && is_array($results->series)) {
    $seriesList = $results->series;
} else {
    echo "No series found.";
    $seriesList = [];
}
?>


  <section class="feature-area">
      <!-- <div class="container"> -->
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h3 class="title">Latest ARY QTV Programs</h3>
            </div>
          </div>
        </div>
        <div class="row feature-post-slider">
            <?php 
            //  foreach($row->videos as $rows){
                foreach ($seriesList as $series){
            ?>
             <div class="col-lg-3 col-sm-4">
            <div class="feature-post">
              <div class="feature-post-thumb">
                 <!-- <a href="https://videos.arydigital.tv/playlist/<?php echo  $rows->link; ?>"> -->
                 <!-- <a href="https://videos.arydigital.tv/playlist/<?php echo  $series->seriesDM; ?>"> -->
                 <a target="_blank" href="https://videos.aryqtv.tv/playlist/<?php echo  $series->seriesDM; ?>">
                <!-- <img src="<?php echo  $series->cover_url; ?>" alt="feature"> -->
                <img src="https://node.aryzap.com/public/<?php echo  $series->imagePoster; ?>" alt="feature">
                </a>
              </div>
              <!-- <div class="feature-post-content"><div class="post-meta"><div class="meta-categories"><a href="#">TECHNOLOGY</a></div><div class="meta-date"><span>March 26, 2020</span></div></div><h4 class="title"><a href="#">Best garden wing supplies for the horticu ltural</a></h4></div> -->
            </div>
          </div>
       <?php } ?>
          
        </div>
      <!-- </div> -->
    </section>