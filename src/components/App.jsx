import "../scss/App.scss";
// import cover from '../images/cover.jpeg';
// import user from '../images/user.jpeg';
import logo from '../images/logo.png';
import Header from './Header';
import Card from './Card';
import Form from './Form';
import Footer from "./Footer";
import { useState } from "react";

function App() {

const [project,setProject] = useState ("");
const [slogan,setslogan] = useState ("");
const [repo,setRepo] = useState ("");
const [demo,setDemo] = useState ("");
const [tecno,setTecno] = useState ("");
const [desc,setDesc] = useState ("");
const [nameAuthor,setNameAuthor] = useState ("");
const [job,setJob] = useState ("");


// const handleProject = (ev) => {
//   setProject(ev.target.value);
// };

  return (
  <>
  <body>
    <div className="container">
       <Header/>
      {/* <header className="header">
        <div className="nav"> 
        <p className="text"> <i className="fa-solid fa-laptop-code"> Proyectos Molones </i> </p>
        <img className="image" src= {logo} alt="" />
        </div>
        <div className="titles"> 
        <h1> Proyectos Molones </h1>
        <h3> Escaparate en linea para recoger ideas a traves de la tecnologia </h3>
        <button> Ver proyectos </button>
        </div>
      </header> */}
      <main className="main">
        <Card/> 
        {/* <section className="preview">   
          <img className="image" src= {cover} alt="" />

          <section className="autor">
            <section className="info-project">
              <p className="subtitle">Personal Project Card</p>
              <hr className="line" />

              <h2 className="title">Elegant Workspace</h2>
              <p className="slogan">Diseños Exclusivos</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Libero, delectus? Voluptates at hic aliquam porro ad suscipit
                harum laboriosam saepe earum doloribus aperiam, ullam culpa
                accusantium placeat odit corrupti ipsum!
              </p>
              <section className="technologies">
                <p className="text">React JS, MongoDB</p>
              </section>
            </section>

            <section className="info-autor">
              <img className="image" src={user} alt="" />
              <p className="job">Full Stack Developer</p>
              <p className="name">Emmelie Björklund</p>
            </section>
          </section>
        </section> */}
        <Form setProject={setProject} setslogan={setslogan} setRepo={setRepo} setDemo={setDemo}
        setTecno= {setTecno} setDesc={setDesc} setNameAuthor={setNameAuthor} setJob= {setJob} />
        {/* <section className="form">
          <h2 className="title">Información</h2>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="line" />
          </section>

          <fieldset className="project">
            <input
              className="input"
              type="text"
              placeholder="Nombre del proyecto"
              name="name"
              id="name"
            />
            <input
              className="input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
            />
            <input
              className="input"
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo"
            />
            <input
              className="input"
              type="text"
              placeholder="Demo"
              name="demo"
              id="demo"
            />
            <input
              className="input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
            />
            <textarea
              className="textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
            ></textarea>
          </fieldset>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre la autora</p>
            <hr className="line" />
          </section>

          <fieldset className="autor">
            <input
              className="input"
              type="text"
              placeholder="Nombre"
              name="autor"
              id="autor"
            />
            <input
              className="input"
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"
            />
          </fieldset>

          <section className="buttons-img">
            <button className="btn">Subir foto de proyecto</button>
            <button className="btn">Subir foto de autora</button>
          </section>
          <section className="buttons-img">
            <button className="btn-large" onClick="{handleClickCreateCard}">
              Crear Tarjeta
            </button>
          </section>

          <section className="card">
            <span className=""> La tarjeta ha sido creada: </span>
            <a href="" className="" target="_blank" rel="noreferrer"> </a>
          </section>
        </section> */}
      </main>
    </div>
    <div>
      <Footer/>
    {/* <footer>
        <img src={logo} alt="" />
      </footer> */}
      </div>
  </body>
  </>
  )

}

export default App
