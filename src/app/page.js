"use client";
import React from "react";
import Head from "./head/page";
import Features from "./features/features";
// import { Features } from "@headlessui/react/dist/utils/render";

export default function Home() {
  return (
    <main className='flex overflow-x-hidden min-h-screen bg-white w-screen flex-col'>
      {/* <HeaderBrand /> */}
      <Head />
      <Features />
    </main>
  );
}
