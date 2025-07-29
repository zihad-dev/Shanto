import Navber from "./Navber";
import BottomPart from "./BottomPart";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navber />
      <div className="pt-[-100px]">
        <Outlet />
      </div>
      <BottomPart />
    </>
  );
};

export default Layout;
