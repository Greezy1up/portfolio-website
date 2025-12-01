import VideoPort from "/src/assets/Projects/VideoPort.webm";

export const VideoPortfolio = () => {
    return (

         <a
                  href="https://ytjobs.co/talent/profile/427403?r=650"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group border-1 border-neutral-500 rounded-xl
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
                    className="md:w-lg rounded-xl
                               transition-all duration-300 ease-in-out
                               filter brightness-50 blur-[2px]
                               group-hover:brightness-100 group-hover:blur-[0px]"
                  />
        
                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="flex items-center justify-center
                                    md:w-60 md:h-20 w-42 h-12
                                    border border-neutral-800 bg-black/50
                                    transition-all duration-200 ease-in-out group-hover:bg-black/90
                                    rounded-xl
                                    ">
                                        
                      <h1 className="sub-head font-semibold md:text-xl text-lg text-white">
                        Full Portfolio
                      </h1>

                    </div>


                  </div>
                </a>

    )
}