import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image";
import Image from "../../components/Image";
import Layout from "../../components/Layout";


const Artist = ({
  data: {
    markdownRemark: {
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
}) => {
  
  if (image) image = getImage(image);

  return <Layout>
    <div className="pt-20 pb-5">
      <div className="grid md:grid-cols-2 md:mx-20 gap-10">
        <div>
          <Image image={image} alt={`Foto von ${title}`} height={'90vh'} />
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl mb-5">{title}</h1>
          <div className="mb-10" dangerouslySetInnerHTML={{ __html: html }} />
          <div className="grid grid-cols-2 gap-10">
            { video &&
              <div className="text-right">
                <a href={`https://www.youtube.com/watch?v=${video}`}>
                  <svg className="fill-current w-12 h-12 m-1 inline-block" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div> }
            { spotify &&
              <div className="text-left">
                <a href={`https://open.spotify.com/artist/${spotify}`}>
                  <svg className="fill-current w-12 h-12 m-1 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/></svg>
                </a>
              </div> }
            </div>
        </div>
      </div>
    </div>
  </Layout>
}

export default Artist;

export const query = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
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
`;
