import React from "react";
import "../LinksButton/linkButton.css"

interface LinkButtonProps {
    href: string;
    children: React.ReactNode
}

export default function LinkButton(props: LinkButtonProps) {
    const { href, children } = props

    return (
        <div className="contact-link">
            <a href={href} target="_blank" rel="noreferrer" className="button-contact">
                {children}
            </a>
        </div>
    )

}