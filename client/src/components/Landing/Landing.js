import React from 'react'; 
import './Landing.css';
import HeaderLanding from '../HeaderLanding/HeaderLanding';

import mountains1 from './assets/mountains1.png';
import mountains2 from './assets/mountains2.png';
import mountains3 from './assets/mountains3.png';
import mountains4 from './assets/mountains4.png';
import mountains5 from './assets/mountains5.png';
import mountains6 from './assets/mountains6.png';
import mountains7 from './assets/mountains7.png';
import mountains8 from './assets/mountains8.png';
import multielements from './assets/multielements.png';



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


            <section className="section-mountains">
                <ul className="mountains-showcase clearfix">
                    <li>
                        <figure className="mountains-photo">
                            <img src={mountains1} alt="mountains1" />
                        </figure>
                    </li>
                    <li>
                        <figure className="mountains-photo">
                            <img src={mountains2} alt="mountains2" />
                        </figure>
                    </li>
                    <li>
                        <figure className="mountains-photo">
                            <img src={mountains3} alt="mountains3" />
                        </figure>
                    </li>
                    <li>
                        <figure className="mountains-photo">
                            <img src={mountains4} alt="mountains4" />
                        </figure>
                    </li>
                </ul>

                <ul className="mountains-showcase clearfix">
                    <li>
                        <figure className="mountains-photo">
                            <img src={mountains5} alt="mountains5" />
                        </figure>
                    </li>
                    <li>
                        <figure className="mountains-photo">
                            <img  src={mountains6} alt="mountains6" />
                        </figure>
                    </li>
                    <li>
                        <figure className="mountains-photo">
                            <img src={mountains7} alt="mountains7" />
                        </figure>
                    </li>
                    <li>
                        <figure className="mountains-photo">
                            <img src={mountains8} alt="mountains8" />
                        </figure>
                    </li>
                </ul>

            </section>



            <section className="section-steps">
                <div className="row">
                    <h2>¿Cómo funciona? &mdash; Tierra, Agua, Aire y Fuego</h2>
                </div>

                    <div className="row">
                        <div className="col span-1-of-2 steps-box">
                            <img src={multielements} className="elements-screen" alt="multielements"/>
                        </div>
                        <div className="col span-1-of-2 steps-box">
                            <div className="works-step">
                                <div>1</div>
                                    <p>Tierra: Sed pretium, eros ut molestie placerat, enim risus maximus magna.  </p>
                            </div>
                            <div className="works-step">
                                    <div>2</div>
                                    <p>Aire: Sed pretium, eros ut molestie placerat, enim risus maximus magna.</p>
                            </div>
                            <div className="works-step">
                                <div>3</div>
                                <p>Fuego: Sed pretium, eros ut molestie placerat, enim risus maximus magna.</p>
                            </div>
                            <div className="works-step">
                                <div>4</div>
                                <p>Agua: Sed pretium, eros ut molestie placerat, enim risus maximus magna.</p>
                            </div>
                        </div>
                    </div>
            </section>

        </>
    )
}

export default Landing;
