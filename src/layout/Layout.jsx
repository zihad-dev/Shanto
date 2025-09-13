import Navber from "./Navber";
import BottomPart from "./BottomPart";
import { Outlet } from "react-router-dom";
import WhatAppApi from "../component/WhatAppApi";

const Layout = () => {
  return (
    <>
      <Navber />
      <div className="pt-[-100px]">
        <Outlet />
      </div>
      <BottomPart />
       <WhatAppApi />
    </>
  );
};

export default Layout;
