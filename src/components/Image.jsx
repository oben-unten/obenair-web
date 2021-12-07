import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Image({image}) {

    if (!image) return null;

    console.log(image);

    return image.url
        ? <img src={image} />
        : <GatsbyImage image={image} />;
};