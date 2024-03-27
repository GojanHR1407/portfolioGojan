import { useEffect } from 'react'
import images from '../assets/images'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Testimony = () => {

    useEffect(() => {
        Aos.init({ duration: 2000})
    }, [])

    return (
        <section className="testimony container" data-aos="flip-up">
                <h2 className="subtitle">¿Qué dicen de mi trabajo?</h2>

                <div className="testimony__grid">
                    <article className="testimony__item">
                        <div className="testimony__person">
                            <img src={images.img7} alt="image__9" className="testimony__img" />
                            <div className="testimony__text">
                                <h3 className="testimony__name">Irlant Oviedo</h3>
                                <p className="testimony__verification">Administrador de empresas</p>
                            </div>
                        </div>
                        <p className="testimony__review">Me parece un trabajo excelente, con detalles muy cuidado, como tener centrado y buen distribuido los espacios y colores muy elegantes y agradables para el ojo, me ve un lugar estable y eficaz.</p>
                    </article>

                    <article className="testimony__item">
                        <div className="testimony__person">
                            <img src={images.img8} alt="image__9" className="testimony__img" />
                            <div className="testimony__text">
                                <h3 className="testimony__name">Manuela Cardenas</h3>
                                <p className="testimony__verification">Estudiante de último grado</p>
                            </div>
                        </div>
                        <p className="testimony__review">En mi punto de vista he podido observar el desarrollo y estilo de Gojan, ya que es sus proyectos (los cuales incluyen páginas, aplicaciones y todo lo relacionado) ha demostrado alta profesionalidad y entendimiento de su trabajo. Siempre ha alcanzado y ha logrado sus propósitos al máximo de su capacidad y visión. Ha podido demostrar como es posible tener estilo minimalista y aun así poder obtener el interés de aquellos observando y leyendo. Con su estimado minimalista pude mantear su objetivo claro para que todos se sientan claros de lo que están leyendo, pero a la vez mantiene a estas personas entretenidas y atentos utilizando otras técnicas. Por ejemplo, empleando en color, tipo de letra y estilo. Siempre ha tenido una ejecución muy detallada y bien hecha de su trabajo, y el propósito de lo que significa su trabajo.</p>
                    </article>

                </div>
            </section>
    )
}