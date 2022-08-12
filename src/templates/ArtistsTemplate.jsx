import React from "react";
import ArtistTeaser from "../components/ArtistTeaser";
import timetable from "../../static/timetable.pdf";
  
const ArtistsTemplate = ({ artists }) => <>
    <div className="mt-16 md:mt-20 md:mx-20 p-5 text-center bg-dark font-bold text-on-dark text-lg">
        <a href={ timetable } target="_blank">&gt;&gt;&gt; Timetable &lt;&lt;&lt;</a>
    </div>
    <div className="flex flex-col mt-5 pb-5">
        <div className="md:columns-2 md:mx-20 gap-10">
            { artists.map(artist => <ArtistTeaser artist={ artist } key={artist.name} />) }
        </div>
    </div>
</>;

export default ArtistsTemplate;
