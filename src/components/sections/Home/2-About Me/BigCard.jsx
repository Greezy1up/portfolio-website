//BigCard.jsx

import SpotlightCard from '../../../SpotlightCard';
import AnimatedDiv from '../../AnimatedDiv';

let delayCounter = 0;

const BigCard = ({ icon, title, items }) => {
  delayCounter += 0.1;

  return (
    <AnimatedDiv
      transition={{ delay: delayCounter}}
    >

        <SpotlightCard
          spotlightColor="rgba(255, 255, 255, 0.1)"
        >

          <div className="
          p-4 md:w-56 w-50
          flex flex-col 
          md:gap-25 gap-8
          ">

            <img src={icon} className="w-6 md:w-8" />

            <div className="flex flex-col ">

              <h1 className="
              sub-head font-bold 
              md:text-xl text-lg
              ">
                {title}</h1>

              <ul className="
              paragraph
              text-xs md:text-sm
              list-disc pl-5
              ">

                {items.map((item, i) => <li key={i}>{item}</li>)}

              </ul>
            </div>

          </div>
        </SpotlightCard>

    </AnimatedDiv>
  );
};

export default BigCard;
