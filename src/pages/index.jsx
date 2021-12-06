import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import StartseiteTemplate from "../templates/StartseiteTemplate";
import Layout from "../components/Layout";

const Startseite = ({
  data: {
    file: {
      childMarkdownRemark: {
        html,
        frontmatter: {
          image,
          title,
          imageTitle,
        }
      }
    }
  }
}) => {

  if (image) image = getImage(image);
  const body = <span dangerouslySetInnerHTML={{ __html: html }} /> 

  return <Layout>
    <StartseiteTemplate {...{body, image, title, imageTitle}} />
  </Layout>;
};

export default Startseite;

export const pageQuery = graphql`
  query {
    file(relativePath: {eq: "Startseite.md"}) {
      childMarkdownRemark {
        html
        frontmatter {
          title
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          imageTitle
        }
      }
    }
  }
`;