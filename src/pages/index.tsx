import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home = () => (
  <div className="bg-gradient-to-r from-indigo-600 to-pink-400">
    <div className="container mx-auto p-8 text-white">
      <Head>
        <title>My Portfolio</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"
        />
      </Head>

      <header className="mb-6 text-center">
        <h1 className="text-4xl font-medium">My Portfolio</h1>
        <p className="text-gray-300">
          Web developer with experience in React, Next.js, and Tailwind CSS
        </p>
      </header>

      <section>
        <h2 className="mb-4 text-2xl font-medium">Recent Work</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-2 text-xl font-medium">Project 1</h3>
            <p className="mb-4 text-gray-600">
              A brief description of the project goes here.
            </p>
            <Link href="/project1">
              <a className="rounded-full bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600">
                View Project
              </a>
            </Link>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-2 text-xl font-medium">Project 2</h3>
            <p className="mb-4 text-gray-600">
              A brief description of the project goes here.
            </p>
            <Link href="/project2">
              <a className="rounded-full bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600">
                View Project
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="my-6">
        <h2 className="mb-4 text-2xl font-medium">About Me</h2>
        <p className="text-gray-300">
          A brief description about myself goes here.
        </p>
      </section>
    </div>
  </div>
);

export default Home;
