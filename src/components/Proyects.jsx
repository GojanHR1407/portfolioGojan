import { useEffect } from 'react'
import images from '../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Proyects = () => {

    useEffect(() => {
        Aos.init({ duration: 1500})
    }, [])

    return (
        <section className="proyects" id="proyects" data-aos="zoom-in">
                <div className="container">
                    <h2 className="subtitle">My proyects</h2>
                    <div className="proyects__grid">

                        <article className="proyects__item">
                            <img src={images.img6} alt="image__4" className="proyects__img" />
                            <a href="https://github.com/Ebanisteria-Leon/Ebanisteria_Django" className="proyects__hover">
                                <h2 className="proyects__title">Ebanisteria Leon (API Rest)</h2>
                                <i className="far proyects__icon">
                                    <FontAwesomeIcon icon={faFileAlt} />
                                </i>
                            </a>
                        </article>

                        <article className="proyects__item">
                            <img src={images.img4} alt="image__5" className="proyects__img" />
                            <a href="https://github.com/GojanHolguin/Bookwedit" className="proyects__hover">
                                <h2 className="proyects__title">Bookwedit</h2>
                                <i className="far proyects__icon">
                                    <FontAwesomeIcon icon={faFileAlt} />
                                </i>
                            </a>
                        </article>

                        <article className="proyects__item">
                            <img src={images.img2} alt="image__6" className="proyects__img" />
                            <a href="https://jhady-app.herokuapp.com/" className="proyects__hover">
                                <h2 className="proyects__title">Jhady App</h2>
                                <i className="far proyects__icon">
                                    <FontAwesomeIcon icon={faFileAlt} />
                                </i>
                            </a>
                        </article>

                        <article className="proyects__item">
                            <img src={images.img3} alt="image__4" className="proyects__img" />
                            <a href="https://github.com/GojanHolguin/tiendasWafles" className="proyects__hover">
                                <h2 className="proyects__title">Chiki&aposs Wafless</h2>
                                <i className="far proyects__icon">
                                    <FontAwesomeIcon icon={faFileAlt} />
                                </i>
                            </a>
                        </article>

                        <article className="proyects__item">
                            <img src={images.img9} alt="image__8" className="proyects__img" />
                            <a href="https://github.com/GojanHolguin/fetchApiRAM" className="proyects__hover">
                                <h2 className="proyects__title">API Rick and Morty</h2>
                                <i className="far proyects__icon">
                                    <FontAwesomeIcon icon={faFileAlt} />
                                </i>
                            </a>
                        </article>

                    </div>
                </div>
            </section>
    )
}