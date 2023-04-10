import React from "react";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import ContactSidebar from "@/components/ContactSidebar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";

const Home = () => (
  <>
    <Head>
      <title>Mohammed Shousha</title>
    </Head>
    <NavBar />
    <ContactSidebar />
    <main className="mx-2 sm:mx-10 md:mx-32">
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Footer />
    </main>
  </>
);

export default Home;
