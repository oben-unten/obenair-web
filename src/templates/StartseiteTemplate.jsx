import React from "react";
import Image from "../components/Image";
import '../styles/Startseite.css';

import Birdy from "../images/Birdy.png";
import Kreis from "../images/Kreis.png";

const StartseiteTemplate = ({
  date,
  title,
  subtitle,
  video,
  text1,
  text2,
  text3,
  photo1,
}) => {

  const titleWords = (title || "").split(/\s+/).filter(Boolean);

  return <>
    <section className="px-6 md:px-16 mt-20">
      <div className="max-w-2xl mx-auto bg-dark text-on-dark rounded-2xl px-6 py-5 md:px-8 md:py-6">
        <p className="font-bold text-lg md:text-xl mb-3">OUT OF TICKETS! AUSVERKAUFT! WIR HABEN KEINE KARTEN MEHR!!</p>
        <p className="text-sm md:text-base">
          Wir danken euch von Herzen, dass ihr uns dieses Vertrauen schenkt und uns das Gefühl gebt, etwas Gutes zu tun.
        </p>
        <p className="text-sm md:text-base">
          Gleichzeit geht mit dieser tollen Nachricht auch eine Bitte einher: Bitte, erspart euch und uns die unangenehme Situation und reist OHNE TICKET BITTE NICHT AN! Unsere Kapazitätsgrenze ist mit dem Ausverkauf leider erreicht! Bald könnt ihr euch aber schon Tickets fürs nächste Jahr sichern.
        </p>
      </div>
    </section>

    <section className="hero relative px-6 md:px-16 py-8 md:py-12">
      <img
        src={Kreis.src || Kreis}
        alt=""
        aria-hidden="true"
        className="hero-circle absolute right-6 top-8 md:right-16 md:top-28 w-24 md:w-32 lg:w-48"
      />
      <img
        src={Birdy.src || Birdy}
        alt=""
        aria-hidden="true"
        className="hero-bird absolute w-32 md:w-48 lg:w-64 right-6 top-36 md:left-16 md:top-[336px]"
      />
      <div className="hero-content max-w-2xl mx-auto">
        {date && <p className="hero-date text-dark font-bold mb-2 md:mb-4">{date}</p>}
        {titleWords.length > 0 && (
          <h1 className="hero-title text-white m-0">
            {titleWords.map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h1>
        )}
        {subtitle && <p className="hero-subtitle text-dark mt-4 md:mt-6">{subtitle}</p>}
      </div>
    </section>

    {text1 && (
      <section className="px-6 md:px-16 py-8 md:py-12">
        <div className="max-w-2xl mx-auto text-on-light text-base md:text-lg leading-relaxed">
          {text1}
        </div>
      </section>
    )}

    {video && (
      <section className="px-6 md:px-16 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${video}?controls=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    )}

    <section className="px-6 md:px-16 py-8 md:py-12">
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-start">
        <h2 className="section-heading text-dark m-0">
          <span className="block">Musik,</span>
          <span className="block">Film,</span>
          <span className="block">Literatur</span>
        </h2>
        {photo1 && (
          <div className="md:pt-2">
            <Image image={photo1} alt="Foto" />
          </div>
        )}
      </div>
    </section>

    {text2 && (
      <section className="px-6 md:px-16 py-8 md:py-12">
        <div className="max-w-2xl mx-auto text-on-light text-base md:text-lg leading-relaxed">
          {text2}
        </div>
      </section>
    )}

    {text3 && (
      <section className="px-6 md:px-16 py-8 md:py-12">
        <div className="max-w-2xl mx-auto text-on-light text-base md:text-lg leading-relaxed">
          {text3}
        </div>
      </section>
    )}
  </>;
};

export default StartseiteTemplate;
