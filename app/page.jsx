"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import States from "@/components/States";
import Testimonials from "@/components/Testimonials";
import TopBar from "@/components/TopBar";
import Work from "@/components/Work";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [headerActive, setheaderActive] = useState(false);
  useEffect(() => {
    function handelScroll() {
      setheaderActive(window.scrollY > 50);
    }
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <main className="overflow-hidden">
      <TopBar />
      {/* static header */}
      <div className="relative z-10">
        <Header />
      </div>
      {/* animated header */}
      <div
        className={`fixed z-50 left-0 top-0 w-full transition-transform duration-500 ${
          headerActive ? "translate-y-0" : "-translate-y-full"
        } `}
      >
        <Header />
      </div>
      <Hero />
      <About />
      <States />
      <Services />
      <Work />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
