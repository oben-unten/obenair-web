import React from "react";
import FullWidthImage from "../components/FullWidthImage";
import Image from "../components/Image";
  
const StartseiteTemplate = ({
  body,
  image,
  video,
  text1,
  text2,
  text3,
  photo1,
  photo2,
}) => {

  return <>
    <FullWidthImage img={image} title={body} height={'90vh'} />

    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <div className="p-6 text-gray-600 prose lg:prose-xl">
          {text1}
        </div>
      </div>
    </section>

    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video}?controls=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </section>

    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <div className="p-6 text-gray-600 prose lg:prose-xl">
          {text2}
        </div>
      </div>
    </section>

    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <Image image={photo1} alt="Foto"/>
      </div>
    </section>

    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <div className="p-6 text-gray-600 prose lg:prose-xl">
          {text3}
        </div>
      </div>
    </section>

    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <Image image={photo2} alt="Foto"/>
      </div>
    </section>
  </>;
};

export default StartseiteTemplate;
