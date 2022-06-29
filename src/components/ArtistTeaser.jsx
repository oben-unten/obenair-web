import React from "react";
import Image from "./Image";
import { Link } from "gatsby";


const X_POSTITONS = ['right-4', 'right-1/4', 'right-2/4', 'left-4', 'left-1/4', 'left-2/4'];
const Y_POSTITONS = ['top-4', 'top-1/4', 'top-2/4', 'bottom-4', 'bottom-1/4', 'bottom-2/4'];
  
const ArtistTeaser = ({ artist }) => <>
        <div className="relative group mb-5">
            <Link to={`/artist/${artist.name}`}>
                <Image image={artist.image} alt={`Foto von ${artist.title}`} className="md:grayscale hover:grayscale-0"/>
                <h1 className={`text-5xl text-black group-hover:text-white absolute ${generatePosition()}`}>{artist.title}</h1>
                <h1 className={`text-5xl text-white group-hover:text-black absolute ${generatePosition()}`}>{artist.title}</h1>
            </Link>
        </div>
</>;

export default ArtistTeaser;

const generatePosition = () => `${X_POSTITONS.at(randomInt(6))} ${Y_POSTITONS.at(randomInt(6))}`;

const randomInt = (max) => Math.floor(Math.random() * max);
