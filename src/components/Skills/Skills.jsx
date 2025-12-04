// CSS
import "./Skills.css"
// ÍCONES
import { FaBook,FaCss3Alt,FaGitAlt,FaPeopleArrows,FaDatabase } from "react-icons/fa";
import { FaReact,FaHtml5,FaUnity } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { MdEmojiPeople,MdOutlineSettingsAccessibility } from "react-icons/md";
import { SiDialogflow } from "react-icons/si";

const Skills = () => {

  return (

    <div className="container-skills">

        <div className="group-skills">
            <h3><FaBook  className="icon-skills"/> HABILIDADES</h3>
            <div className="details-skills">
                <p><FaReact className="icon-detail-skills"/> React js</p>
                <p><IoLogoJavascript className="icon-detail-skills"/> JavaScript</p>
                <p><FaHtml5  className="icon-detail-skills"/> HTML</p>
                <p><FaCss3Alt  className="icon-detail-skills"/> CSS</p>
                <p><FaGitAlt  className="icon-detail-skills"/> Git e GitHub</p>
                <p><FaDatabase className="icon-detail-skills"/> SQL</p>
                <p><FaUnity  className="icon-detail-skills"/> Unity 3D + C#</p>
                <p><SiDialogflow  className="icon-detail-skills"/> Boa Comunicação</p>
                <p><MdOutlineSettingsAccessibility  className="icon-detail-skills"/> Fácil Adaptabilidade</p>
                <p><FaPeopleArrows  className="icon-detail-skills"/> Trabalho em equipe</p>
                <p><MdEmojiPeople  className="icon-detail-skills"/> Liderança</p>
            </div>
        </div>

    </div>

  )
}

export default Skills