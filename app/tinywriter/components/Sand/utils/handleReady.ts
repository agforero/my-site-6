import Matter from "matter-js";
import { MIN_SAND_PARTICLE_SIZE, SAND_WIDTH } from "./constants";

export const getDefaultBoxArgs = (): Parameters<
  typeof Matter.Bodies.rectangle
> => {
  const size = Math.max(Math.random() * 25, MIN_SAND_PARTICLE_SIZE);
  return [Math.random() * SAND_WIDTH, -50, size, size];
};

export const getDefaultPolygonArgs = (): Parameters<
  typeof Matter.Bodies.polygon
> => [
  Math.random() * SAND_WIDTH,
  -50,
  Math.max(Math.ceil(Math.random() * 8), 3),
  Math.max(Math.random() * 20, MIN_SAND_PARTICLE_SIZE),
];

type addSandParticleBaseArgs = {
  world: Matter.World;
};
type addSandParticleArgs = addSandParticleBaseArgs &
  (
    | {
        type: "box";
        params?: Parameters<typeof Matter.Bodies.rectangle>;
      }
    | {
        type: "polygon";
        params?: Parameters<typeof Matter.Bodies.polygon>;
      }
  );

export function addSandParticle(args: addSandParticleArgs) {
  const { type, world, params } = args;
  switch (type) {
    case "box": {
      const box = Matter.Bodies.rectangle(...(params || getDefaultBoxArgs()));
      Matter.World.add(world, box);
      return;
    }
    case "polygon": {
      const polygon = Matter.Bodies.polygon(
        ...(params || getDefaultPolygonArgs()),
      );
      Matter.World.add(world, polygon);
      return;
    }
  }
}
