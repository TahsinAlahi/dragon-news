import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";

function AppLayout() {
  const { pathname } = useLocation();

  return (
    <div className="font-sora">
      <Header />
      {(pathname === "/" || pathname.includes("/category")) && <NavBar />}
      <main className="grid lg:grid-cols-4 lg:max-w-screen-lg lg:mx-auto lg:mt-16 gap-2">
        <Outlet />
        <Aside />
      </main>
    </div>
  );
}

export default AppLayout;
