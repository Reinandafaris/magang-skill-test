import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone } = req.body;

    const newContact = await prisma.contact.createMany({
      data: [
        {
          name,
          email,
          phone,
        },
      ],
    });

    return res.status(201).json(newContact);
  }
}
