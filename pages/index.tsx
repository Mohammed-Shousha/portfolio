import React from "react";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";

const Home = () => (
  <>
    <Head>
      <title>Mohammed Shousha</title>
      <meta
        name="description"
        content="Hi I am a software engineer passionate about web development. I have experience in building web applications using React, Express.js, MongoDB, and GraphQL."
      />
    </Head>
    <NavBar />
    <Contact />
    <main className="mx-2 sm:mx-10 md:mx-32">
      <About />
      <Skills />
      <Projects />
      <Experiences />
    </main>
    <Footer />
  </>
);

export default Home;
