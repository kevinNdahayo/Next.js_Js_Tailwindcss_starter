import Head from "next/head";
import ProjectCard from "../components/project";
export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin Ndahayo</title>
      </Head>
      <section className="">
        <ProjectCard />
      </section>
    </>
  );
}
