import React from "react";
import plan from "../../static/plan.jpg";
  
const InfoTemplate = ({ info }) => <>
    <div className="flex flex-col pt-20 pb-5">
        <div className="md:mx-20 p-5 text-center bg-dark font-bold text-on-dark text-lg">
            <a href={ plan } target="_blank" rel="noreferrer">&gt;&gt;&gt; Lageplan &lt;&lt;&lt;</a>
        </div>
        <div className="md:columns-2 mt-10 md:mx-20 gap-10">
            { info.map(({title, html}) => <div className="px-5 pb-5 break-inside-avoid" key={title}>
                <h1 className="text-3xl md:text-5xl mb-5">{title}</h1>
                <div className="mb-10 prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: html }} />
            </div>) }
        </div>
    </div>
</>;

export default InfoTemplate;
