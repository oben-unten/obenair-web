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
    
    <StaticImage src="../images/Vogel_1.png" loading="eager" placeholder="none" alt="" className="!fixed z-20 -left-10 -bottom-10 w-1/3 md:w-1/4 lg:w-1/6" />
    <StaticImage src="../images/Wolke.png" loading="eager" placeholder="none" alt="" className="!fixed z-10 -left-10 lg:left-0 -bottom-10 w-1/2 md:w-1/4" />
    <StaticImage src="../images/Vogel_2.png" loading="eager" placeholder="none" alt="" className="!fixed z-20 -right-10 top-16 w-1/3 md:w-1/4 lg:w-1/6" />
    <StaticImage src="../images/Sonne.png" loading="eager" placeholder="none" alt="" className="!fixed z-10 -right-10 -top-10 lg:-top-20 w-1/3 md:w-1/4 lg:w-1/6" />

    <div className="header-image">
      <FullWidthImage img={image} title={body} height={'90vh'} />
    </div>

    <section className="bg-dark lg:py-8 relative">
      <div className="container max-w-5xl mx-auto">
        <div className="p-5 text-on-dark prose lg:prose-xl">
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

    <section className="bg-dark lg:py-8 relative">
      <div className="container flex max-w-5xl mx-auto text-right justify-end">
        <div className="p-5 text-on-dark prose lg:prose-xl">
          {text2}
        </div>
      </div>
    </section>

    <section className="bg-light lg:py-8">
      <div className="container max-w-5xl mx-auto">
        <Image image={photo1} alt="Foto"/>
      </div>
    </section>

    <section className="bg-dark lg:py-8 relative">
      <div className="container max-w-5xl mx-auto">
        <div className="p-5 text-on-dark prose lg:prose-xl">
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
