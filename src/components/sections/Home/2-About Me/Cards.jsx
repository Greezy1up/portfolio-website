import React, { useEffect } from "react";
import sal from "sal.js";
import BigCard from "./BigCard";

import expIMG from '/src/assets/About Me/experience.png';
import eduIMG from '/src/assets/About Me/edu.png';
import certIMG from '/src/assets/About Me/cert.png';


const Cards = () => {


      useEffect(() => {
    sal();
    
  }, []);

    return (

            <div
              className="
                flex flex-col
                md:flex-row
                gap-8
                w-full
              "
            >

              <div
              data-sal="slide-up"
      data-sal-duration="600"
      data-sal-delay="0"
      data-sal-easing="ease-in-out-back"
    >
              <BigCard
                icon={expIMG}
                title="Experience"
                items={["6+ years production", "1+ years developing"]}
              />
</div>

              <div
              data-sal="slide-up"
      data-sal-duration="600"
      data-sal-delay="100"
      data-sal-easing="ease-in-out-back"
    >
              <BigCard
                icon={eduIMG}
                title="Education"
                items={["6+ years production", "1+ years developing"]}
              />
</div>

              <div
              data-sal="slide-up"
      data-sal-duration="600"
      data-sal-delay="200"
      data-sal-easing="ease-in-out-back"
    >
              <BigCard
                icon={certIMG}
                title="Certificates"
                items={["6+ years production", "1+ years developing"]}
              />
              </div>
            </div>
    )

}

export default Cards;