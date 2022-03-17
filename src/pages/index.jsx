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
          video,
          text1,
          text2,
          text3,
          photo1,
          photo2,
        }
      }
    }
  }
}) => {

  if (image) image = getImage(image);
  if (photo1) photo1 = getImage(photo1);
  if (photo2) photo2 = getImage(photo2);
  const body = <span dangerouslySetInnerHTML={{ __html: html }} /> 

  return <Layout>
    <StartseiteTemplate {...{body, image, video, text1, text2, text3, photo1, photo2}} />
  </Layout>;
};

export default Startseite;

export const pageQuery = graphql`
  query {
    file(relativePath: {eq: "Startseite.md"}) {
      childMarkdownRemark {
        html
        frontmatter {
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          video
          text1
          text2
          text3
          photo1 {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          photo2 {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`;
