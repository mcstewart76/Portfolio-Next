import { groq } from 'next-sanity';

const experienceQuery = groq`
*[_type == "experience"]
{
  ...,
  technologies[]->
}
`;

const pageInfo = groq`
*[_type == "pageInfo"][0]
`;

const projectsQuery = groq`
*[_type == "project"] {
  ...,
  technologies[]->
}
`;

const skillsQuery = groq`
*[_type == "skill"]
`;

const socialsQuery = groq`
*[_type == "social"]
`;