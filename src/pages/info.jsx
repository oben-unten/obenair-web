import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import InfoTemplate from "../templates/InfoTemplate";

const Info = ({
  data: {
    allFile: {
      edges
    }
  }
}) => {

  return <Layout>
    <InfoTemplate info={ edges.map(mapInfo) } />
  </Layout>;
};

export default Info;

export const pageQuery = graphql`
  query Info {
    allFile(filter: {sourceInstanceName: {eq: "info"}}, sort: { fields: [childMarkdownRemark___frontmatter___title], order: ASC }) {
      edges {
        node {
          childMarkdownRemark {
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  }
`;

const mapInfo = ({
  node: {
    childMarkdownRemark: {
      html,
      frontmatter: {
        title,
      }
    }
  }
}) => ({
  html,
  title,
})
