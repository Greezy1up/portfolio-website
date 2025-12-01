
const Chip = ({ title, img }) => {


return (


    <div className="
    flex items-center 
    h-8 w-fit
    px-4 bg-neutral-900/30
    border border-neutral-700
    rounded-full
     text-sm 
     gap-2">

        <img src={img} className="h-5 " />

      <span className="
      sub-head 
      font-semibold
      text-white 
      text-sm 
      whitespace-nowrap
      ">{title}</span>

    </div>

)
}

export default Chip;