// CSS
import "./Header.css"
// IMAGENS
import photo_dev from "../../assets/imagens/photo_dev.png"

const Header = () => {

  return (

    <div className='container-header'>
        
        <div className="group-header">
            <img src={photo_dev} alt="foto do dev" />
            <div className="details-header">
                <h2>Olá, eu sou</h2>
                <h1>Samuel Garcia Moreira</h1>
                <p>DESENVOLVEDOR FRONT-END</p>
            </div>
        </div>

    </div>

  )

}

export default Header