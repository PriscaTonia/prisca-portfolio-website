import About from "@/components/about";
import Contact from "@/components/contact";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Head from "next/head";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prisca | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
