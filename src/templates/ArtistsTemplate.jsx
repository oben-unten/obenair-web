import React from "react";
import ArtistTeaser from "../components/ArtistTeaser";
import timetable from "../../static/timetable.pdf";
  
const ArtistsTemplate = ({ artists }) => {

    const artistsByYear = artists.reduce((map, artist) => map[artist.year] = artist, {});
    const thisYearsArtists = artistsByYear[new Date().getFullYear()];

    return <>

        <div className="mt-16 md:mt-20 md:mx-20 p-5 text-center bg-dark font-bold text-on-dark text-lg">
            <a href={ timetable } target="_blank">&gt;&gt;&gt; Timetable &lt;&lt;&lt;</a>
        </div>
        <div className="flex flex-col mt-5 pb-5">
            {thisYearsArtists?.length > 0 && <div className="md:columns-2 md:mx-20 gap-10">
                { thisYearsArtists.map(artist => <ArtistTeaser artist={ artist } key={artist.name} />) }
            </div>}
            {!(thisYearsArtists?.length > 0) && <div className="md:mx-20 p-10 gap-10 font-bold text-center">
                Wir arbeiten eifrig am Lineup für {new Date().getFullYear()} ...
            </div>}
        </div>
    </>;
};

export default ArtistsTemplate;
