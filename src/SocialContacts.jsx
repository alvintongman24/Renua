import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { BsPaypal } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

function SocialContacts() {
      return(
        <>
            <section className=" grid grid-cols-7 p-10 items-center font-extrabold text-sm md:text-[50px] text-center">
            <FaSquareInstagram />
            <FaFacebook />
            <FaFacebookMessenger />
            <BiLogoGmail />
            <BsPaypal />
            <FaWhatsapp />
            <BsTwitterX />
            </section>
        </>
      )
}



export default SocialContacts;