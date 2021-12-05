import React from "react";
import FullWidthImage from "../components/FullWidthImage";
  
const IndexPageTemplate = ({
  body,
  image,
  title,
  heading,
  subheading,
}) => {

  return <>
    <FullWidthImage img={image} title={title} subheading={subheading} height={1400} />
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <div className="content">
                      {body}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default IndexPageTemplate;