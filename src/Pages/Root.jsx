import { Fragment } from "react";
import MainNavigation from "../components/Navigation/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main className="pt-[70px]">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default RootLayout;
