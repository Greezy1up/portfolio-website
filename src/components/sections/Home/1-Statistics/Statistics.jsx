import React, { useEffect } from "react";
import sal from "sal.js";
import { ProdCards } from "./ProdCards";
import { DevCards } from "./DevCards";
import KPIcard from "./KPIcard";
import SectionTitle from "../SectionTitle";
import "sal.js/dist/sal.css";

import vidIMG from "/src/assets/Statistics/circle-video.png";
import eyeIMG from "/src/assets/Statistics/eye.png";
import likeIMG from "/src/assets/Statistics/like.png";
import blueprintIMG from "/src/assets/Statistics/blueprint.png";
import codeIMG from "/src/assets/Statistics/code.png";
import OSS from "/src/assets/Statistics/box.png";
import statsIMG from "/src/assets/Statistics/stats.png";

export const Statistics = () => {
  useEffect(() => {
    sal();
    
  }, []);

  return (
    <section
      className="
        min-h-screen
        flex flex-col
        items-center justify-center
        gap-10
      "
    >
      {/* Title + Image */}
      <SectionTitle title="Statistics" img={statsIMG} />

      {/* Container for frames + cards */}
      <div className="flex flex-col gap-9">
        {/* Top of frame text */}
        <div data-sal="slide-up" data-sal-duration="600" data-sal-delay="0" data-sal-easing="ease-out">
          <h1
            className="
              paragraph font-bold 
              text-md 
              text-xl md:text-2xl
              text-center
              mt-6
            "
          >
            Production
          </h1>
        </div>

        <KPIcard
          stats={[
            { img: vidIMG, alt: "Videos", end: 250, suffix: "+", label: "Videos" },
            { img: eyeIMG, alt: "Views", end: 275, suffix: "M+", label: "Views" },
            { img: likeIMG, alt: "Likes", end: 3, suffix: "M+", label: "Likes" },
          ]}
        />

        <ProdCards />

        {/* Top of frame text */}
        <div data-sal="slide-up" data-sal-duration="600" data-sal-easing="ease-out">
          <h1
            className="
              paragraph font-bold 
              text-md 
              text-xl md:text-2xl
              text-center
              mt-6
            "
          >
            Developing
          </h1>
        </div>

        <KPIcard
          stats={[
            { img: blueprintIMG, alt: "Projects", end: 1, suffix: "+", label: "Projects" },
            { img: OSS, alt: "OSS Commits", end: 0, suffix: "+", label: "OSS Commits" },
            { img: codeIMG, alt: "Lines of Code", end: 1, suffix: "K+", label: "Lines of Code" },
          ]}
        />

        <DevCards />
      </div>
    </section>
  );
};
