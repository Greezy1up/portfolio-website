import { Designing } from "./Designing";
import { Developing } from "./Developing";
import { VideoEditing } from "./VideoEditing";

export const Projects = ({ onClose, show }) => {
  return (
    <section
      className={`fixed inset-0 bg-black/80 backdrop-blur-xs
                  transition-all duration-500 ease-out
                  ${show ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
                  overflow-y-auto`}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-16 right-5 text-7xl md:text-8xl text-white hover:text-red-400 hover:cursor-pointer z-50"
      >
        ×
      </button>

      {/* Content */}
      <div className="flex flex-col gap-12 p-6 md:p-24 pt-16 pb-32 modal-scroll">
        <VideoEditing />
        <Developing />
        <Designing />
      </div>
    </section>
  );
};
