import type { NextPage } from "next";
import Head from "next/head";
import ResumeTemplate from "../components/templates/ResumeTemplate";

const Home: NextPage = () => {
  return (
    <div className="m-0 p-0">
      <Head>
        <title>남수연 | Suyeon Nam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ResumeTemplate />
    </div>
  );
};

export default Home;
