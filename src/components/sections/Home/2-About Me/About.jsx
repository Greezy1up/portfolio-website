import React, { useEffect } from "react";
import sal from "sal.js";

import BookshelfModal from './BookshelfModal';
import Cards from "./Cards";
import Button from "./Button";
import Chip from "./Chip";
import Paragraph from "./Paragraph";
import SectionTitle from "../SectionTitle";
import GoogleFrame from "./GoogleFrame";

import ABOUTimg from '/src/assets/About Me/about.png';
import locIMG from '/src/assets/About Me/location.png';
import resumeIMG from '/src/assets/About Me/resume.png';
import resume from '/src/assets/About Me/resume.pdf';
import clockIMG from '/src/assets/About Me/clock.png';


export const About = () => {

  useEffect(() => {
    sal();
  }, []);

  return (
    <section
      id="about"
      className=" md:scroll-mt-0 scroll-mt-16
        min-h-screen
        flex flex-col
        items-center
        justify-center
        gap-10
        p-4
      "
    >
      <SectionTitle title="About Me" img={ABOUTimg} />

      {/* Main Content */}
      <div
        className="
          flex flex-col
          md:flex-row
          justify-center
          gap-8
        "
      >
        {/* Left Column */}

          <div
            className="
              flex flex-col
              gap-6
            "
          >

            <Paragraph />
            <Cards />

          </div>

        {/* Right Column */}
        <div
        data-sal="slide-up"
      data-sal-duration="600"
      data-sal-delay="300"
      data-sal-easing="ease-out"
          className="
            flex flex-col
            gap-8
          "
        >
          {/* Chips */}
          <div
            className="
              flex flex-col
              sm:flex-row
              gap-4
            "
          >
            <Chip title="Edmonton, Alberta" img={locIMG} />
            <Chip title="MDT Mountain Daylight Time" img={clockIMG} />
          </div>
          
          <GoogleFrame />

        </div>
      </div>

      {/* Resume + Bookshelf */}
      <div
      data-sal="slide-up"
      data-sal-duration="600"
      data-sal-delay="200"
      data-sal-easing="ease-in-out-back"
        className="
          w-fit
          flex flex-row
          gap-8
        "
      >
        <Button img={resumeIMG} title="Resume" href={resume} />
        <BookshelfModal />
        
      </div>

    </section>
  );
};
