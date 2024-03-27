import { useEffect } from 'react'
import images from '../assets/images'
import svgImage from '../assets/svg/availability-svgrepo-com.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJsSquare, faPython, faGitAlt,
    faReact, faDocker, 
    faJava} from '@fortawesome/free-brands-svg-icons'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const About = () => {

    useEffect(() => {
        Aos.init({ duration: 2000})
    }, [])

    return (
        <section className="about container">

                <div className="about__text" id="skills" data-aos="fade-right">
                    <h2 className="subtitle">Mis habilidades</h2>
                    <p className="about__paragraph">Soy desarrollador Fullstack, con un enfoque principal en el desarrollo BackEnd, cuento con conocimientos en la parte Frontend como: <FontAwesomeIcon icon={faHtml5} style={{color: '#E34C26'}} /> Html, <FontAwesomeIcon icon={faCss3} style={{color: '#1C78C0'}} /> Css, <FontAwesomeIcon icon={faJsSquare} style={{color: '#F0DB4F'}} /> JavaScript, <FontAwesomeIcon icon={faReact} style={{color: '#165CAA'}} /> React y algo de diseño responsive.</p>
                    <p className="about__paragraph">Por la parte BackEnd: Hago usó de <FontAwesomeIcon icon={faPython} style={{color: '#306998'}} /> Python y como framework utilizó Django (Rest framework), lenguaje de consultas <FontAwesomeIcon icon={faCoins} style={{color: '#AAAAAA'}} /> SQL, tengo algunas bases de la metodología de Scrum y sobre <FontAwesomeIcon icon={faGitAlt} style={{color: '#BD2C00'}} /> Git. Actualmente estoy en el aprendizaje de .Net 8, <FontAwesomeIcon icon={faDocker} style={{color: '#0DB7ED'}}/> Docker y <FontAwesomeIcon icon={faJava} style={{color: '#BD2C00'}}/> Java con Springboot.</p>
                </div>

                <figure className="about__img" data-aos="fade-right">
                    <img src={images.img5} alt="image__2" className="about__picture" />
                </figure>

                <figure className="about__img about__img--left" data-aos="fade-left">
                    <img src={svgImage} alt="image__3" className="about__picture" />
                </figure>

                <div className="about__text" data-aos="fade-left">
                    <h2 className="subtitle">Sobre mi trabajo</h2>
                    <p className="about__paragraph">Me gusta tener una seguridad de realizar un trabajo concreto, además, de mantener un constante cambio entre versiones para que el diseño y su funcionalidad siempre se encuentren en un estado óptimo.</p>
                    <p className="about__paragraph">Normalmente me gusta trabajar con compañeros desarrolladores para tener un mejor punto de vista más agudo y estar al tanto de alguna anomalía dentro del software. He hecho diferentes proyectos como muestra de ello.</p>
                </div>

            </section>
    )
}