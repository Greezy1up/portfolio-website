import BookshelfModal from './BookshelfModal';
import BigCard from "./BigCard";
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
import expIMG from '/src/assets/About Me/experience.png';
import eduIMG from '/src/assets/About Me/edu.png';
import certIMG from '/src/assets/About Me/cert.png';



export const About = () => {
  return (
    <section
      id="about"
      className="
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
          w-fit
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
            items-center
            gap-6
          "
        >
          <div
            className="
              flex flex-col
              items-center
              gap-6
            "
          >
            {/* Paragraph */}
            <div
              className="
                max-w-4xl
                w-full
              "
            >
              <Paragraph />
            </div>

            {/* Cards */}
            <div
              className="
                flex flex-col
                md:flex-row
                gap-8
                w-full
              "
            >
              <BigCard
                icon={expIMG}
                title="Experience"
                items={["6+ years production", "1+ years developing"]}
              />
              <BigCard
                icon={eduIMG}
                title="Education"
                items={["6+ years production", "1+ years developing"]}
              />
              <BigCard
                icon={certIMG}
                title="Certificates"
                items={["6+ years production", "1+ years developing"]}
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div
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
