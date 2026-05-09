import Matter from "matter-js";
import { SAND_WIDTH } from "./constants";

export const defaultBoxArgs: Parameters<typeof Matter.Bodies.rectangle> = [
  Math.random() * SAND_WIDTH,
  50,
  80,
  80,
];

export function addSandParticle(world: Matter.World, boxArgs = defaultBoxArgs) {
  function handleKeyDown(event: KeyboardEvent) {
    const box = Matter.Bodies.rectangle(...boxArgs);
    Matter.World.add(world, box);
    if (event.code !== "Space") {
      return;
    }
  }

  window.addEventListener("keydown", handleKeyDown);
}
