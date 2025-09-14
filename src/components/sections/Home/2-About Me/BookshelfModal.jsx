import { useState } from 'react';
import bookshelfIcon from '/src/assets/About Me/library.png'; // Replace with actual icon
import AnimatedDiv from '../../AnimatedDiv';

const BookshelfModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <AnimatedDiv delay={0.2}>
      {/* Button */}
        <div className="
          w-40 h-12
          rounded-2xl 
                    bg-red-800/20
          border border-red-400/20
          flex items-center justify-center 
          transition duration-200 ease-in-out transform 
          hover:scale-105 hover:cursor-pointer
        " onClick={() => setIsOpen(true)}>
          <div className="
          flex flex-row 
          items-center 
          gap-2">
            <img src={bookshelfIcon} className="h-5" />
            <h1 className="
            sub-head font-bold md:text-lg text-base
            ">Bookshelf</h1>
          </div>
        </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="
          fixed inset-0 
          z-40
           bg-black/50 backdrop-blur-sm 
           flex items-center justify-center border-1 border-green-400
           "
          onClick={() => setIsOpen(false)} // Closes on outside click
        >
          <div
            className="bg-white border-1 border-red-400
            p-6 rounded-xl 
            shadow-2xl 
            relative  
            w-lg
            "
            onClick={(e) => e.stopPropagation()} // Prevents modal close on inner click
          >
            <h2 className="
            sub-head font-medium text-2xl
             text-black 
             mb-4
             ">
              What’s on My Bookshelf:
            </h2>

            <ul className="paragraph 
            list-disc pl-8 
            gray text-lg
            leading-relaxed
            ">
              <li>Item One</li>
              <li>Item Two</li>
              <li>Item Three</li>
              <li>Item Four</li>
              <li>Item Five</li>
              <li>Item Six</li>
              <li>Item Seven</li>
              <li>Item Eight</li>
              <li>Item Nine</li>
              <li>Item Ten</li>
              <li>Item Ten</li>
              <li>Item Ten</li>
              <li>Item Ten</li>
              <li>Item Ten</li>
              <li>Item Ten</li>
              <li>Item Ten</li>
            </ul>

            {/* X button */}

            <button
              onClick={() => setIsOpen(false)}
              className="
              absolute top-3 right-6
               text-gray-400 
               font-bold
                hover:text-gray-700 hover:cursor-pointer 
                text-5xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      </AnimatedDiv>
    </>

  );
};

export default BookshelfModal;
