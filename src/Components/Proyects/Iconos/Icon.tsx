import React from "react";
import "./icon.css"

export interface IconProps {
    src: string,
    name: string
}

export default function Icon(props: IconProps) {
    const { src, name } = props
    return (
        <div className="container-logos-tech">
            <img src={src} alt="icon tech" className="icon-img" />
            <span className="icon-name">{name}</span>
        </div>

    )
}