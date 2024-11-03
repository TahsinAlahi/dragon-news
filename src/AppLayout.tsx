import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";

function AppLayout() {
  return (
    <div>
      <Header />
      <NavBar />
      <main className="flex items-start justify-center lg:max-w-screen-lg lg:mx-auto lg:mt-16">
        <div className="flex-grow bg-red-200 h-40">
          <Outlet />
        </div>
        <Aside />
      </main>
    </div>
  );
}

export default AppLayout;
