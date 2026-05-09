import Matter from "matter-js";
import { useEffect, useRef } from "react";
import { SAND_HEIGHT, SAND_WIDTH } from "./utils/constants";

interface SandProps {
  onReady: (engine: Matter.Engine, world: Matter.World) => void;
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
        height: SAND_HEIGHT,
        wireframes: false,
        background: "#111",
      },
    });

    // create floor
    const floor = Matter.Bodies.rectangle(0, SAND_HEIGHT, SAND_WIDTH * 2, 20, {
      isStatic: true,
      render: {
        fillStyle: "black",
      },
    });

    // create walls
    const wallLeft = Matter.Bodies.rectangle(0, 0, 20, SAND_HEIGHT * 2, {
      isStatic: true,
      render: {
        fillStyle: "black",
      },
    });

    const wallRight = Matter.Bodies.rectangle(
      SAND_WIDTH,
      0,
      20,
      SAND_HEIGHT * 2,
      {
        isStatic: true,
        render: {
          fillStyle: "black",
        },
      },
    );

    Matter.World.add(engine.world, wallLeft);
    Matter.World.add(engine.world, wallRight);
    Matter.World.add(engine.world, floor);

    // fire callback so parent can add objects
    onReady(engine, engine.world);

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
