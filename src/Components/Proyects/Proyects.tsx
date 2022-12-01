import React from "react";
import "../Proyects/proyects.css"
import LinkCard from "./Cards/LinkCard"
import CardValidation from "../../img/cardvalidation.png"
import DataLovers from "../../img/datalovers.png"
import SocialNetwork from "../../img/helptaster.png"
import MdLinks from "../../img/mdlinks.png"
import BurguerQueen from "../../img/burguerqueen.png"
import { TextButton } from "../TextButton/TextButton"

interface Project {
    href: string;
    src: string;
    description: string;
    title: string;
    alt: string;
    link: string
}

export default function Proyects() {
    const projects: Project[] = [{
        href: "https://karlavasquez8.github.io/LIM018-card-validation/src/",
        src: CardValidation,
        description: 'Es una aplicación web que le permite al usuario validar el número de una tarjeta de crédito antes de ser utilizada para cualquier pago o compra en una plataforma online.',
        title: 'Validación de Tarjeta',
        alt: 'Card Validacion de Tarjeta',
        link: "https://github.com/karlavasquez8/LIM018-card-validation"
    }, {
        href: "https://karlavasquez8.github.io/LIM018-data-lovers/src/",
        src: DataLovers,
        description: 'Es una página Web que contiene datos de Pokemones. Los usuarios tienen la facilidad de encontrar información de los pokemones de manera dinámica y sintetizada a través de las opciones de buscar, ordenar y filtrar.',
        title: 'Data Lovers',
        alt: 'Card Data Lovers',
        link: "https://github.com/karlavasquez8/LIM018-data-lovers"
    }, {
        href: "https://karlavasquez8.github.io/LIM018-social-network/src/",
        src: SocialNetwork,
        description: 'Es una app enfocado en dar recomendaciones sobre Restaurantes, conectando de esta manera entre comensales que optan por la gastronomía Peruana.',
        title: 'Help Taster-Red Social',
        alt: 'Card Help Taster',
        link: "https://github.com/karlavasquez8/LIM018-social-network"
    }, {
        href: "https://www.npmjs.com/package/md-links-kvasquez",
        src: MdLinks,
        description: 'Es una libreria de NodeJS que permite analizar los archivos de tipo Markdown, ya sea desde un archivo o directorio, que pueden estar alojados dentro de carpetas .',
        title: 'MD-LINKS',
        alt: 'Card Md Links',
        link: "https://github.com/karlavasquez8/md-links"
    }, {
        href: "https://github.com/karlavasquez8/LIM018-burger-queen-api-client",
        src: BurguerQueen,
        description: 'Es una aplicacion web-responsive  enfocado en un pequeño restaurante de hamburguesas, que está creciendo, necesita un sistema a través del cual puedan tomar pedidos usando una tablet, y enviarlos a la cocina para que se preparen ordenada y eficientemente.',
        title: 'Burguer Queen Api Client',
        alt: 'Card Burguer Queen',
        link: "https://github.com/karlavasquez8/LIM018-burger-queen-api-client"
    }];

    return (
        <section className="proyects" id="proyects">
            <h2 className="header-proyects">
                Proyectos realizados
            </h2>
            <div className="container-proyects">
                {projects.map(({ href, description, src, title, alt, link }) => (
                    <LinkCard>
                        <a href={href} target="_blank" rel="noreferrer">
                            <img src={src} alt={alt} className='card-image' />
                        </a>
                        <span className="card-title">
                            {title}
                        </span>
                        <p className="description-card">
                            {description}
                        </p>
                        <div className="container-button">
                            <TextButton href={link} type={"thrid"}>
                                Ver código
                            </TextButton>
                        </div>
                    </LinkCard>
                ))}


            </div>
        </section>
    );
}