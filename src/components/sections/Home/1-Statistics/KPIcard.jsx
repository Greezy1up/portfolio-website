import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import sal from "sal.js";
import "sal.js/dist/sal.css";

function KPIcard({ stats }) {
  const ref = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    sal();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartCount(true);
      },
      { rootMargin: "-200px" } // replicate previous margin
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-delay="0"
      data-sal-easing="ease-in-out-back"
    >
      {/* Background Frame */}
      <div
        className="
          h-56
          bg-red-900/10
          border border-rose-900/30
          rounded-xl
          relative justify-center items-center
        "
      >
        {/* Overlay Counter Container */}
        <div className="absolute inset-0 bottom-7 flex justify-center items-center px-2 gap-6 md:gap-40">
          {/* Stats */}
          {stats.map(({ img, end, suffix, label }, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-center gap-5 max-w-[100px] max-h-[100px]"
            >
              <img
                src={img}
                className="w-11 md:w-12 object-contain drop-shadow-md drop-shadow-black/50"
              />
              {startCount && (
                <CountUp
                  end={end}
                  suffix={suffix}
                  className="paragraph text-xl font-bold"
                />
              )}
              <h2 className="paragraph text-sm md:text-base gray text-wrap text-center md:whitespace-nowrap">
                {label}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KPIcard;
