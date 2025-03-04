import React from "react";
import image1 from "../../assets/about/image1.svg";
import image2 from "../../assets/about/image2.svg";
import image3 from "../../assets/about/image3.svg";

const About = () => {
  return (
    <div className="bg-black w-full px-6 sm:px-12 lg:px-20 py-12 mt-[75px]">
      {/* About Us Heading (Laptop & Tablet) */}
      <h2 className="text-7xl font-medium leading-[96px] text-[#1D5F58] text-left mb-[54px] w-auto h-[96px] hidden md:block">
        About Us
      </h2>

      {/* Desktop & Tablet View */}
      <div className="hidden md:block">
        <div className="flex flex-col gap-[72px]">
          {/* Row 1 */}
          <div className="flex items-center justify-start">
            <div className="w-[55%] h-[168px] text-left ml-[10px]">
              <h3 className="text-5xl font-medium text-yellow-500 mb-4">
                Who We Are
              </h3>
              <p className="text-3xl font-medium text-white leading-10">
                An Online Platform where property owners and tenants can
                directly contact each other with ZERO brokerage.
              </p>
            </div>
            <div className="w-[30%] ml-[170px]">
              <img src={image1} alt="Who We Are" className="w-full h-auto" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-start">
            <div className="w-[30%] ml-[50px]">
              <img src={image2} alt="Our Vision" className="w-full h-auto" />
            </div>
            <div className="ml-[195.56px] w-[55%] h-[164px] text-left">
              <h3 className="text-5xl  font-semibold text-yellow-500 mb-4">
                Our Vision
              </h3>
              <p className="text-3xl font-semibold text-white leading-10">
                To make it simple for people to search for and rent homes in new
                cities while doing so from the comfort of their own homes.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-start">
            <div className="ml-[50px] w-[55%] h-[128px] text-left">
              <h3 className="text-5xl  font-semibold text-yellow-500 mb-4">
                Our Mission
              </h3>
              <p className="text-3xl font-semibold text-white leading-10">
                To hold To-Let Boards at all rental properties available nearby.
              </p>
            </div>
            <div className="w-[30%] ml-[183px]">
              <img src={image3} alt="Our Mission" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View (Fully Responsive) */}
      <div className="block md:hidden w-[90%] max-w-[366px] mx-auto flex flex-col gap-[50px]">
        {/* "About Us" Text - Now Centered */}
        <h2 className="text-[40px] font-medium leading-[50px] text-white w-auto mx-auto text-center mb-3">
          About Us
        </h2>

        {[
          {
            img: image1,
            title: "Who We Are",
            text: "An Online Platform where property owners and tenants can directly contact each other with ZERO brokerage.",
          },
          {
            img: image2,
            title: "Our Vision",
            text: "To make it simple for people to search for and rent homes in new cities while doing so from the comfort of their own homes.",
          },
          {
            img: image3,
            title: "Our Mission",
            text: "Find nearby rental properties with 'To-Let' boards. Explore available listings and options in your area with ease.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center gap-[45px]"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full max-w-[362.7px] h-auto"
            />
            <div className="w-full max-w-[361.9px] text-left px-4">
              {/* Reduced Yellow Heading Text Size for One Line */}
              <h3 className="text-[32px] font-semibold text-yellow-500">
                {item.title}
              </h3>
              <p className="text-lg text-white leading-6">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
