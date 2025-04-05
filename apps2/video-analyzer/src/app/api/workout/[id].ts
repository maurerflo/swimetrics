import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const workout = await prisma.workout.findUnique({
      where: { id: id as string },
      include: {
        sections: {
          include: { workoutSets: true },
        },
      },
    });
    if (!workout) return res.status(404).json({ error: 'Workout not found' });
    return res.status(200).json(workout);
  }

  if (req.method === 'DELETE') {
    await prisma.workout.delete({
      where: { id: id as string },
    });
    return res.status(204).end();
  }

  res.status(405).end();
}
