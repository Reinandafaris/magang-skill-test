import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { image } = req.body;

    const newImage = await prisma.image.create({
      data: {
        url: image,
      },
    });

    return res.status(201).json(newImage);
  }
}
