import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import IndexPageTemplate from "../templates/IndexPageTemplate";
import Layout from "../components/Layout";

const IndexPage = ({
  data: {
    file: {
      childMarkdownRemark: {
        html: html,
        frontmatter: {
          image,
          title,
          heading,
          subheading
        }
      }
    }
  }
}) => {

  if (image) image = getImage(image);
  const body = <span dangerouslySetInnerHTML={{ __html: html }} /> 

  return <Layout>
    <IndexPageTemplate {...{body, image, title, heading, subheading}} />
  </Layout>;
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    file(relativePath: {eq: "IndexPage.md"}) {
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