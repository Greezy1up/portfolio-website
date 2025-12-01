

import axy from '/src/assets/Projects/axy.png';
import bal from '/src/assets/Projects/balbino.png';
import ww from '/src/assets/Projects/WorldWide.png';
import eclipse from '/src/assets/Projects/eclipse.png';
import design from '/src/assets/Projects/design.png';

export const Designing = () => {

return (

<div className="flex justify-center">
      <div className="flex flex-col items-center justify-center gap-8 md:gap-12 bg-white/5 rounded-xl p-12 w-fit">


          <div
      className='
        flex flex-col gap-
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
      
        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
         <img src = {axy} className='w-72 md:w-120 h-auto rounded-xl border-1 border-neutral-500' />
         <img src = {bal} className='w-72 md:w-120 h-auto rounded-xl border-1 border-neutral-500' />
         <img src = {ww} className='w-72 md:w-120 h-auto rounded-xl border-1 border-neutral-500' />
         <img src = {eclipse} className='w-72 md:w-120 rounded-xl border-1 border-neutral-500' />
          
        </div>
<div>



  <div className="overflow-hidden rounded-xl border-1 border-neutral-500  transform transition-all duration-300 ease-in-out
                  hover:scale-105">

    {/* Port */}            
    <iframe
      src="https://www.behance.net/embed/project/93937921?ilo0=1"
      className="
        w-72 md:w-120 md:h-96 h-64
        
        transition-all duration-300 ease-in-out 
      "
      allowFullScreen
      loading="lazy"
      frameBorder="0"
      allow="clipboard-write"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </div>




      </div>
    </div>
    </div>

)

}
