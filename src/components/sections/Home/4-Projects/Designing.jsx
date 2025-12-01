

import axy from '/src/assets/Projects/axy.png';
import bal from '/src/assets/Projects/balbino.png';
import ww from '/src/assets/Projects/WorldWide.png';
import eclipse from '/src/assets/Projects/eclipse.png';
import design from '/src/assets/Projects/design.png';

export const Designing = () => {

return (

<div className="flex justify-center">
      <div className="flex flex-col items-center justify-center gap-16 bg-white/5 rounded-xl p-12 w-fit">


          <div
      className='
        flex flex-col gap-2
        items-center
        '>

        <img src={design} className='
        w-7 md:w-9 
        '/>

        <h2 className="
                header font-medium
                text-4xl md:text-5xl
                text-center
        ">Designing</h2>

      </div>
      
        {/* YouTube embeds */}
        <div className="grid grid-cols-2 gap-12">
         <img src = {axy} className='w-[480px] h-auto rounded-xl border-1 border-neutral-500' />
         <img src = {bal} className='w-[480px] h-auto rounded-xl border-1 border-neutral-500' />
         <img src = {ww} className='w-[480px] h-auto rounded-xl border-1 border-neutral-500' />
         <img src = {eclipse} className='w-[480px] h-auto rounded-xl border-1 border-neutral-500' />
          
        </div>
<div>



  <div className="overflow-hidden rounded-xl transform transition-all duration-300 ease-in-out
                  hover:scale-105">
    <iframe
      src="https://www.behance.net/embed/project/93937921?ilo0=1"
      className="
        w-lg h-[380px]
        border-1 border-neutral-500
        transition-all duration-300 ease-in-out 
      "
      allowFullScreen
      loading="lazy"
      frameBorder="0"
      allow="clipboard-write"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </div>




        {/* Video */}

      </div>
    </div>
    </div>

)

}
