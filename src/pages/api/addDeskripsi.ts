import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { deskripsi } = req.body;

    const newDeskripsi = await prisma.deskripsi.create({
      data: {
        data: deskripsi,
      },
    });

    return res.status(201).json(newDeskripsi);
  }
}
