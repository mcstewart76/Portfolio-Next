import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../../sanity';
import { Experience } from 'lib/typings';

type Data = {
  experience: Experience[];
};

const query = groq`
*[_type == "experience"]
{
  ...,
  technology[]->
}
`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experience: Experience[] = await sanityClient.fetch(query);

  res.status(200).json({ experience });
}
