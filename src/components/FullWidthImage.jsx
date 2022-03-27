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
        }}
      >
        {img?.url ? (
          <img
            src={img}
            style={{
              objectPosition: imgPosition,
              objectFit: "cover",
              gridArea: "1/1",
              height: height,
              width: "100%",
            }}
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        ) : (
          <GatsbyImage
            image={img}
            style={{
              objectPosition: imgPosition,
              objectFit: "cover",
              gridArea: "1/1",
              maxHeight: height,
            }}
            layout="fullWidth"
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {title && (
          <div className="p-3"
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
              zIndex: 20,
            }}
          >
            {title}
          </div>
        )}
      </div>
    </>
  );
}
