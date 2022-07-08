import React from "react";
  
const InfoTemplate = ({ info }) => <>
    <div className="flex flex-col pt-20 pb-5">
        <div className="md:columns-2 md:mx-20 gap-10">
            { info.map(({title, html}) => <div className="px-5 pb-5 break-inside-avoid">
                <h1 className="text-3xl md:text-5xl mb-5">{title}</h1>
                <div className="mb-10 prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: html }} />
            </div>) }
        </div>
    </div>
</>;

export default InfoTemplate;
