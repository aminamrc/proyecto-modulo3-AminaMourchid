import cover from '../images/cover.jpeg';
import user from '../images/user.jpeg';

function Card({ dataForm, avatar, userPhoto}) {
  return (
    <>
       <section className="preview">
          <img className="image" src= {avatar ||cover} alt="" />

          <section className="autor">
            <section className="info-project">
              <p className="subtitle">Personal Project Card</p>
              <hr className="line" />

              <h2 className="title" > {dataForm.project || "Elegant Workspace"} </h2>
              <p className="slogan"> {dataForm.slogan || "Exclusive designs"}  </p>
              <p className="desc"> {dataForm.desc ||  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Libero, delectus? Voluptates at hic aliquam porro ad suscipitharum laboriosam saepe earum doloribus aperiam, ullam culpaaccusantium placeat odit corrupti ipsum!"}
                
              </p>
              <section className="technologies">
                <p className="text"> {dataForm.tecno || "React JS, MongoDB"} </p>
              </section>
            </section>

            <section className="info-autor">
              <img className="image" src={ userPhoto || user} alt="" />
              <p className="job"> {dataForm.job  || "Full Stack Developer"} </p>
              <p className="name"> {dataForm.author  || "Emmelie Björklund"} </p>
            </section>
          </section>
        </section>

    </>
  )
}

export default Card
