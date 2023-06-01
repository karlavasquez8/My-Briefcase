import React from "react";
import LinkButton from "./LinksButton/LinkButton"
import Celular from "../../img/imgCelular.png"
import Linkedin from "../../img/imgLinkedin.png"
import Email from "../../img/imgEmailc.png"
import GitHub from "../../img/imgGitHub.png"
import "../Contact/contact.css"

interface LinkContact {
    href: string;
    src: string;
    title: string;
    alt: string
}


export default function Contact() {
    const links: LinkContact[] = [
        {
            href: 'https://www.linkedin.com/in/karla-vasquez-47633b112/',
            title: 'Linkedin',
            src: Linkedin,
            alt: "Logo Linkedin"
        }, {
            href: 'https://github.com/karlavasquez8',
            title: 'Git Hub',
            src: GitHub,
            alt: "Logo GitHub"
        }, {
            href: 'mailto:karlavasquez817@gmail.com',
            title: 'karlavasquez817@gmail.com',
            src: Email,
            alt: 'Logo Email'
        }, {
            href: 'tel:946044673',
            title: '946044673',
            src: Celular,
            alt: 'Logo Celular'
        }]

    return (
        <section id="contact" className="section-contact">
            <div className="contact-section-header">
                <h2>
                    Vamos a trabajar juntos...
                </h2>
                <p>
                    ¿Cómo toma su café?
                </p>
            </div>
            <div className="container-links-contacts">
                {links.map(({ href, title, src, alt }) => (
                    <LinkButton href={href}>
                        <img src={src} alt={alt} className="image-contact" />
                        {title}
                    </LinkButton>
                ))}
            </div>
        </section>
    )
}