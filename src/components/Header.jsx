export const Header = () => {
    return (
        <header className="hero" id="index">
                <div className="container">
                    <nav className="nav">
                        <a href="#index" className="nav__items nav__items--cta">Inicio</a>
                        <a href="#about" className="nav__items">Sobre mi</a>
                        <a href="#proyects" className="nav__items">Proyectos</a>
                    </nav>

                    <section className="hero__container">
                        <div className="hero__texts">
                            <h1 className="hero__title">Hola soy Gojan S. Holguin Rincon<br />[FullStack Developer Junior]</h1>
                            <h2 className="hero__subtitle">Correo: gojan.1407holguin@gmail.com</h2>
                            <h2 className="hero__subtitle">Creando y Transformando ideas en una Realidad</h2>
                            <a href="#contact" className="hero__cta">Contáctame ahora</a>
                        </div>
                    </section>
                </div>
                <div className="hero__wave" style={{overflow: 'hidden'}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}><path d="M0.00,49.99 C239.47,172.20 138.45,-37.99 510.91,83.39 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#808080'}}></path></svg></div>
            </header>
    )
}