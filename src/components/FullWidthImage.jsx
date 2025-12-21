import React from "react";

export default function FullWidthImage({
    height = 400,
    img,
    title,
    titleHtml,
    imgPosition = "bottom",
}) {
    // Handle Astro image object (src) or string url
    const src = img?.src || img?.url || img;

  return (
    <>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
        }}
      >
        <img
            src={src}
            style={{
              objectPosition: imgPosition,
              objectFit: "cover",
              gridArea: "1/1",
              height: height,
              width: "100%",
            }}
            alt=""
          />
        {(title || titleHtml) && (
          <div
            style={{
              gridArea: "1/1",
              position: "relative",
              placeItems: "center",
              display: "grid",
              zIndex: 20,
            }}
          >
            {title && title}
            {titleHtml && <span dangerouslySetInnerHTML={{ __html: titleHtml }} />}
          </div>
        )}
      </div>
    </>
  );
}
