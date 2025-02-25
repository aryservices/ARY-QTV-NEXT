import { useEffect, useRef } from "react";

import Hls from "hls.js";

import Plyr, { APITypes, PlyrProps, PlyrInstance } from "plyr-react";

const MyComponentVOD = (props) => {

  const ref = useRef<APITypes>(null);
  useEffect(() => {
    const loadVideo = async () => {
      const video = document.getElementById("plyr") as HTMLVideoElement;
      var hls = new Hls();
      hls.loadSource(props.link);
      hls.attachMedia(video);
      // @ts-ignore
      ref.current!.plyr.media = video;

      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        (ref.current!.plyr as PlyrInstance).play();
      });
    };
    loadVideo();
  });

  return (
    <Plyr
      id="plyr"
      options={{ volume: 0.1, autoplay: false, ads: { enabled: true, publisherId: "6216589748683079", tagUrl: "https://pubads.g.doubleclick.net/gampad/ads?iu=/67551462/ARYZap_PR&description_url=http%3A%2F%2Faryzap.com&tfcd=0&npa=0&sz=300x250%7C320x180%7C352x288%7C640x480%7C854x480%7C1280x720&max_ad_duration=60000&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=" } }}
      source={{} as PlyrProps["source"]}
      ref={ref}
    />
  )
};

export default function PlyrLive(props) {

  // const supported = Hls.isSupported();

  return (
    <div>
      <MyComponentVOD link={props.link} />
    </div>
  );
}
