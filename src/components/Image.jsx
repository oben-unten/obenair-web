import React from "react";

export default function Image({image, alt, className, objectFit = "cover"}) {

    if (!image) return null;

    // Astro image object has .src, .width, .height. Gatsby used .url sometimes for strings?
    // We handle: string, object with src (Astro), object with url (legacy/custom)
    const src = image.src || image.url || image;

    return <img src={src} alt={alt} className={className} style={{ objectFit }} width={image.width} height={image.height} />;
};