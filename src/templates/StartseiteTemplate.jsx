import React from "react";
import FullWidthImage from "../components/FullWidthImage";
import Image from "../components/Image";
import '../styles/Startseite.css';
  
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
    <div className="header-image">
      <FullWidthImage img={image} title={body} height={'90vh'} />
    </div>

    <section className="bg-dark lg:py-8">
      <div className="container max-w-5xl mx-auto">
        <div className="p-6 text-on-dark prose lg:prose-xl">
          {text1}
        </div>
      </div>
    </section>

    <section className="bg-light lg:py-8">
      <div className="container max-w-5xl mx-auto">
        <div className="aspect-w-16 aspect-h-9">
          <iframe src={`https://www.youtube.com/embed/${video}?controls=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </section>

    <section className="bg-dark lg:py-8">
      <div className="container flex max-w-5xl mx-auto text-right justify-end">
        <div className="p-6 text-on-dark prose lg:prose-xl">
          {text2}
        </div>
      </div>
    </section>

    <section className="bg-light lg:py-8">
      <div className="container max-w-5xl mx-auto">
        <Image image={photo1} alt="Foto"/>
      </div>
    </section>

    <section className="bg-dark lg:py-8">
      <div className="container max-w-5xl mx-auto">
        <div className="p-6 text-on-dark prose lg:prose-xl">
          {text3}
        </div>
      </div>
    </section>

    <section className="bg-light lg:py-8">
      <div className="container max-w-5xl mx-auto">
        <Image image={photo2} alt="Foto"/>
      </div>
    </section>
  </>;
};

export default StartseiteTemplate;
