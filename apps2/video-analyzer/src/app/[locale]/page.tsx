import { TrainingPlan } from '../../components/workoutTypes';
import Hero from '../../components/main/hero';

const work: TrainingPlan = {
  date: new Date('2025-01-20T17:45:00.000Z'),
  coach: 'Niklas',
  location: 'Hallenbad Nellingen',
  group: 'Leistungsgruppe 1',
  focus: 'GLA / Core Stabi / K Technik / n bisschen Atum',
  sections: [
    {
      name: 'Warmup',
      workoutSets: [
        {
          repetition: 1,
          distance: 200,
          stroke: 'K u. R',
          details: {
            type: 'note',
            data: ' 1. 50 K Abschlag + 50 K Hesitation Drill + 50 R Abschlag + 50 R Klappmesser',
          },
        },
        {
          repetition: 1,
          distance: 200,
          stroke: 'B',
          details: {
            type: 'note',
            data: "'Lang machen / Gleitphase!",
          },
        },
      ],
    },
    {
      name: 'Main 1',
      workoutSets: [
        {
          repetition: 3,
          distance: 200,
          stroke: 'K',
          details: {
            type: 'note',
            data: "i.W 50 Ar m. Pull Buoys + 50 Beine; Tempo: mit Anspruch",
          },
        },
        {
          repetition: 3,
          distance: 200,
          stroke: 'K',
          details: {
            type: 'note',
            data: 'Aus jeder Wand heraus 6 schnelle Züge, Tempo: GA1 u. GA2 (schnelle Züge)  ',
          },
        },
        {
          repetition: 3,
          distance: 200,
          stroke: 'Lagen',
          details: {
            type: 'note',
            data: 'Rückwärts (K, B, R , D)',
          },
        },
        {
          repetition: 1,
          distance: 50,
          stroke: 'LoDe',
          details: {
            type: 'note',
            data: '',
          },
        },
      ],
    },
    {
      name: 'Main 2',
      workoutSets: [
        {
          repetition: 3,
          distance: 200,
          stroke: 'K',
          details: {
            type: 'note',
            data: "Sauber Liegen, Von ausen pushen; den letzen ohne Finns?? evtl Reicht zeit auch für 4ten",
          },
        },
      ],
    },
    {
      name: 'Ausschwimmen',
      workoutSets: [
        {
          repetition: 1,
          distance: 150,
          stroke: "'AUS bel.",
          details: {
            type: 'note',
            data: "Gerne 50 Badewanne/ 50 Torpedo / 50 Bel.",
          },
        },
      ],
    },
  ],
};

export default function Index() {
  return (
    <>
      <Hero />
      {/*<Workout workout={work}></Workout>*/}
    </>
  );
}
