import { useState } from "react";
import Button from "./Button";
import bookshelfIcon from "/src/assets/About Me/library.png";

const BookshelfModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <div onClick={() => setIsOpen(true)}>
        <Button
          title="Bookshelf"
          img={bookshelfIcon}
        />
      </div>

      {/* Background */}
      {isOpen && (
        <div
          className="
            fixed inset-0 z-40
            bg-black/50 backdrop-blur-sm 
            flex items-center justify-center
          "
          onClick={() => setIsOpen(false)} // close on background click
        >
          
          {/* Modal */}
          <div
            className="
              bg-neutral-900
              p-8 rounded-2xl 
              shadow-black shadow-md
              relative md:w-xl w-sm
            "
            onClick={(e) => e.stopPropagation()} // prevent close on inner click
          >
            <h2 className="
              sub-head font-medium text-2xl text-white mb-4
            ">
              What's on My Bookshelf:
            </h2>

            <ul className="
              paragraph list-disc pl-8 text-gray-300 text-lg leading-relaxed
             overflow-y-auto
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
            </ul>

            {/* X button */}
            <button
              onClick={() => setIsOpen(false)}
              className="
                absolute top-2 right-4
                text-gray-400 font-bold
                hover:text-gray-200 transition-colors
                text-5xl
                cursor-pointer
              "
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookshelfModal;
