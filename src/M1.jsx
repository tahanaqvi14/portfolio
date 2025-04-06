import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const M1 = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);

  useEffect(() => {
    // Set up engine and renderer
    const engine = Matter.Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;
    engineRef.current = engine;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    const runner = Matter.Runner.create();

    const world = engine.world;
    world.gravity.scale = 0;

    // Create central attractor
    const attractiveBody = Matter.Bodies.circle(
      window.innerWidth / 2,
      window.innerHeight / 2,
      Math.max(window.innerWidth / 25, window.innerHeight / 25) / 2,
      {
        isStatic: true,
        render: { fillStyle: "#000", strokeStyle: "#000", lineWidth: 0 },
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y) * 1e-6,
              };
            },
          ],
        },
      }
    );

    Matter.World.add(world, attractiveBody);

    // Add random bodies
    for (let i = 0; i < 60; i++) {
      const x = Matter.Common.random(0, window.innerWidth);
      const y = Matter.Common.random(0, window.innerHeight);
      const size = Matter.Common.random(10, 80);
      const sides = Matter.Common.random(3, 6);
      const shape = Matter.Bodies.polygon(x, y, sides, size, {
        mass: size / 20,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.random() * 360,
        render: { fillStyle: "#222", strokeStyle: "#000", lineWidth: 2 },
      });

      Matter.World.add(world, shape);
    }

    // Handle mouse interaction
    const mouse = Matter.Mouse.create(render.canvas);
    Matter.Events.on(engine, "afterUpdate", () => {
      if (!mouse.position.x) return;
      Matter.Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    // Run Matter.js
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    // Cleanup on unmount
    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(engine.world);
      Matter.Engine.clear(engine);
    };
  }, []);

  return <div ref={sceneRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default M1;
