import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-transparent md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-2/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TRAFFIC"
                  statTitle="Entertainment"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-entertainment"
                  statIconColor="bg-red-500"
                  image="https://arynews.tv/wp-content/uploads/2021/10/video-white.png"
                />
              </div>
              <div className="w-full lg:w-2/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="News"
                  statTitle="News"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                  image="https://arynews.tv/wp-content/uploads/2021/10/newspaper-white.png"
                />
              </div>
              <div className="w-full lg:w-2/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Music"
                  statTitle="Music"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                  image="https://arynews.tv/wp-content/uploads/2021/10/mosque-white.png"
                />
              </div>
            
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Islamic"
                  statTitle="Islamic"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                  image="https://arynews.tv/wp-content/uploads/2021/10/lifestyles-white.png"
                />
              </div>

              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Health & Lifestyle"
                  statTitle="Health & Lifestyle"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                  image="https://arynews.tv/wp-content/uploads/2021/10/video-white.png"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
