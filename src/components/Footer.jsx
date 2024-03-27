import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 500})
    }, [])

    return (
        <footer className="footer" data-aos="zoom-out">
            <div className="container footer__grid">

                <nav className="nav nav--footer">
                    <a href="#index" className="nav__items nav__items--footer">Inicio</a>
                    <a href="#about" className="nav__items nav__items--footer">Sobre mi</a>
                    <a href="#skills" className="nav__items nav__items--footer">Mis habilidades</a>
                    <a href="#proyects" className="nav__items nav__items--footer">Proyectos</a>
                </nav>

                <section className="footer__contact">
                    <h3 className="footer__title">Contactame</h3>
                    <div className="footer__icons">

                        <span className="footer__container-icons">
                            <a className="fab footer__icon" href="https://www.linkedin.com/in/gojanstholguin/">
                            <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </span>

                        <span className="footer__container-icons">
                            <a className="fab footer__icon" href="https://github.com/GojanHR1407">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </span>

                    </div>
                </section>
            </div>

        </footer>
    )
}