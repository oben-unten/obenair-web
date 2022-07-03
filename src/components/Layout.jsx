import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, transparent=false }) => <>
    <Helmet>
        <title>Oben Air Festival</title>
        <meta name="description" content="Grenzübergreifendes Musik- und Kunstfestival bei Zell an der Mosel."></meta>
    </Helmet>
    <Navbar transparent={transparent} />
    { children }
    <Footer />
</>;

export default Layout;