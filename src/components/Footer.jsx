import React from "react";
import { Link } from "./Link";
import LogoOu from "../images/OU_Logo.png";

export default function Footer() {
    return (
        <footer className="bg-white text-dark px-6 md:px-16 py-12 md:py-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                <h2 className="font-serif text-dark text-4xl md:text-6xl leading-[0.95] m-0">
                    Oben<br/>
                    ist die Luft<br/>
                    am Dünsten.
                </h2>
                <Link to="/verein" className="flex items-end gap-4 no-underline">
                    <div className="text-dark text-md leading-tight">
                        <img
                            src={LogoOu.src || LogoOu}
                            alt="Oben & Unten e.V. Logo"
                            width={256}
                            height={256}
                            className="shrink-0"
                        />
                        <div className="mt-3">Gilbertstraße 7 | 54290 Trier</div>
                    </div>
                </Link>
            </div>
        </footer>
    );
}
