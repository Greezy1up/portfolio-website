import { Developing } from "./Developing";
import { VideoEditing } from "./VideoEditing";

export const Projects = ({ onClose, show }) => {
  return (
    
<section
  className={`fixed inset-0 items-center
              gap-10 bg-black/80 backdrop-blur-xs
              transition-all duration-500 ease-out
              ${show ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
>
  {/* Fixed close button */}
  <button
    onClick={onClose}
    className="fixed top-16 right-8 text-7xl text-white hover:text-red-400 hover:cursor-pointer"
  >
    ×
  </button>

  {/* Scrollable content */}
  <div className="flex flex-col gap-24 p-24 w-full items-center modal-scroll">
    
      <VideoEditing />
      <Developing />

  </div>
</section>


  );
};
