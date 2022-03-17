import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Image({image, alt}) {

    if (!image) return null;

    console.log(image);

    return image.url
        ? <img src={image.url} alt={alt} />
        : <GatsbyImage image={image} alt={alt} />;
};
