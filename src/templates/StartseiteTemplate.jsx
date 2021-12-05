import React from "react";
import FullWidthImage from "../components/FullWidthImage";
  
const StartseiteTemplate = ({
  body,
  image,
  title,
  heading,
  subheading,
}) => {

  return <>
    <FullWidthImage img={image} title={title} subheading={subheading} height={1400} />
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {heading}
        </h1>
        <div className="w-5/6 sm:w-1/2 p-6 text-gray-600">
          {body}
        </div>
      </div>
    </section>
  </>;
};

export default StartseiteTemplate;