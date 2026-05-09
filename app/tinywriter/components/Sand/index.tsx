import Matter from "matter-js";
import { useEffect, useRef } from "react";
import { SAND_WIDTH } from "./utils/constants";

interface SandProps {
  onReady: (world: Matter.World) => void;
}

export default function Sand({ onReady }: SandProps) {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // create engine
    const engine = Matter.Engine.create();

    // create renderer
    const render = Matter.Render.create({
      element: sceneRef.current!,
      engine,
      options: {
        width: SAND_WIDTH,
        height: 600,
        wireframes: false,
        background: "#111",
      },
    });

    // create floor
    const floor = Matter.Bodies.rectangle(0, 580, 810, 40, {
      isStatic: true,
    });

    // create walls
    // const wall = Matter.Bodies.rectangle();

    Matter.World.add(engine.world, floor);

    // fire callback so parent can add objects
    onReady(engine.world);

    // start engine
    Matter.Render.run(render);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // cleanup
    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);

      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);

      render.canvas.remove();
    };
  }, [onReady]);

  return <div ref={sceneRef} />;
}
