import { Social, Skill, PageInfo, Experience, Project } from 'lib/typings';
import { createClient } from 'next-sanity';
import config from 'studio/sanity.config';

const sanityClient = createClient(config);

export const fetchSocials = async (): Promise<Social[]> => {
  const res = await sanityClient.fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};

export const fetchSkills = async (): Promise<Skill[]> => {
  const res = await sanityClient.fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
  );

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};

export const fetchPageInfo = async () => {
  const res = await sanityClient.fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};

export const fetchExperience = async (): Promise<Experience[]> => {
  const res = await sanityClient.fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  );

  const data = await res.json();
  const experience: Experience[] = data.experience;

  return experience;
};

export const fetchProjects = async (): Promise<Project[]> => {
  const res = await sanityClient.fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );

  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
