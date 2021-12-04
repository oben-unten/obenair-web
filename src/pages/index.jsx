import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";

const Start = ({
  data: {
    file: {
      childMarkdownRemark: {
        html,
        frontmatter: {
          image,
          title,
          heading,
          subheading,
        }
      }
    }
  }
}) => {

  const heroImage = getImage(image) || image;

  return (
    <Layout>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} height={1400} />
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
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: html }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Start;

export const pageQuery = graphql`
  query {
    file(relativePath: {eq: "index.md"}) {
      childMarkdownRemark {
        html
        frontmatter {
          title
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          heading
          subheading
        }
      }
    }
  }
`;