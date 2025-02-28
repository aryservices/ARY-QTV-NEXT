import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bling as GPT } from "react-gpt";
import WindowSize, { useWindowSize } from "@reach/window-size";

export default function LeaderboardHome() {

  const { width, height } = useWindowSize();
  // console.log("screen width: " + width);
  return (
    <>
      <div>
        {width > 768 ?
          <>
          <div className="mt-3">
            {/* <h1>Dektop</h1> */}
            <GPT
              adUnitPath="/67551462/Aryqtv_videos_728x90"
              slotSize={[[970, 250], [750, 300], [950, 90], [728, 90]]}
              //slotSize={[[728, 90]]}
            />
            </div>

          </>
          :

          <>
            <div>
            {/* <h1>Mobile</h1> */}
            <GPT
              adUnitPath="/67551462/Aryqtv_videos_728x90"
              slotSize={[[320, 100], [320, 50]]}
            />
            </div>
          </>
        }
      </div>
    </>
  );
}
