import React from "react";
import FullWidthImage from "../components/FullWidthImage";
import Image from "../components/Image";
import '../styles/Startseite.css';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
  
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
    
    <StaticImage src="../images/Vogel_1.png" loading="eager" placeholder="none" alt="" className="!fixed invisible lg:visible z-20 bottom-5 left-0 w-1/2 md:w-1/3 xl:w-1/4" />
    <StaticImage src="../images/Vogel_2.png" loading="eager" placeholder="none" alt="" className="!fixed z-20 top-20 right-1 md:top-28 w-1/3 md:w-1/4 xl:w-1/6" />

    <div className="header-image">
      <FullWidthImage img={image} title={body} height={'90vh'} />
    </div>

    <section className="bg-dark z-30 lg:py-8 relative border-y-8 border-white">
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

    <section className="bg-dark z-30 lg:py-8 relative border-y-8 border-white">
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

    <section className="bg-dark z-30 lg:py-8 relative border-y-8 border-white">
      <div className="container max-w-5xl mx-auto">
        <div className="py-16 px-4 font-extralight text-on-dark prose lg:prose-xl">
          {text3}
        </div>
      </div>
    </section>

    { new Date().getFullYear() === 2024 && 
      <section className="bg-light py-8 lg:py-32">
        <div className="text-center p-8">Gefördert von:</div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-32">
          <div>
            <Link to="https://www.kultursommer.de" target="_blank">
              <StaticImage src="../images/logo_kuso.svg" placeholder="none" width={200} />
            </Link>
          </div>
          <div>
            <Link to="https://www.initiative-musik.de" target="_blank">
              <StaticImage src="../images/logo_imu.png" placeholder="none" width={200} />
            </Link>
          </div>
          <div>
            <Link to="https://www.initiative-musik.de" target="_blank">
              <StaticImage src="../images/logo_bkm.png" placeholder="none" width={200} />
            </Link>
          </div>
        </div>
      </section>
    }
  </>;
};

export default StartseiteTemplate;
