
import { VideoPortfolio } from "./VideoPortfolio";
import VideoPort from "/src/assets/Projects/VideoPort.webm";
import editIMG from "/src/assets/Projects/editIMG.png";

export const VideoEditing = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center gap-16 bg-white/5 rounded-xl p-12 w-fit">


          <div
      className='
        flex flex-col gap-2
        items-center
        '>

        <img src={editIMG} className='
        w-7 md:w-9 
        '/>

        <h2 className="
                header font-medium
                text-4xl md:text-5xl
                text-center
        ">Video Editing</h2>

      </div>
      
        {/* YouTube embeds */}
        <div className="grid grid-cols-2 gap-12">
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
          <iframe
            width="480"
            height="270"
            src="https://www.youtube.com/embed/2EN8sAXlUao?si=Qvrx08So8UA7Eozd"
            allowFullScreen
            className="rounded-xl border-1 border-neutral-500"
          />
          <iframe
            width="480"
            height="270"
            src="https://www.youtube.com/embed/lJ5XeeJhHkA?si=y-ITn2kWIT4zvc7F"
            allowFullScreen
            className="rounded-xl border-1 border-neutral-500"
          />
        </div>

        {/* Video */}
        <VideoPortfolio />

      </div>
    </div>
  );
};
