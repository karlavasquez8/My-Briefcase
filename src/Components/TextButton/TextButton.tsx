import React from "react"
import "./TextButton.css"
type Type = 'primary' | 'secondary' | "thrid"

interface TextButtonProps {
    children: React.ReactNode;
    type?: Type;
    download?: string;
    href?: string;
}

export const TextButton = (props: TextButtonProps) => {
    const { type = 'primary', children, href, download } = props
    return (
        <a href={href} download={download} className={`text-button ${type}`}>
            {children}
        </a>
    )
}