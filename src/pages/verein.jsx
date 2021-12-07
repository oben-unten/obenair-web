import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import VereinTemplate from "../templates/VereinTemplate";
import Layout from "../components/Layout";

const Verein = ({
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
    <VereinTemplate body={ body } image={ image } />
  </Layout>;
};

export default Verein;

export const pageQuery = graphql`
  query {
    file(relativePath: {eq: "Verein.md"}) {
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