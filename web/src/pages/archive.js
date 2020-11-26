import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import BlogPostPreviewGrid from "../components/Blog/blog-post-preview-grid";
import Container from "../components/Blog/container";
import GraphQLErrorList from "../components/Blog/graphql-error-list";
import SEO from "../components/seo";
import WhatsappBtn from "../components/Layout/WhatsappBtn";

import { responsiveTitle1 } from "../components/Blog/typography.module.css";

export const query = graphql`
  query ArchivePageQuery {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const ArchivePage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return <GraphQLErrorList errors={errors} />;
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts);

  return (
    <div>
      <SEO title="Archive" />
      <WhatsappBtn />
      <Container>
        {/* <h1 className={responsiveTitle1}>Archive</h1> */}
        {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
      </Container>
    </div>
  );
};

export default ArchivePage;
