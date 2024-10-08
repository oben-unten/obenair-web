import React from "react";
import ArtistTeaser from "../components/ArtistTeaser";
import timetable from "../../static/timetable_2024.png";
  
const ArtistsTemplate = ({ artists }) => {

    const thisYear = 2025; // new Date().getFullYear();

    const artistsByYear = artists.reduce((map, artist) => {
        map[artist.year] = artist.year in map ? [...map[artist.year], artist] : [artist]
        return map;
    }, {});
    const thisYearsArtists = artistsByYear[`${thisYear}`];

    return <div className="mt-16 md:mt-20 ">

        { false && <div className="md:mx-20 p-5 text-center bg-dark font-bold text-on-dark text-lg">
            <a href={ timetable } target="_blank" rel="noreferrer">&gt;&gt;&gt; Timetable &lt;&lt;&lt;</a>
        </div> }
        <div className="flex flex-col mt-5 pb-5">
            {thisYearsArtists?.length > 0 && <div className="md:columns-2 md:mx-20 gap-10">
                { thisYearsArtists.map(artist => <ArtistTeaser artist={ artist } key={artist.name} />) }
            </div>}
            {!(thisYearsArtists?.length > 0) && <div className="md:mx-20 p-10 gap-10 font-bold text-center">
                Wir arbeiten eifrig am Lineup für {thisYear} ...
            </div>}
        </div>
    </div>;
};

export default ArtistsTemplate;
