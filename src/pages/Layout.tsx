import { Outlet } from "react-router";
import { Navbar } from "../components/header/Navbar";

export const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>@2024 Pro Go Degens Developers</footer>
    </>
  );
};
