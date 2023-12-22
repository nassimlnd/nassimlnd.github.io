import * as React from "react";
import Image from "next/image";

export default function Logo() {
    return (
        <React.Fragment>
            <Image src="/logo.png" alt="Nassim LOUNADI" className="w-64 h-64"/>
        </React.Fragment>
    )
}