import React from "react";
import Container from "../../component/Container";

const WorldPress = () => {
  return (
    <div className="mt-[100px]">
      <Container>
        <div className="flex gap-5 items-start">
          <div></div>
          <div className="w-[60%]">
            <h1 className="font-[Work Sans] font-semibold text-[34px] text-[#303030] leading-[35px] max-w-[700px]">
              Rank Your WordPress Website On Google, Get Tips From Top Rated
              WordPress SEO Expert
            </h1>
            <div>
              <form action="#">
                <div className="flex flex-col gap-2 w-[250px] ">
                  <span>Name</span>
                  <input type="text" placeholder="Enter Your Name" />
                </div>
                <div className="flex flex-col gap-2 w-[250px] ">
                  <span>Email</span>
                  <input type="email" placeholder="Enter Your Email" />
                </div>
                <div className="flex flex-col gap-2 w-[250px] ">
                  <span>Number</span>
                  <input type="text" placeholder="Enter Your Number" />
                </div>
                <button>Find Out How</button>
              </form>

             
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorldPress;
