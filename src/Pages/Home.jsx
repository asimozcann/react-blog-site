import { Fragment } from "react";
import Hero from "../components/Hero/Hero";
import Posts from "../components/Posts/Posts";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Posts />
    </Fragment>
  );
};

export default HomePage;
