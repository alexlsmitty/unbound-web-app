import { createClient } from 'contentful';

console.log('Space ID:', import.meta.env.VITE_CONTENTFUL_SPACE_ID);
console.log('Access Token:', import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN);

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  
});

// Fetch all blog posts
export const getBlogPosts = () => {
  return client.getEntries({ content_type: 'blogPost' });
};

// Fetch a single blog post by slug
export const getBlogPostBySlug = (slug) => {
  return client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
  });
};
