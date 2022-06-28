import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import LineupTemplate from "../templates/LineupTemplate";

const Lineup = ({
  data: {
    allFile: {
      edges
    }
  }
}) => {

  return <Layout>
    <LineupTemplate artists={ edges.map(mapEdges) } />
  </Layout>;
};

export default Lineup;

export const pageQuery = graphql`
  query Artists {
    allFile(filter: {sourceInstanceName: {eq: "artists"}}) {
      edges {
        node {
          id
          childMarkdownRemark {
            html
            frontmatter {
              title
              image {
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                }
              }
              video
              spotify
              year
            }
          }
        }
      }
    }
  }
`;

const mapEdges = ({
  node: {
    childMarkdownRemark: {
      html,
      frontmatter: {
        title,
        image,
        video,
        spotify,
        year,
      }
    }
  }
}) => ({
  bio: <span dangerouslySetInnerHTML={{ __html: html }} />,
  title,
  image: getImage(image),
  video,
  spotify,
  year,
})
