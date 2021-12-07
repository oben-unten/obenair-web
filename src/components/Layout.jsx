import React from "react";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => <>
    <Helmet>
        <title>Oben Air Festival</title>
        <meta name="description" content="Grenzübergreifendes Musik- und Kunstfestival bei Zell an der Mosel."></meta>
    </Helmet>
    <Navbar />
    { children }
</>;

export default Layout;