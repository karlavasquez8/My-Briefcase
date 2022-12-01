
import React from "react";
import "../Cards/linkCard.css"

type Direction = "column" | "row"

interface LinkCardProps {
    children: React.ReactNode;
    direction?: Direction
}

export default function LinkCard(props: LinkCardProps) {
    const { direction = "column", children } = props
    return (
        <div className={`card-grid content-card ${direction}`}>
            {children}
        </div>
    )
}