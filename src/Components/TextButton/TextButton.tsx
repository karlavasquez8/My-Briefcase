import React from "react"
import "./TextButton.css"
type Type = 'primary' | 'secondary' | "thrid"

interface TextButtonProps {
    children: React.ReactNode;
    type?: Type;
    target?: string;
    href?: string;

}

export const TextButton = (props: TextButtonProps) => {
    const { type = 'primary', children, href, target } = props
    return (
        <a href={href} target={target} className={`text-button ${type}`}>
            {children}
        </a>
    )
}