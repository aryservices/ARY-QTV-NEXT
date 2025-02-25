<?php
// get_stream.php

// Check if the 'stream' parameter is set
if (isset($_GET['stream'])) {
    $stream = $_GET['stream'];

    // Depending on the stream type, generate the corresponding content
    if ($stream === 'hq') {
        // HQ Stream Content
        $content = '
            
            <div class="trending-news-3-item">
                <div class="trending-news-thumb single-video">
                    <iframe width="100%" class="hq-iframe dailysingle" src="https://www.youtube.com/embed/sUKwTVAc0Vo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class="section-title section-title-3">
                <h3 class="title">ARY NEWS HQ LIVE STREAMING</h3>
            </div>

            <div class="row justify-content-left text-center col-12 d-flex flex-row">
                <div class="livebtns_div"><b> <a class="livebtns" href="#" data-stream="stream1">STREAM 1</a></b></div>
                <div class="livebtns_div"><b> <a class="livebtns" href="#" data-stream="audio">AUDIO</a></b></div>
                <div class="livebtns_div"><b> <a class="livebtns" href="https://urdu.arynews.tv" target="_blank">URDU WEBSITE</a></b></div>
                <div class="livebtns_div"><b><a class="livebtns" href="https://arynews.tv" target="_blank">ENGLISH WEBSITE</a></b></div>
            </div>
        ';
    } elseif ($stream === 'audio') {
        // Audio Stream Content
        $content = '
          
            <div class="trending-news-3-item">
                <div class="trending-news-thumb">
                    <div id="rmp"></div>
                </div>
            </div>
              <div class="section-title section-title-3">
                <h3 class="title">ARY NEWS AUDIO LIVE STREAMING</h3>
            </div>
            <div class="row justify-content-left text-center col-12 d-flex flex-row">
                <div class="livebtns_div"><b> <a class="livebtns" href="#" data-stream="stream1">STREAM 1</a></b></div>
                <div class="livebtns_div"><b> <a class="livebtns" href="#" data-stream="hq">HQ STREAM</a></b></div>
                <div class="livebtns_div"><b> <a class="livebtns" href="https://urdu.arynews.tv" target="_blank">URDU WEBSITE</a></b></div>
                <div class="livebtns_div"><b><a class="livebtns" href="https://arynews.tv" target="_blank">ENGLISH WEBSITE</a></b></div>
            </div>
        ';
    } elseif ($stream === 'stream1') {
        // Stream1 Content
        $content = '
            
            <div class="trending-news-3-item">
                <div class="trending-news-thumb">
                    <div id="rmp"></div>
                </div>
            </div>
            <div class="section-title section-title-3">
                <h3 class="title">ARY NEWS LIVE STREAMING</h3>
            </div>
            <div class="row justify-content-left text-center col-12 d-flex flex-row">
                <div class="livebtns_div"><b> <a class="livebtns" href="#" data-stream="hq">HQ STREAM</a></b></div>
                <div class="livebtns_div"><b> <a class="livebtns" href="#" data-stream="audio">AUDIO STREAM</a></b></div>
                <div class="livebtns_div"><b> <a class="livebtns" href="https://urdu.arynews.tv" target="_blank">URDU WEBSITE</a></b></div>
                <div class="livebtns_div"><b><a class="livebtns" href="https://arynews.tv" target="_blank">ENGLISH WEBSITE</a></b></div>
            </div>
        ';
    } else {
        // Invalid stream type
        http_response_code(400);
        echo "Invalid stream type.";
        exit;
    }

    // Return the content
    echo $content;
} else {
    // 'stream' parameter not set
    http_response_code(400);
    echo "No stream type specified.";
}
?>
