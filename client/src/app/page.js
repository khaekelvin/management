"use client";
import React from "react";
import Head from "./head/page";
import Features from "./features/features";
import Testimonials from "./testimonials/testimonials";
import Stats from "./stats/page";
import Blog from "./blog/page";
import CTA from "./cta/page";


export default function Home() {
  return (
    <main className='flex overflow-x-hidden min-h-screen bg-white w-screen flex-col'>
      <Head />
      <Features />
      <Testimonials />
      <Blog />
      <Stats />
      <CTA />
      
    </main>
  );
}
