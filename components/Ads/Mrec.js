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
      <div className="mt-5">
        {width > 768 ?
          <>
            {/* <h1>Dektop</h1> */}
            <GPT
              adUnitPath="/67551462/ARYDigital_Lrec"
              slotSize={[[160, 600], [336, 280], [300, 600], [300, 250]]}
            />

          </>
          :

          <>
            {/* <h1>Mobile</h1> */}
            <GPT
              adUnitPath="/67551462/AryDigital-Mobile_Lrec"
              slotSize={[[336, 280], [300, 250], [320, 100], [300, 600], [320, 50]]}
            />
          </>
        }
      </div>
    </>
  );
}
