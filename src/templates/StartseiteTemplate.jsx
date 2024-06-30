import React from "react";
import FullWidthImage from "../components/FullWidthImage";
import Image from "../components/Image";
import '../styles/Startseite.css';
import { StaticImage } from "gatsby-plugin-image";
  
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
    
    <StaticImage src="../images/Vogel_1.png" loading="eager" placeholder="none" alt="" className="!fixed z-20 -left-10 -bottom-10 w-1/2 md:w-1/3 xl:w-1/4" />
    <StaticImage src="../images/Vogel_2.png" loading="eager" placeholder="none" alt="" className="!fixed z-20 -right-10 xl:-right-5 top-20 md:top-36 xl:top-40 w-1/3 md:w-1/4 xl:w-1/6" />

    <div className="header-image">
      <FullWidthImage img={image} title={body} height={'90vh'} />
    </div>

    <section className="bg-dark lg:py-8 relative border-y-8 border-white">
      <div className="container max-w-5xl mx-auto">
        <div className="py-16 px-4 font-extralight text-on-dark prose lg:prose-xl">
          {text1}
        </div>
      </div>
    </section>

    <section className="bg-light lg:py-8">
      <div className="container max-w-5xl md:mx-auto">
        <div className="aspect-w-16 aspect-h-9">
          <iframe src={`https://www.youtube.com/embed/${video}?controls=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </section>

    <section className="bg-dark lg:py-8 relative border-y-8 border-white">
      <div className="container flex max-w-5xl mx-auto text-right justify-end">
        <div className="py-16 px-4 font-extralight text-on-dark prose lg:prose-xl">
          {text2}
        </div>
      </div>
    </section>

    <section className="bg-light lg:py-8">
      <div className="container max-w-5xl mx-auto">
        <Image image={photo1} alt="Foto"/>
      </div>
    </section>

    <section className="bg-dark lg:py-8 relative border-y-8 border-white">
      <div className="container max-w-5xl mx-auto">
        <div className="py-16 px-4 font-extralight text-on-dark prose lg:prose-xl">
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
