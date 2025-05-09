import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Resume", "Portfolio", "Contact"];
  return (
    <>
      <nav className="bg-black text-white px-8 py-7 shadow-md fixed top-0 w-full z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold">Su Pyae</h1>
          {/* <img
          src="/assets/img/supyae_logo.jpg" // Replace with actual image URL
          alt="Profile"
          className="w-full md:w-2/3 lg:w-1/2 rounded-md shadow-md"
        /> */}

          {/* Navigation Links */}
          <ul className=" space-x-2 text-md custom-ul">
            {navItems.map((item) => (
              <li key={item} className="relative group">
                <a
                href={`#${item}`}
                  onClick={() => setActive(item)}
                  className={`relative px-3 py-1 transition-all ${
                    active === item ? "text-white" : "text-gray-300"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-[2px] bg-white transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${
                      active === item ? "scale-x-100" : ""
                    }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" humburger-menu flex-col space-y-1 z-30 "
          >
            <span
              className={`block w-6 h-1 bg-white rounded-full transition-transform ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-1 bg-white rounded-full transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-1 bg-white rounded-full transition-transform ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
          <div
            className={`fixed p-12 pt-28 w-full h-full top-0 left-0  flex justify-center items-center text-2xl font-bold text-black z-10 transform transition-transform duration-300  ${
              isOpen ? "scale-100" : "scale-0"
            }`}
          >
            <ul className="space-y-4 backdrop-blur-sm bg-black/20 p-5  w-full h-full  ">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                  href={`#${item}`}
                    onClick={() => {
                      setActive(item);
                      setIsOpen(false);
                    }}
                    className={`px-3 py-1 transition-all ${
                      active === item ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={`fixed w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.4)]  z-9 ${
          isOpen ? "d-block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default Navbar;
