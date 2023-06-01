import React from "react";
import photo from '../../img/photo.png'
import './About.css'
import { TextButton } from "../TextButton/TextButton";

export default function About() {
    return (
        <section className="welcome-section" id="welcome">
            <div className="section-description">
                <div className="description">
                    <div className="content-description">
                        <span className="description-subtitle">Hola</span>
                        <h1>Soy &lt;Karla/&gt; </h1>
                        <span className="description-subtitle"> Front-end Web Developer</span>
                    </div>
                    <p className="description-about">
                        Me gusta estar en constante aprendizaje , experimentando y adquiriendo nuevas habilidades
                        de desarrollo profesional y personal. Mi experiencia en el sector jurídico me ha
                        permitido desarrollar habilidades blandas las cuales han sido de gran
                        ayuda en mi preparación como programadora web.
                    </p>
                    <TextButton href="https://karlavasquez8.github.io/cv-karlitaVasquez/" target="_blank">
                        Ver cv
                    </TextButton>
                </div>
                <div className="container-image">
                    <img src={photo} alt="photografy" className="image-photo" />
                </div>
            </div>
        </section>
    );
}