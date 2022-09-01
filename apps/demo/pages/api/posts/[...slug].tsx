import fs from 'fs';
import {resolve} from 'path';

import {NextApiRequest, NextApiResponse} from 'next';

export default async function getPosts(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const posts = fs.readdirSync(resolve(process.cwd(), 'assets/posts'));
        res.status(200).json(posts);
      } catch (e) {
        res.status(500).json(e);
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
