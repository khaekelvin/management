"use client";

import { FaUser } from "react-icons/fa";
import { cn } from "../app/components/lib/utils";
import { AnimatedBeam } from "../app/components/magicui/animated-beam";
import React, { forwardRef, useRef } from "react";
import { LuServer } from "react-icons/lu";
import { FaAddressBook, FaSchool } from "react-icons/fa";
import { GiUpgrade } from "react-icons/gi";
import { IoPersonAddSharp } from "react-icons/io5";
import Logo from "./components/Logo";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

export default function AnimatedBeamMultipleInputDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <FaUser className="h-6 w-6" />
          </Circle>
          <Circle ref={div2Ref}>
            <FaSchool className="h-6 w-6" />
          </Circle>
          <Circle ref={div3Ref}>
            <FaAddressBook className="h-6 w-6" />
          </Circle>
          <Circle ref={div4Ref}>
            <GiUpgrade className="h-6 w-6" />
          </Circle>
          <Circle ref={div5Ref}>
            <IoPersonAddSharp className="h-6 w-6" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="h-16 w-16">
            <LuServer className="h-6 w-6" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Logo />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
      />
    </div>
  );
}
