

function Form({dataForm, setDataForm, fillForm}) {


  const handleInput= (ev)=> {
    const inputId= (ev.target.id)
    const inputValue=(ev.target.value)
    fillForm (inputId, inputValue)
  }

  return (

    <>
      <section className="form">
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
              name="project"
              id="project"
              value= {dataForm.project}
              onChange= {handleInput}
            />
            <input
              className="input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
              value={dataForm.slogan}
              onChange= {handleInput}
            />
            <input
              className="input"
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo"
              value={dataForm.repo}
              onChange= {handleInput}
            />
            <input
              className="input"
              type="text"
              placeholder="Demo"
              name="demo"
              id="demo"
              value= {dataForm.demo}
              onChange= {handleInput}
            />
            <input
              className="input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="tecno"
              value={dataForm.tecno}
              onChange= {handleInput}
            />
            <textarea
              className="textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
              value= {dataForm.desc}
              onChange= {handleInput}
            >

            </textarea>
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
              id="author"
              value= {dataForm.author}
              onChange= {handleInput}
            />
            <input
              className="input"
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"
              value= {dataForm.job}
              onChange= {handleInput}
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
        </section>
    </>
  )
}

export default Form
