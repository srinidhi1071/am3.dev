import { useState, useEffect } from "react";
import Head from "next/head";

import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  }, []);
  return (
    <div
      className="w-screen h-screen bg-space-light absolute transition-all ease-in-out text-primary overflow-y-auto"
      data-theme={theme}
    >
      <div className="container w-full h-full max-w-screen-lg mx-auto">
        <Head>
          <title>Ajay Manish Vanaparthi</title>
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="The portfolio of Ajay Manish." />
          <meta name="robots" content="index,follow" />
          <meta
            name="keywords"
            content="designer, ux, ui, web design, ui developer, India, App Developer, Ajay, Ajay Manish"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="md:h-full md:min-h-screen w-full">
          <Header
            theme={theme}
            changeTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
          <Banner />
        </div>
        <div className="md:min-h-screen w-full md:h-full">
          <About />
        </div>
        <div className="md:min-h-screen w-full md:h-full">
          <Work />
        </div>
        <div className="md:min-h-screen w-full md:h-full">
          <Contact />
        </div>
      </div>
    </div>
  );
}
