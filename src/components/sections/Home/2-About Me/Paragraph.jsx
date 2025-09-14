// Paragraph.jsx

import AnimatedDiv from "../../AnimatedDiv";

const Paragraph = () => {

    return (

        <AnimatedDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1}} 
        >
            <p className="
            paragraph gray text-xs 
            md:text-base 
           leading-relaxed break-words whitespace-pre-wrap

            ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            {"\n"}
            {"\n"}

            This is a newline.

            Hey my name is Greezy, this is a test.
            {"\n"}
            {"\n"}

            This is a newline.
            

            </p>

        </AnimatedDiv>




    );

}

export default Paragraph;