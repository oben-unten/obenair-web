import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";

const Helfen = ({
  data: {
    file: {
      childMarkdownRemark: {
        html,
        frontmatter: {
          image,
        }
      }
    }
  }
}) => {

  const body = <span dangerouslySetInnerHTML={{ __html: html }} /> 
  if (image) image = getImage(image);

  return <Layout>

    <section className="lg:py-8 z-20 relative pt-10 lg:pt-20">
      <div className="container max-w-5xl mx-auto">
        <div className="p-5 prose lg:prose-xl">
          {body}
        </div>
      </div>
    </section>

    <div className="header-image">
      <FullWidthImage img={image} />
    </div>
    
  </Layout>;
};

export default Helfen;

export const pageQuery = graphql`
  query {
    file(relativePath: {eq: "Helfen.md"}) {
      childMarkdownRemark {
        html
        frontmatter {
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`;