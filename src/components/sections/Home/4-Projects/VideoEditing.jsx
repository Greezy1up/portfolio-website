
import VideoPort from "/src/assets/Projects/VideoPort.webm";

export const VideoEditing = () => {

    return(
        <div className=" flex flex-col items-center gap-12">
    <h1 className="header font-medium text-4xl md:text-5xl text-center">
      Video Editing
    </h1>

    {/* YouTube embeds */}
    <div className="flex flex-row gap-12 ">
      <iframe
        width="480"
        height="270"
        src="https://www.youtube.com/embed/lYBMyn1ZcS0"
        allowFullScreen
        className="rounded-xl border-1 border-neutral-500"
      />
      <iframe
        width="480"
        height="270"
        src="https://www.youtube.com/embed/294oshGeqNU?si=GIYdkn4AlWnxGhxR"
        allowFullScreen
        className="rounded-xl border-1 border-neutral-500"
      />
    </div>

    {/* Video */}
    <a
      href="https://ytjobs.co/talent/profile/427403?r=650"
      target="_blank"
      rel="noopener noreferrer"
      className="relative group w-lg border-1 border-neutral-500 rounded-xl
                 transition duration-200 ease-in-out cursor-pointer transform hover:scale-105"
    >
      <video
  src={VideoPort}
  autoPlay
  loop
  muted
  playsInline
  controls={false}
  preload="auto"
  className="w-lg rounded-xl
             transition-all duration-300 ease-in-out
             filter brightness-50 blur-[2px]
             group-hover:brightness-100 group-hover:blur-[0px]"
/>


      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center
                        w-46 h-20 md:w-60 md:h-20
                        border border-neutral-800 bg-black/50
                        transition-all duration-200 ease-in-out
                        group-hover:bg-black/90
                        rounded-xl">
          <h1 className="sub-head font-medium text-xl text-center text-white">
            Full Portfolio
          </h1>
        </div>
      </div>
    </a>
    </div>

    );
};