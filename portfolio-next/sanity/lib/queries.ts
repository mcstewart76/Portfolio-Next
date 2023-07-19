import { groq } from 'next-sanity';

// Get all posts
export const postsQuery = groq`*[_type == "post" ]
  `;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post"]
  `;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" ]
  `;
