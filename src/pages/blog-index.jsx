import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { getBlogPosts } from './contentful/contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; // Import the renderer

const BlogIndex = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPosts()
      .then((response) => {
        setPosts(response.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6">Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container
      sx={{
        mt: 4,
        p: 3,
        backgroundColor: '#533B8E',
        borderRadius: '24px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h3" gutterBottom
      sx={{ textAlign: 'center', 
        fontWeight: 'bold',
      }}>
        Blog
      </Typography>
      {posts.map((post) => {
        const { title, summaryexcerpt, slug, featuredImage } = post.fields;
        return (
          <Link key={slug} to={`/blog/${slug}`} style={{ textDecoration: 'none' }}>
            <Card
              sx={{
                display: 'flex',
                mb: 2,
                borderRadius: 2,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              {featuredImage && (
                <CardMedia
                  component="img"
                  sx={{ width: 160 }}
                  image={featuredImage.fields.file.url}
                  alt={title}
                />
              )}
              <CardContent>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {summaryexcerpt 
                    ? documentToReactComponents(summaryexcerpt)
                    : "No summary available."}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </Container>
  );
};

export default BlogIndex;
