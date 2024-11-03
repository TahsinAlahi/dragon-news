import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";

function AppLayout() {
  return (
    <div>
      <Header />
      <NavBar />
      <main className="grid lg:grid-cols-4 lg:max-w-screen-lg lg:mx-auto lg:mt-16">
        <Outlet />

        <Aside />
      </main>
    </div>
  );
}

export default AppLayout;
