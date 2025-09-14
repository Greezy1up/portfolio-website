import AnimatedDiv from "../../AnimatedDiv";


const ContactCard = ({title, img, subtext}) => {


return (

    <AnimatedDiv
                    className="
                    relative 
                    w-full 
                    md:w-[350px] h-[90px] 
                    flex items-center 
                    overflow-hidden 
                    rounded-xl 
                    border border-neutral-800
                     bg-neutral-800/20 
                     px-6 gap-4
                     "
                >


      <div className="flex flex-col items-center">
        <img src={img} className="w-6" alt="Email" />
        <span className="paragraph gray font-medium text-base">{subtext}</span>
      </div>

      <h1 className="
      sub-head font-bold 
      text-lg md:text-xl
       text-white">
        {title}
      </h1>


</AnimatedDiv>
)
}

export default ContactCard;