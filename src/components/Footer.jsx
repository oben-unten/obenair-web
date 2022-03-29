import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
    return <>
        <hr className="border-b border-gray-800 my-0 py-0" />
        <div className="bg-gray-200 p-6 text-center">
            <Link to="/verein">
                <StaticImage
                    src="../images/logo_ou.png" 
                    alt="A dinosaur"
                    placeholder="tracedSVG"
                    width={80}
                    height={80}
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
