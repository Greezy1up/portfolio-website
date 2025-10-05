//Button.jsx


const Button = ({ title, img, href }) => {

  return (

      <a href={href} target="_blank" rel="noopener noreferrer">


      {/* Button */}
        <div className="
    w-42 h-12
    flex items-center justify-center
    rounded-xl
    transition duration-200 ease-in-out
    transform hover:scale-105 hover:-translate-y-1
    font-bold header text-xl md:text-2xl
    bg-gradient-to-r from-red-900 to-rose-600
    cursor-pointer
        ">
          <div className="
          flex flex-row 
          items-center 
          gap-2">
            <img src={img} className="h-5" />
            <h1 className="
            sub-head 
            font-bold 
            md:text-lg text-base
            ">{title}</h1>
          </div>
        </div>

      </a>

  );
};

export default Button;
