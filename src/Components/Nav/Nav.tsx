import React from 'react';
import './Nav.css'
export default function Nav() {
    return (
        <nav className='Nav'>
            <ul className='Nav-List'>
                <li>
                    <a className="a-nav" href="#welcome">Sobre mi</a>
                </li>
                <li>
                    <a className="a-nav" href="#proyects">Proyectos</a>
                </li>
                <li>
                    <a className="a-nav" href="#contact">Contactame</a>
                </li>
            </ul>
        </nav>
    );
}