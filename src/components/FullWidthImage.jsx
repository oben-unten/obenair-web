import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function FullWidthImage({
    height = 400,
    img,
    title,
    imgPosition = "bottom",
}) {

  return (
    <>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
          gridTemplateRows: "repeat(2, 50%)",
        }}
      >
        {img?.url ? (
          <img
            src={img}
            style={{
              objectPosition: imgPosition,
              objectFit: "cover",
              gridArea: "1/1/3/1",
              // You can set a maximum height for the image, if you wish.
              height: height,
              width: "100%",
            }}
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        ) : (
          <GatsbyImage
            image={img}
            style={{
              objectPosition: imgPosition,
              objectFit: "cover",
              gridArea: "1/1/3/1",
              // You can set a maximum height for the image, if you wish.
              maxHeight: height,
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {title && (
          <div className="space-y-3"
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
            }}
          >
            {title}
          </div>
        )}
      </div>
    </>
  );
}
