import "./Home-m.css";
import "./Home-t.css";
import "../assests/img";
import "./Home-d.css";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'



export default function App() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      {/* // <!-- ABOUT ME SECTION --> */}
      <div className='conteiner'>
        <article className="profile">
          <Header clicked={clicked} handleClick={handleClick} />
          {/* <!-- PROFILE SECTION --> */}
          <article className="name">
            <h2>Soy
              <span>Carlos            </span>
              <span>
                Palladino
              </span>
              Dev Full Stack </h2>
          </article>
          <p>empecé en el mundo de desarrolo web en 2022 , con un curso brindando por <b>Digital Hoouse</b>,que me permitio
            dar los
            primeros pasos en el mundo del desarrollo web.
          </p>
        </article>
        <picture id="image-conteiner-m">
          < img src="./images/foto-perfil.jpg" id="image-m" alt="foto" />
        </picture>
        {/* // <!-- HABILIDADES SECTION --> */}
        <div id="skills">
          <article id="hard-skills">
            <h3 id="tittle">Habilidades Fuertes </h3>
            <h4>Backend</h4>
            <b>NodeJs</b>
            <h4>Base De Datos</h4>
            <b>MySql</b>
            <h4>ORM</h4>
            <b>Sequelize</b>
            <h4>Frontend</h4>
            <b>HTML/CSS/JS</b>

            <p>Framework: <b>React Hooks</b></p>
            <h4>Herramientas</h4>
            <b>Git/GITHUB</b>

            <h4>Soft Skills</h4>
            <b>Scrum</b>
          </article>
          <article id="soft-skills">
            <h3 id="tittle">Habilidades blandas </h3>
            <h3>Análisis de problemas</h3>
            <h3>Aprendizaje ágil</h3>
            <h3>Colaboración</h3>
            <h3>Pensamiento lógico  </h3>
            <h3 >Planificación y organización  </h3>
            <h3 >Trabajo en equipo</h3>
          </article>
        </div>
        {/* // <!-- ABOUT PROJECTS SECTION --> */}


          <h3 id="tittle">MIS PROYECTOS</h3>




        <article className="projects">



         <figure className="img-container">
            <a href="https://github.com/CarlosPalladino/Mercado-Liebre"> <img src="./images/Mercado-liebre.png" id="img" /> </a>
            <figcaption>
            <h4>Mercado Liebre </h4>
            <p>Este fue el primer acercamiento al mundo web utilicé <b>HTML, CSS </b> aprendí también lo
              indispensable que es <b>Responsive</b></p>
            </figcaption>
          </figure>
          
          <figure className="img-container">
            <a href="https://github.com/Esteban-Somoza/Grupo_1_Sanitarios"><img src="./images/Sanitarios-Nicuesa.png" id="img" />
            </a>
          <figcaption>
            <h4> Sanitarios Nicuesa</h4>
            <p> Es un E-COMERCE hecho en el marco de aprendizaje de digital House, utilizamos </p>
            <p> <b> EJS,CSS,js</b>utilizamos la metodologia<b>SCRUM</b>para poder hacer las Daily Meeting
            </p>
          </figcaption>
          </figure>
          <figure className="img-container">
            <a href="https://github.com/CarlosPalladino/Mercado-Liebre"> <img src="./images/Mercado-liebre.png" id="img" /> </a>
            <figcaption>
            <h4>Mercado Liebre </h4>
            <p>Este fue el primer acercamiento que tuve al mundo web , utilicé <b>HTML, CSS </b> aprendí también lo
              indispensable que es <b>Responsive</b></p>
            </figcaption>
          </figure>
          
          <figure className="img-container">
            <a href="https://github.com/Esteban-Somoza/Grupo_1_Sanitarios"><img src="./images/Sanitarios-Nicuesa.png" id="img" />
            </a>
          <figcaption>
            <h4> Sanitarios Nicuesa</h4>
            <p> Es un E-COMERCE hecho en el marco de aprendizaje de digital House, utilizamos </p>
            <p> <b> EJS,CSS,js</b>utilizamos la metodologia<b>SCRUM</b>para poder hacer las Daily Meeting
            </p>
          </figcaption>
          </figure>
{/* 
          <figcaption>
            <h4>Jardines Burbuja</h4>
            <p> este proyecto esta hecho bajo las practicas de <b>ID FOR IDEAS</b>, esta cuenta con<b>base de
              datos</b>
              hecha relacional y su front-end hecho en el Framework <b>React</b> </p>
          </figcaption> */}

        </article>
      </div >
      {/* // <!-- CONTACT SECTION --> */}
      < article id="contact" >
        <h3 id="tittle">Contactame</h3>
        <p>Podes llenar el formulario y, a la brevedad ,me voy a contactar con vos</p>
        <article className="form-container">

          <form action="https://formsubmit.co/carlosezequielpalla@gmail.com" method="POST" target="_blank">

            <article className="row">
              <input type="text" placeholder="Nombre..." className="half-input" name="nombre" />
              <input type="email" placeholder="Email..." className="half-input" name="email" />
            </article>
            <input type="text" placeholder="Asunto..." className="half-input" name="asunto" />
            <textarea name="mensaje" id="" cols="" rows="" placeholder="Escribe el mensaje aquí..."
              className="msg-text" />
            <input type="submit" value="enviar" className="send-btn" />
            <input type="hidden" name="_captcha" value="false"></input>
          </form>
        </article>
      </article >
      <Footer />
  </>
  )
  }


