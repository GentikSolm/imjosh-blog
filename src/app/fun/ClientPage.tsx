"use client";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { useTheme } from "next-themes";
import type P5 from "p5";
import { type Vector } from "p5";
import { useEffect, useRef } from "react";

function sketch(
  p5: P5,
  opts: {
    width: number;
    background: string;
  },
) {
  let d: number;

  class Mold {
    x: number;
    y: number;
    r: number;
    heading: number;
    vx: number;
    vy: number;
    rotAngle: number;
    rSensorPos: Vector;
    lSensorPos: Vector;
    fSensorPos: Vector;
    sensorAngle: number;
    sensorDist: number;
    constructor() {
      // Mold variables
      // this.x = random(width);
      // this.y = random(height);
      this.x = p5.random(p5.width / 2 - 20, p5.width / 2 + 20);
      this.y = p5.random(p5.height / 2 - 20, p5.height / 2 + 20);
      this.r = 0.5;

      this.heading = p5.random(360);
      this.vx = p5.cos(this.heading);
      this.vy = p5.sin(this.heading);
      this.rotAngle = 45;

      // Sensor variables
      this.rSensorPos = p5.createVector(0, 0);
      this.lSensorPos = p5.createVector(0, 0);
      this.fSensorPos = p5.createVector(0, 0);
      this.sensorAngle = 45;
      this.sensorDist = 10;
    }

    update() {
      this.vx = p5.cos(this.heading);
      this.vy = p5.sin(this.heading);

      // Using % Modulo expression to wrap around the canvas
      this.x = (this.x + this.vx + p5.width) % p5.width;
      this.y = (this.y + this.vy + p5.height) % p5.height;

      // Get 3 sensor positions based on current position and heading
      this.getSensorPos(this.rSensorPos, this.heading + this.sensorAngle);
      this.getSensorPos(this.lSensorPos, this.heading - this.sensorAngle);
      this.getSensorPos(this.fSensorPos, this.heading);

      // Get indices of the 3 sensor positions and get the color values from those indices
      let index;
      index =
        4 * (d * p5.floor(this.rSensorPos.y)) * (d * p5.width) +
        4 * (d * p5.floor(this.rSensorPos.x));
      const r = p5.pixels[index]!;

      index =
        4 * (d * p5.floor(this.lSensorPos.y)) * (d * p5.width) +
        4 * (d * p5.floor(this.lSensorPos.x));
      const l = p5.pixels[index]!;

      index =
        4 * (d * p5.floor(this.fSensorPos.y)) * (d * p5.width) +
        4 * (d * p5.floor(this.fSensorPos.x));
      const f = p5.pixels[index]!;

      // Compare values of f, l, and r to determine movement
      if (f > l && f > r) {
        this.heading += 0;
      } else if (f < l && f < r) {
        if (p5.random(1) < 0.5) {
          this.heading += this.rotAngle;
        } else {
          this.heading -= this.rotAngle;
        }
      } else if (l > r) {
        this.heading += -this.rotAngle;
      } else if (r > l) {
        this.heading += this.rotAngle;
      }
    }

    display() {
      p5.noStroke();
      p5.fill(255);
      p5.ellipse(this.x, this.y, this.r * 2, this.r * 2);

      // line(this.x, this.y, this.x + this.r*3*this.vx, this.y + this.r*3*this.vy);
      // fill(255, 0, 0);
      // ellipse(this.rSensorPos.x, this.rSensorPos.y, this.r*2, this.r*2);
      // ellipse(this.lSensorPos.x, this.lSensorPos.y, this.r*2, this.r*2);
      // ellipse(this.fSensorPos.x, this.fSensorPos.y, this.r*2, this.r*2);
    }

    getSensorPos(sensor: Vector, angle: number) {
      sensor.x =
        (this.x + this.sensorDist * p5.cos(angle) + p5.width) % p5.width;
      sensor.y =
        (this.y + this.sensorDist * p5.sin(angle) + p5.height) % p5.height;
    }
  }

  const molds: Mold[] = [];
  const num = 4000;
  p5.setup = () => {
    console.log(opts.width, p5.windowHeight);
    p5.createCanvas(opts.width, p5.windowHeight);
    p5.angleMode(p5.DEGREES);
    d = p5.pixelDensity();

    for (let i = 0; i < num; i++) {
      molds[i] = new Mold();
    }
  };

  p5.draw = () => {
    p5.background(opts.background);
    p5.loadPixels();

    for (let i = 0; i < num; i++) {
      molds[i]!.update();
      molds[i]!.display();
    }
  };
}

export default function CLientPage() {
  const element = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  return (
    <div ref={element}>
      <NextReactP5Wrapper
        sketch={(p5) =>
          sketch(p5, {
            width: element.current!.clientWidth,
            background: '#00000005'
          })
        }
      />
    </div>
  );
}
