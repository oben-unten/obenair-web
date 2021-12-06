import React from "react";
import { graphql } from "gatsby";
import VereinTemplate from "../templates/VereinTemplate";
import Layout from "../components/Layout";

const Verein = ({
  data: {
    file: {
      childMarkdownRemark: {
        html,
      }
    }
  }
}) => {

  const body = <span dangerouslySetInnerHTML={{ __html: html }} /> 

  return <Layout>
    <VereinTemplate body={ body } />
  </Layout>;
};

export default Verein;

export const pageQuery = graphql`
  query {
    file(relativePath: {eq: "Verein.md"}) {
      childMarkdownRemark {
        html
      }
    }
  }
`;