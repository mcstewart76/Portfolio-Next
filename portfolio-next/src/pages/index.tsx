import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "components/Header";
import Hero from "components/Hero";
import About from "components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Chris Stewart Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className="bg-zinc-800 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
          <Header />
          {/* Hero */}
          <section id='hero' className="snap-start">
            <Hero />
          </section>
          {/* About */}
          <section id='about' className="snap-center">
            <About />
          </section>

          {/* Projects */}

          {/* Contact */}

        </div>
      </main>

    </>
  );
}


