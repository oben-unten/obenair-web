import React from "react";
import Image from "../components/Image";
  
const VereinTemplate = ({ body, image }) => <>
    <div className="flex flex-col md:flex-row-reverse pt-20">
        <div className="flex-1 mx-5 pb-5 md:-mt-20 md:flex md:h-screen md:flex-col md:justify-end"><Image image={image} /></div>
        <div className="flex-1 prose lg:prose-xl mx-5 md:mx-20">{body}</div>
    </div>
</>;

export default VereinTemplate;