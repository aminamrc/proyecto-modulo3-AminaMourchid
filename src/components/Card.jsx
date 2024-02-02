import cover from '../images/cover.jpeg';
import user from '../images/user.jpeg';

function Card() {
  return (
    <>
       <section className="preview">
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
        </section>

    </>
  )
}

export default Card
