import cover from '../images/cover.jpeg';
import user from '../images/user.jpeg';

function Card({ project, slogan, tecno, desc, nameAuthor, job}) {
  return (
    <>
       <section className="preview">
          <img className="image" src= {cover} alt="" />

          <section className="autor">
            <section className="info-project">
              <p className="subtitle">Personal Project Card</p>
              <hr className="line" />

              <h2 className="title" > {project} </h2>
              <p className="slogan"> {slogan}  </p>
              <p className="desc"> {desc}
                
              </p>
              <section className="technologies">
                <p className="text"> {tecno} </p>
              </section>
            </section>

            <section className="info-autor">
              <img className="image" src={user} alt="" />
              <p className="job"> {job} </p>
              <p className="name"> {nameAuthor} </p>
            </section>
          </section>
        </section>

    </>
  )
}

export default Card
