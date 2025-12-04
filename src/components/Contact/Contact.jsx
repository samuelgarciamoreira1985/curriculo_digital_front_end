// CSS
import "./Contact.css"
// ÍCONES
import { IoIosContacts,IoLogoWhatsapp } from "react-icons/io";
import { FaRegFolderOpen,FaLinkedinIn,FaSquareInstagram } from "react-icons/fa6";
import { FaGithub,FaFacebook,FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {

    /*
    - PORTFÓLIO
    - GITHUB
    - LINKEDIN
    - INSTAGRAM
    - FACEBOOK
    - TELEFONE
    - WATSZAP
    - EMAIL
    */ 

  return (

    <div className="container-contact">

        <div className="group-contact">
            <h3><IoIosContacts  className="icon-contact"/> CONTATO</h3>
            <div className="details-contact">
                <a href="https://samuelgarciamoreira1985.github.io/Portfolio-Front-End/" target="_blank"><FaRegFolderOpen className="icon-details-contact"/> Portfólio</a>
                <a href="https://github.com/samuelgarciamoreira1985" target="_blank"><FaGithub className="icon-details-contact"/> GitHub</a>
                <a href="https://www.linkedin.com/in/samuel-garcia-moreira-456285308/" target="_blank"><FaLinkedinIn className="icon-details-contact"/> Linkedin</a>
                <a href="https://www.instagram.com/samuel02031985/" target="_blank"><FaSquareInstagram className="icon-details-contact"/> Instagram</a>
                <a href="https://www.facebook.com/samuel.garciamoreira?locale=pt_BR" target="_blank"><FaFacebook className="icon-details-contact"/> Facebook</a>
                <p><FaPhoneAlt className="icon-details-contact"/> (14) 99828-7796</p>
                <p><IoLogoWhatsapp className="icon-details-contact"/> (14) 99828-7796</p>
                <p><MdEmail className="icon-details-contact"/> samuel02031985@gmail.com</p>
            </div>
        </div>

    </div>

  )
}

export default Contact