
const Chip = ({ title, img }) => {


return (


    <div className="
    flex items-center 
    h-12
    px-6 bg-neutral-900/30
    border border-neutral-700
    rounded-full
     text-sm 
     gap-2">

        <img src={img} className="h-6" />

      <span className="
      sub-head 
      text-white 
      font-bold 
      text-base 
      whitespace-nowrap
      ">{title}</span>

    </div>

)
}

export default Chip;