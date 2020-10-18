import React from 'react'; 
import './Landing.css';
import HeaderLanding from '../HeaderLanding/HeaderLanding';


const Landing = () => {
    return (
        <>

            <section className="landing-main-section">
                <HeaderLanding />
                <div className="hero-text-box">
                    <h1>Transforma Tú Vida <br></br>Aprende de las Culturas Ancestrales</h1>
                    <a className="btn btn-full" href="#">Regístrate</a>
                    <a className="btn btn-ghost" href="https://form.typeform.com/to/VOmPP1iL">Autodiagnóstico</a>
                </div>
            </section>


            <section className="section-services">
                <div className="row">
                    <h2>Nuestros Servicios &mdash; Círculos de crecimiento</h2>
                    <p className="long-copy">In at felis vel lacus condimentum pellentesque. Phasellus commodo finibus ante eu facilisis. Etiam quis magna nec purus aliquet fermentum. Tincidunt est mauris eget turpis facilisis!</p>
                </div>
                <div className="row">
                    <div className="col span-1-of-4 box">
                        <ion-icon name="paw-outline"></ion-icon>
                        <h3>Iniciación</h3>
                        <p>Sed pretium, eros ut molestie placerat, enim risus maximus magna, pellentesque tincidunt est mauris eget turpis. Suspendisse consectetur augue vel ante tincidunt rutrum.</p>
                    </div>
                    <div className="col span-1-of-4 box">
                        <ion-icon name="planet-outline"></ion-icon>
                        <h3>Sanación</h3>
                        <p>Duis consectetur commodo libero vel sodales. Sed ut ex ultricies, cursus neque non, vehicula ex. Mauris commodo, enim eu dapibus egestas, eros felis luctus ipsum.</p>
                    </div>
                    <div className="col span-1-of-4 box">
                        <ion-icon name="school-outline"></ion-icon>
                        <h3>Formación</h3>
                        <p>Sed pretium, eros ut molestie placerat, enim risus maximus magna, pellentesque tincidunt est mauris eget turpis. Suspendisse consectetur augue vel ante tincidunt rutrum.</p>
                    </div>
                    <div className="col span-1-of-4 box">
                        <ion-icon name="sad-outline"></ion-icon>
                        <h3>Consulta con Mamo</h3>
                        <p>Duis consectetur commodo libero vel sodales. Sed ut ex ultricies, cursus neque non, vehicula ex. Mauris commodo, enim eu dapibus egestas.</p>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Landing;
