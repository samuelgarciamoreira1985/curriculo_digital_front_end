// CSS
import "./Formations.css"
// ÍCONES
import { FaGraduationCap } from "react-icons/fa6";
// PDF
import c_git from "../../assets/imagens/certificates/c-Git.pdf"
import c_javascript from "../../assets/imagens/certificates/c-JavaScript.pdf"
import c_unip from "../../assets/imagens/certificates/c-Unip.pdf"
import c_unity_csharp from "../../assets/imagens/certificates/c-unity-csharp.pdf"
import c_system_csharp from "../../assets/imagens/certificates/c-system-csharp.pdf"
import c_Bit_Company from "../../assets/imagens/certificates/c-BitCompany.pdf"
import c_AdvanceCCI from "../../assets/imagens/certificates/c-AdvanceCCI.pdf"

const Formations = () => {

  return (

    <div className="container-formations">

        <div className="details-formations">
        <h3><FaGraduationCap className="icon-formations"/> FORMAÇÕES</h3>

            <div className="item-formations">
                <p>08/2025 - 20 Horas</p>
                <h4 style={{fontWeight:"600"}}>Plataforma de Cursos - Curso em Vídeo</h4>
                <p style={{fontSize:"1.2rem"}}>Git e GitHub</p>
                <a href={c_git} target="_blank">Ver Certificado</a>
            </div>
            <div className="item-formations">
                <p>06/2025 - 40 Horas</p>
                <h4 style={{fontWeight:"600"}}>Plataforma de Cursos - Curso em Vídeo</h4>
                <p style={{fontSize:"1.2rem"}}>JavaScript</p>
                <a href={c_javascript} target="_blank">Ver Certificado</a>
            </div>
            <div className="item-formations">
                <p>2019 - 2021</p>
                <h4 style={{fontWeight:"600"}}>Universidade Paulista - UNIP</h4>
                <p style={{fontSize:"1.2rem"}}>Análise e Desenvolvimento de Sistemas</p>
                <a href={c_unip} target="_blank">Ver Certificado</a>
            </div>
            <div className="item-formations">
                <p>10/2019 - 94,5 Horas</p>
                <h4 style={{fontWeight:"600"}}>Plataforma de Cursos - Udemy</h4>
                <p style={{fontSize:"1.2rem"}}>Jogos 2D com  Unity + C#</p>
                <a href={c_unity_csharp} target="_blank">Ver Certificado</a>
            </div>
            <div className="item-formations">
                <p>08/2019 - 5 Horas</p>
                <h4 style={{fontWeight:"600"}}>Plataforma de Cursos - Udemy</h4>
                <p style={{fontSize:"1.2rem"}}>Desenvolvimento de Sistemas com C#</p>
                <a href={c_system_csharp} target="_blank">Ver Certificado</a>
            </div>
            <div className="item-formations">
                <p>08/2002 - 16 Horas</p>
                <h4 style={{fontWeight:"600"}}>Bit Company</h4>
                <p style={{fontSize:"1.2rem"}}>Borland Delphi 5 - Básico</p>
                <a href={c_Bit_Company} target="_blank">Ver Certificado</a>
            </div>
            <div className="item-formations">
                <p>2001 - 96 Horas</p>
                <h4 style={{fontWeight:"600"}}>Escolas Advance CCI</h4>
                <p style={{fontSize:"1.2rem"}}>Windows, Word, Excel e Access</p>
                <a href={c_AdvanceCCI} target="_blank">Ver Certificado</a>
            </div>

        </div>

    </div>

  )

}

export default Formations