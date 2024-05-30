"use client";

import { Icons } from "../app/components/icons";
import { cn } from "../app/components/lib/utils";
import { AnimatedBeam } from "../app/components/magicui/animated-beam";
import React, { forwardRef, useRef } from "react";
import { IoSchoolOutline } from "react-icons/io5";
import { CiServer } from "react-icons/ci";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

export default function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative mt-5 flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <Circle ref={div1Ref}>
            <IoSchoolOutline size={30} />
          </Circle>
          <Circle ref={div2Ref}>
            <CiServer size={30} />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
      />
    </div>
  );
}
