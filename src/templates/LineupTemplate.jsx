import React from "react";
  
const LineupTemplate = ({ artists }) => <>
    <div className="flex flex-col pt-20">
        <ul>
            { artists.map(artist => <li>{artist.title}</li>) }
        </ul>
    </div>
</>;

export default LineupTemplate;
