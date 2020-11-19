import React from 'react';
import { graphql } from 'gatsby';
import {
	mapEdgesToNodes,
	filterOutDocsWithoutSlugs,
	filterOutDocsPublishedInTheFuture
} from '../lib/helpers';
import BlogPostPreviewList from '../components/Blog/blog-post-preview-list';
import Container from '../components/Blog/container';
import GraphQLErrorList from '../components/Blog/graphql-error-list';
import SEO from '../components/seo';
import WhatsappBtn from '../components/Layout/WhatsappBtn';

export const query = graphql`
	fragment SanityImage on SanityMainImage {
		crop {
			_key
			_type
			top
			bottom
			left
			right
		}
		hotspot {
			_key
			_type
			x
			y
			height
			width
		}
		asset {
			_id
		}
	}

	query BlogPageQuery {
		site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
			title
			description
			keywords
		}
		posts: allSanityPost(
			limit: 6
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

const BlogPage = props => {
	const { data, errors } = props;

	if (errors) {
		return <GraphQLErrorList errors={errors} />;
	}

	const site = (data || {}).site;
	const postNodes = (data || {}).posts
		? mapEdgesToNodes(data.posts)
				.filter(filterOutDocsWithoutSlugs)
				.filter(filterOutDocsPublishedInTheFuture)
		: [];

	if (!site) {
		throw new Error(
			'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
		);
	}

	return (
		<div>
			<SEO title={site.title} description={site.description} keywords={site.keywords} />
			<WhatsappBtn />
			<Container>
				{/* <h1>Bienvenido al {site.title}</h1> */}
				<p>{site.description}</p>
				{postNodes && (
					<BlogPostPreviewList
						title='Posts Recientes'
						nodes={postNodes}
						browseMoreHref='/archive/'
					/>
				)}
			</Container>
		</div>
	);
};

export default BlogPage;
