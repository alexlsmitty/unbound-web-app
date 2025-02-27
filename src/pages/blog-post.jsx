import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { getBlogPostBySlug } from './contentful/contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPostBySlug(slug)
      .then((response) => {
        if (response.items.length) {
          setPost(response.items[0].fields);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the blog post:", error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6">Loading...</Typography>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6">Blog post not found.</Typography>
      </Container>
    );
  }

  const { title, bodyContent, publishDate, featuredImage } = post;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>{title}</Typography>
      <Typography variant="caption" color="text.secondary">
        Published on {new Date(publishDate).toLocaleDateString()}
      </Typography>
      {featuredImage && (
        <img
          src={featuredImage.fields.file.url}
          alt={title}
          style={{ width: '100%', borderRadius: 16, marginTop: 16 }}
        />
      )}
      <Typography variant="body1" sx={{ mt: 2 }}>
        {bodyContent
          ? documentToReactComponents(bodyContent)
          : 'No content available.'}
      </Typography>
    </Container>
  );
};

export default BlogPost;
