import AnimatedDiv from "../AnimatedDiv";


const SectionTitle = ({title, img}) => {

return (

      <AnimatedDiv
        initial={{ opacity: 0, x: 75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
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

      </AnimatedDiv>
);
}

export default SectionTitle