import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../lib/prisma/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const workouts = await prisma.workout.findMany({
      include: {
        sections: {
          include: { workoutSets: true },
        },
      },
    });
    return res.status(200).json(workouts);
  }

  if (req.method === "POST") {
    const { date, coach, location, group, focus, sections } = req.body;
    const workout = await prisma.workout.create({
      data: {
        date: new Date(date),
        coach,
        location,
        group,
        focus,
        sections: {
          create: sections.map((section: any) => ({
            name: section.name,
            workoutSets: {
              create: section.workoutSets.map((set: any) => ({
                repetition: set.repetition,
                distance: set.distance,
                stroke: set.stroke,
                details: set.details,
              })),
            },
          })),
        },
      },
    });
    return res.status(201).json(workout);
  }

  res.status(405).end();
}
