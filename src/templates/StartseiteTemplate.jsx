import React from "react";
import FullWidthImage from "../components/FullWidthImage";
  
const StartseiteTemplate = ({
  body,
  image,
  imageTitle,
}) => {

  return <>
    <FullWidthImage img={image} title={imageTitle} height={'90vh'} />
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <div className="w-5/6 sm:w-1/2 p-6 text-gray-600 prose lg:prose-lg">
          {body}
        </div>
      </div>
    </section>
  </>;
};

export default StartseiteTemplate;