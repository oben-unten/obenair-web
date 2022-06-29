import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Image({image, alt, className, objectFit = "cover"}) {

    if (!image) return null;

    return image.url
        ? <img src={image.url} alt={alt} className={className} />
        : <GatsbyImage image={image} alt={alt} className={className} imgStyle={{ objectFit }} />;
};
