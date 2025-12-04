// CSS
import "./Summary.css"
// ÍCONES
import { HiOutlineAnnotation } from "react-icons/hi";

const Summary = () => {

  return (

    <div className="container-summary">

        <div className="group-summary">
            <h3><HiOutlineAnnotation className="icon-summary"/> RESUMO</h3>
            <p>Sou um desenvolvedor Front-End. Tenho conhecimento em HTML,CSS,Javascript e React js. Atualmente estou desenvolvendo projetos com essas tecnologias para sempre estar aprimorando minhas habilidades e buscando uma vaga no mercado de trabalho.</p>
        </div>

    </div>

  )
}

export default Summary