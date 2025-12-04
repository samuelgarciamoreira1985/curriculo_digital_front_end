// CSS
import "./Footer.css"
// ÍCONES
import { IoLogoWhatsapp } from "react-icons/io";
import { FaRegFolderOpen,FaLinkedinIn,FaSquareInstagram } from "react-icons/fa6";
import { FaGithub,FaFacebook,FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {

  return (

    <div className="container-footer">

        <div className="group-footer">

            <div className="details-footer-contact">
                <p className="title-contact">Contato</p>
                <p><FaPhoneAlt className="icon-contact"/> (14) 99828-7796</p>
                <p><IoLogoWhatsapp className="icon-contact"/> (14) 99828-7796</p>
                <p><MdEmail className="icon-contact"/> samuel02031985@gmail.com</p>
                <p className="info-city-uf"> Bauru - SP</p>
            </div>
            <div className="details-footer-social-media">
                <a href="https://samuelgarciamoreira1985.github.io/Portfolio-Front-End/" target="_blank" title="Portfólio"><FaRegFolderOpen className="icon-social-media"/></a>
                <a href="https://github.com/samuelgarciamoreira1985" target="_blank" title="GitHub"><FaGithub className="icon-social-media"/></a>
                <a href="https://www.linkedin.com/in/samuel-garcia-moreira-456285308/" target="_blank" title="Linkedin"><FaLinkedinIn className="icon-social-media"/></a>
                <a href="https://www.instagram.com/samuel02031985/" target="_blank" title="Instagram"><FaSquareInstagram className="icon-social-media"/></a>
                <a href="https://www.facebook.com/samuel.garciamoreira?locale=pt_BR" target="_blank" title="Facebook"><FaFacebook className="icon-social-media"/></a>
            </div>

        </div>

    </div>

  )

}

export default Footer