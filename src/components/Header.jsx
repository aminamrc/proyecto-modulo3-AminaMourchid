import logo from '../images/logo.png';


function Header () {
    return (
        <header className="header">
        <div className="nav"> 
        <p className="text"> <i className="fa-solid fa-laptop-code"> Proyectos Molones </i> </p>
        <img className="image" src= {logo} alt="" />
        </div>
        <div className="titles"> 
        <h1> Proyectos Molones </h1>
        <h3> Escaparate en linea para recoger ideas a traves de la tecnologia </h3>
        <button> Ver proyectos </button>
        </div>
      </header>
    )
}

export default Header