// CSS
import "./Experiences.css"
// ÍCONES
import { MdDoubleArrow } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";

const Experiences = () => {

  return (

    <div className="container-experiences">

        <div className="details-experiences">
        <h3><FaDiagramProject className="icon-experiences"/> EXPERIÊNCIAS</h3>
            <div className="item-details-experiences">
              <p className="title-item">Projeto: <span style={{fontWeight:"600"}}>Lunch King - Sistema para Lanchonetes <a href="#">Acessar Projeto</a></span></p>
              <p className="description-item"><MdDoubleArrow className="icon-details-experiences"/>Trata-se de um sistema web voltado para uso específico em lanchonetes, permitindo ao usuário realizar operações como novos cadastros, alterações, exclusões e gravações de registros, utilizando de um layout bonito e intuitivo. O sistema ainda conta com uma interface voltada para a realização de vendas, possibilitando o uso de carrinho de compras, geração de QrCode e impressão de Nota Fiscal para o cliente.</p>
              <p className="technology-item"><MdDoubleArrow className="icon-details-experiences"/>Tecnologias utilizadas: <span style={{fontWeight:"600"}}>React js, HTML5, CSS3 e JavaScript</span></p>
            </div>
            <div className="item-details-experiences">
              <p className="title-item">Projeto: <span style={{fontWeight:"600"}}>Mari-Artes - Site <a href="#">Acessar Projeto</a></span></p>
              <p className="description-item"><MdDoubleArrow className="icon-details-experiences"/>O site oferece uma interface fácil e intuitiva para a navegação, possibilitando o usuário ter acesso a preços e detalhes importantes de cada produto. O site concede também ao usuário a possibilidade de montar um carrinho de compras para assim realizar pedidos através das diversas formas de contato disponíveis no próprio site.</p>
              <p className="technology-item"><MdDoubleArrow className="icon-details-experiences"/> Tecnologias utilizadas: <span style={{fontWeight:"600"}}>React js, HTML5, CSS3 e JavaScript</span></p>
            </div>
        </div>

    </div>

  )
}

export default Experiences