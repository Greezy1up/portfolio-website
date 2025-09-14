import AnimatedDiv from "../../AnimatedDiv";

const ContactForm = () => {



    return (

    
                <AnimatedDiv
                    className='
                    rounded-xl 
                    border border-neutral-800
                    bg-neutral-800/20 w-full
                    p-3'
                >
                        <form className="
                        flex flex-col 
                        gap-4
                        ">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="
                                sub-head font-normal 
                                bg-white text-black 
                                p-3 
                                rounded"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="
                                sub-head font-normal
                                 bg-white
                                  text-black 
                                  p-3 rounded"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="5"
                                className="sub-head font-normal bg-white text-black p-3 rounded"
                            ></textarea>
                            <button className="sub-head bg-red-800 px-6 py-3 rounded text-white font-semibold hover:bg-red-950 transition-colors hover:cursor-pointer">
                                Send Message
                            </button>
                        </form>
        

                </AnimatedDiv>


    )
}

export default ContactForm;
