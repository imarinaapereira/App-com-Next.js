import Header from "../../src/app/Header";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js</a>
        </h1>
      </main>
    </>
  )
}

export default Home;