import { useEffect } from 'react'
import images from '../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Presentation = () => {

    useEffect(() => {
        Aos.init({ duration: 2000})
    }, [])

    return (
        <section className="presentation container" id="about" data-aos="fade-down">
            <img src={images.img1} alt="image__1" className="presentation__picture" />
            <h2 className="subtitle">Mi nombre es Gojan Stiven Holguin Rincon</h2>
            <h3 className='subtitle__h3'>Fullstack Developer JR</h3>
            <p className="presentation__copy">Soy Tecnologo en Analisis y Desarrollo de Sitemas de Sistemas de Informacion(ADSI) del Sena.</p>
            <p className="presentation__copy">Actualmente me encuentro completando la ingeneria.</p>
            <a
                href="https://archive.org/download/hoja-de-vida-gojan-holgui-n-desarrollador/HOJA%20DE%20VIDA%20GOJAN%20HOLGUI%CC%81N%20-%20DESARROLLADOR.pdf"
                className="presentation__cv">
                    <FontAwesomeIcon icon={faFile}/> Descarga mi CV
            </a>
        </section>
    )
}