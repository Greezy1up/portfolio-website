import AnimatedDiv from "../../AnimatedDiv";

export const CreateCard = ({ title, img, badge }) => {
  return (
    <AnimatedDiv className="relative">

      {/* Card background */}
      <div
        className="
          w-46 h-20
          md:w-64 md:h-28
          border border-neutral-800 bg-neutral-800/20
          rounded-xl
          "/>

      {/* Overlay container */}
      <div
        className="
          absolute left-5 top-1/2 -translate-y-1/2
          flex items-center gap-4
          ">

        {/* Image with shadow */}
        <img
          src={img}
          alt={title}
          className="
          w-9 
          md:w-12
          drop-shadow-md drop-shadow-black/50" />

        {/* Text + Badge */}
        <div className="
        flex flex-col
        gap-2
        ">

          <span className="
          sub-head font-bold
          text-sm md:text-base
          text-white
           ">
            {title}
          </span>

          {badge && (
            <div
              className={`
                paragraph font-bold text-[10px] md:text-xs
                w-fit
                px-2 py-1
                rounded-md
                ${badge === "master"
                  ? "text-amber-300 border border-amber-300"
                  : badge === "beginner"
                    ? "text-green-300 border border-green-300"
                    : badge === "intermediate"
                      ? "text-blue-300 border border-blue-300"
                      : ""
                }
              `}
            >
              {badge.charAt(0).toUpperCase() + badge.slice(1)}
            </div>
          )}

        </div>
      </div>
    </AnimatedDiv >
  );
};

