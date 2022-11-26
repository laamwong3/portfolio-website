import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import s from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Technologies />
    </>
  );
};

export default Home;
