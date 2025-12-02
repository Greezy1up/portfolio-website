//Button.jsx


const Button = ({ title, img, href }) => {

  return (

      <a href={href} target="_blank" rel="noopener noreferrer">


      {/* Button */}
        <div   className="flex flex-col items-center justify-center 
             w-36 h-12
             border border-neutral-800 bg-black/50
             transition-all duration-200 ease-in-out
             group-hover:bg-black/90 hover:cursor-pointer transform hover:scale-105
             rounded-xl">
          <div className="
          flex flex-row 
          items-center 
          gap-2">
            <img src={img} className="h-5" />
            <h1 className="
sub-head font-medium text-base md:text-lg text-center text-white
            ">{title}</h1>
          </div>
        </div>

      </a>

  );
};

export default Button;
