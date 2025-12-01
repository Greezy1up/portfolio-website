import Button from "../0-Hero/Button";
import Chip from "../2-About Me/Chip";
import WebsiteScr from "/src/assets/Projects/Website Screenshot_.png";
import REACTimg from '/src/assets/Statistics/DevCards/react.png';
import codeIMG from "/src/assets/Projects/codeIMG.png";

export const Developing = () => {
  return (
    <div className="flex justify-center">
    <div className=" flex flex-col items-center justify-center gap-16 bg-white/5 rounded-xl p-12 w-fit">
    
 <div
      className='
        flex flex-col gap-2
        items-center
        '>

        <img src={codeIMG} className='
        w-7 md:w-9 
        '/>

        <h2 className="
                header font-medium
                text-4xl md:text-5xl
                text-center
        ">Developing</h2>

      </div>

 {/* Make this modular + add carousel to images */}

      {/* Project 1 */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        
        {/* Image */}
        <div className="w-[480px] aspect-video rounded-xl overflow-hidden">
          <img
            src={WebsiteScr}
            className="w-full h-full object-cover border-1 border-neutral-500 rounded-xl"
          />
        </div>

        {/* Text Info */}
        <div className="w-[480px] rounded-xl p-4 flex flex-col gap-2">
          <h1 className="paragraph text-xl font-bold">Portfolio Website</h1>
          <Chip className="w-fit" img={REACTimg} title="React" />

          <span className="paragraph text-xs md:text-base whitespace-pre-line gray">
           <br />yo this my site gang this my site gang wyus
            yo this my site gang wyus
          </span>
 
<a
  href="https://github.com/Greezy1up/portfolio-website"
  target="_blank"
  rel="noopener noreferrer"
  className="flex flex-col items-center justify-center 
             w-36 h-12
             border border-neutral-800 bg-black/50
             transition-all duration-200 ease-in-out
             group-hover:bg-black/90 hover:cursor-pointer transform hover:scale-105
             rounded-xl"
>
  <h1 className="sub-head font-medium text-lg text-center text-white">
    Visit Repo
  </h1>
</a>

        </div>
      </div>


    </div></div>
  );
};
