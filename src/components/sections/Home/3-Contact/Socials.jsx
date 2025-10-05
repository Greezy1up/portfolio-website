
const Socials = ({ img, link }) => {

    return (

           <div
                     className='w-full max-w-[400px] md:max-w-[600px] order-1 md:order-2'
                >

            <div className='flex flex-row gap-2.5 items-center'>

                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={img} className='h-auto w-[25px] hover:opacity-80 transition-transform duration-300 ease-in-out hover:scale-[1.2]' />
                </a>
                
            </div>


</div>




    )
}

export default Socials;