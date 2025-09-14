import SectionTitle from '../SectionTitle';
import ContactForm from './ContactForm';
import ContactCard from './ContactCard';
import Socials from './Socials';
import AnimatedDiv from '../../AnimatedDiv';

import contactIMG from '/src/assets/Contact/contact.png';
import emailIMG from '/src/assets/Contact/email.png';
import discordIMG from '/src/assets/Contact/discord.png';
import xIMG from '/src/assets/Contact/x.png';
import ytIMG from '/src/assets/Contact/yt.png';
import igIMG from '/src/assets/Contact/ig.png';
import gitIMG from '/src/assets/Contact/git.png';


export const Contact = () => {
    return (
        <section
            id="contact"
            className="
    min-h-screen
        flex flex-col
        items-center justify-center
        gap-10 px-4 
            "
        >
            {/* Title + Image */}

            <SectionTitle title="Contact" img={contactIMG} />

            {/* Full Content Wrapper */}
            <div className='
            flex flex-col md:flex-row-reverse  
            gap-8
            w-full max-w-4xl 
            items-center md:items-start
            '>

                <ContactForm />

                {/* Cards + Socials Wrapper */}
                <div className='
                    flex flex-col items-center md:items-start
                    gap-14
                     w-fit 
                      '>


                    {/* Email and Discord Cards */}
                    <div className="
                    flex flex-col
                    gap-8 
                ">

                        <ContactCard title="greezy1up@gmail.com" img={emailIMG} subtext="Email" />
                        <ContactCard title="greezy1up" img={discordIMG} subtext="Discord" />

                    </div>


                    {/* Social Links */}
                    <div className='
                    flex flex-col w-fit
                    gap-3 
                    items-center md:items-start 
                    
                     '>

                        <AnimatedDiv>

                            <span className='
                        sub-head font-bold 
                        text-lg
                        md:text-xl
                        '>
                                Follow Me:</span>

                        </AnimatedDiv>

                        <div className='
                        flex flex-row 
                        md:gap-3 gap-6 
                        items-center
                        
                         '>



                            <Socials img={xIMG} link="https://x.com/greezy1up" />
                            <Socials img={ytIMG} link="https://www.youtube.com/channel/UCApyQAuRHHSoteYJNPazjXg" />
                            <Socials img={gitIMG} link="https://github.com/Greezy1up" />
                            <Socials img={igIMG} link="https://www.instagram.com/greezy1up" />

                        </div>
                    </div>

                </div>



            </div>
        </section>
    );
};