import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Image({image, alt, objectFit = "cover"}) {

    if (!image) return null;

    return image.url
        ? <img src={image.url} alt={alt} />
        : <GatsbyImage image={image} alt={alt} imgStyle={{ objectFit }} />;
};
