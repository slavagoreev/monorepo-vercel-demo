import fs from 'fs';
import {resolve} from 'path';

import {NextApiRequest, NextApiResponse} from 'next';

export const getPosts = () => {
  return fs.readdirSync(resolve(process.cwd(), 'assets/posts'));

}


export default async function(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        res.status(200).json(getPosts());
      } catch (e) {
        res.status(500).json(e);
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
