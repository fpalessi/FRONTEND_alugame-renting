import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="px-16 py-4 flex flex-col min-h-screen max-w-8xl mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
