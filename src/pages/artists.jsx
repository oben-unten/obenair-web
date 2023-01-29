import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import ArtistsTemplate from "../templates/ArtistsTemplate";

const Artists = ({
  data: {
    allFile: {
      edges
    }
  }
}) => {

  return <Layout>
    <ArtistsTemplate artists={ edges.map(mapEdges) } />
  </Layout>;
};

export default Artists;

export const pageQuery = graphql`
  query Artists {
    allFile(
      filter: {sourceInstanceName: {eq: "artists"}}
    ) {
      edges {
        node {
          name
          childMarkdownRemark {
            frontmatter {
              title
              image {
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
  }
`;

const mapEdges = ({
  node: {
    name,
    childMarkdownRemark: {
      frontmatter: {
        title,
        image,
      }
    }
  }
}) => ({
  name,
  title,
  image: getImage(image),
})
