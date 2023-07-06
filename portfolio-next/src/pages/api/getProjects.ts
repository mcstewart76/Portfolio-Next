import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../../sanity';
import { Project } from 'lib/typings';

type Data = {
  project: Project[];
};

const query = groq`
*[_type == "project"] {
  ...,
  technology[]->
}

`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const project: Project[] = await sanityClient.fetch(query);

  res.status(200).json({ project });
}
