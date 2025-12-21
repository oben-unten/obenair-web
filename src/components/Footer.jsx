import React from "react";
import { Link } from "./Link";
import LogoOu from "../images/logo_ou.png";

export default function Footer() {
    return <>
        <hr className="border-b border-gray-800 my-0 py-0" />
        <div className="bg-gray-200 p-6 text-center">
            <Link to="/verein">
                <img
                    src={LogoOu.src || LogoOu}
                    alt="A dinosaur"
                    width={80}
                    height={80}
                    className="mx-auto"
                />
            </Link>
            <div className="pt-4 text-gray-800 text-sm">
                Oben &amp; Unten Kulturveranstaltungen e.V.<br/>
                Gilbertstraße 7<br/>
                54290 Trier
            </div>
        </div>
    </>;
}