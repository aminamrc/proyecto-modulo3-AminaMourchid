import cover from '../images/cover.jpeg';
import user from '../images/user.jpeg';

function Card({ dataForm}) {
  return (
    <>
       <section className="preview">
          <img className="image" src= {cover} alt="" />

          <section className="autor">
            <section className="info-project">
              <p className="subtitle">Personal Project Card</p>
              <hr className="line" />

              <h2 className="title" > {dataForm.project} </h2>
              <p className="slogan"> {dataForm.slogan}  </p>
              <p className="desc"> {dataForm.desc}
                
              </p>
              <section className="technologies">
                <p className="text"> {dataForm.tecno} </p>
              </section>
            </section>

            <section className="info-autor">
              <img className="image" src={user} alt="" />
              <p className="job"> {dataForm.job} </p>
              <p className="name"> {dataForm.author} </p>
            </section>
          </section>
        </section>

    </>
  )
}

export default Card
