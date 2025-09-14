import AnimatedDiv from "../AnimatedDiv";


const SectionTitle = ({title, img}) => {


return (

    <div
      data-sal="slide-left"
      data-sal-duration="600"
      data-sal-delay="0"
      data-sal-easing="ease-in-out-sine"
      className='
        flex flex-col 
        items-center
        '>

        <img src={img} className='
        w-7 md:w-9 
        '/>

        <h2 className="
                header font-medium
                text-4xl md:text-5xl
                text-center
        ">{title}</h2>

      </div>
);
}

export default SectionTitle