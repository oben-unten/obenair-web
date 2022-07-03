import React from "react";
import ArtistTeaser from "../components/ArtistTeaser";
  
const ArtistsTemplate = ({ artists }) => <>
    <div className="flex flex-col pt-10 mt-5 pb-5">
        <div className="md:columns-2 md:mx-20 gap-10">
            { artists.map(artist => <ArtistTeaser artist={ artist } key={artist.name} />) }
        </div>
    </div>
</>;

export default ArtistsTemplate;
