import * as React from "react";
import Image from "next/image";

export default function Logo() {
    return (
        <React.Fragment>
            <Image src="/logo.png" alt="Nassim LOUNADI" className="lg:w-64 lg:h-64 w-48 h-48" width={1000} height={1000}/>
        </React.Fragment>
    )
}