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
              <span>Carlos</span>
              <span>
                Palladino
              </span>
              Dev Full Stack </h2>
          </article>
          <p>empecé en el mundo de desarrolo web en 2022 , con un curso brindando por <b>Digital House</b>,que me permitio
            dar los
            primeros pasos en el mundo It. En la actualidad , desarrolo proyecto y me sigo formando en el área <b>backend</b>
          </p>
        </article>
        <picture id="image-conteiner-m">
          < img src="./images/foto-perfil.png" id="image-m" alt="foto" />

        </picture>
        {/* // <!-- HABILIDADES SECTION --> */}
        <div id="skills">
          <article id="hard-skills">
            <h3 id="tittle">Habilidades Fuertes </h3>
            <h4>Backend</h4>
            <b>C#</b>
            <p></p>
            <b>Node.Js</b>
            <p></p>
            <b>Python</b>
            <h4>Base De Datos</h4>
            <b>MySql</b>
            <p></p>
            <b>PostgreSql</b>
            <h4>ORM</h4>
            <b>Sequelize</b>
            <h4>Frontend</h4>
            <b>HTML/CSS/JS</b>
            <p>Framework: <b>React Hooks</b><p></p>
              <b>Django</b>
              <p></p>
              <b>.Net Framework</b>
            </p>
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

        <article className="projects" id="projects">
          <figure className="img-container">
            <a href="https://github.com/CarlosPalladino/Mercado-Liebre"> <img src="./images/Mercado-liebre.png" id="img" /> </a>
            <figcaption>
              <h4>Mercado Liebre </h4>
              <p>Este fue el primer acercamiento al mundo web. Utilicé <b>HTML, CSS </b>  hecho 
                <b>Responsive</b> siguiendo el metodo  Mobile Mobile</p>
            </figcaption>
          </figure>

          <figure className="img-container">
            <a href="https://github.com/Esteban-Somoza/Grupo_1_Sanitarios"><img src="./images/Sanitarios-Nicuesa.png" id="img" />
            </a>
            <figcaption>
              <h4> Sanitarios Nicuesa</h4>
              <p> Es un E-COMERCE hecho en el marco de aprendizaje de Digital House, utilizamos </p>
              <p> <b> EJS,CSS,js</b>utilizamos la metodologia<b>SCRUM</b>para poder hacer las Daily Meeting y asignarnos items a realizar
              </p>
            </figcaption>
          </figure>

          {/* <figure className="img-container">
            <a href="https://github.com/CarlosPalladino/learning-Django--CRUD"><img src="./images/listado.png" id="img" />
            </a>
            <figcaption>
              <h4> Jardines Burbuja </h4>
              <p> Proyecto desarrollado bajo el entorno de <b>ID for Ideas</b> realizado desde el lado back con <b>Node.js</b> y la parte front,con <b>React</b></p>

            </figcaption>
          </figure> */}
          <figure className="img-container">
            <a href="https://github.com/CarlosPalladino/learning-Django--CRUD"><img src="./images/listado.png" id="img" />
            </a>
            <figcaption>
              <h4> Listado</h4>
              <p> Practica realizado en el framework <b> Django</b>  y  <b> Bostrap5</b></p>

            </figcaption>
          </figure>
        </article>
      </div >
      {/* // <!-- CONTACT SECTION --> */}
      < article id="contact" >
        <h3 id="tittle">Contactame</h3>
        <p>Podes llenar el formulario y, a la brevedad ,Podemos charlar para realizar un proyecto en conjunto  </p>
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


