import Head from "next/head";
import Header from "components/Header";
import Hero from "components/Hero";
import About from "components/About";
import ExperienceSection from "components/Experience";
import Skills from "components/Skills";
import Projects from "components/Projects";
import ContactMe from "components/ContactMe";
import { Skill, Social, PageInfo, Project, Experience } from "lib/typings";
import { GetStaticProps } from "next";
import { fetchSocials, fetchExperience, fetchPageInfo, fetchProjects, fetchSkills } from "lib/utils/fetchInfo";



// type Props = {
//   skills: Skill[];
//   socials: Social[];
//   pageInfo: PageInfo;
//   projects: Project[];
//   experience: Experience[];
// }

const Home = (
  // {socials, skills, pageInfo, experience, projects}: Props
  ) => {
  return (
    <>
      <Head>
        <title>Chris Stewart Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className="bg-zinc-800 text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
        scrollbar scrollbar-track-slate-700/30 scrollbar-thumb-blue-400">
          <Header 
          // socials= {socials} 
          />
          <section id='hero' className="snap-start">
            <Hero />
          </section>
          <section id='about' className="snap-center">
            <About />
          </section>
          <section id='experience' className="snap-center">
            <ExperienceSection />
          </section>
          <section id='skills' className="snap-center">
            <Skills />
          </section>
          <section id='projects' className="snap-center">
            <Projects />
          </section>
          <section id='contact' className="snap-center">
            <ContactMe />
          </section>
        </div>
      </main>

    </>
  );
}

export default Home;

// export const getStaticProps: GetStaticProps<Props> = async () => {
// const skills: Skill[] = await fetchSkills();
// const socials: Social[] = await fetchSocials();
// const pageInfo: PageInfo = await fetchPageInfo();
// const projects: Project[] = await fetchProjects();
// const experience: Experience[] = await fetchExperience();

// return {
//   props: {
//     skills,
//     socials,
//     pageInfo,
//     projects,
//     experience,
//   },
// }
// }
