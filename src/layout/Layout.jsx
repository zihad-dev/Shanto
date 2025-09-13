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
       {/* ✅ WhatsApp Floating Button */}
              <div>
                <a
                  href="https://wa.me/8801749286221?text=Hello%20I%20want%20to%20rank%20my%20WordPress%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    style={{
                      width: "60px",
                      height: "60px",
                      position: "fixed",
                      bottom: "20px",
                      right: "20px",
                      zIndex: 1000,
                    }}
                  />
                </a>
              </div>
    </>
  );
};

export default Layout;
