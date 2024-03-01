import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) {
      return;
    }

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed w-full top-0 left-0 z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="px-5 lg:px-7.5 xl:px-10 max-lg:py-4 flex items-center">
        <a href="#hero" className="w-[12rem] xl:mr-8 block">
          <img src={brainwave} alt="Brainwave" width={190} height={40} />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] right-0 bottom-0 left-0 bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent`}
        >
          <div className="relative m-auto flex lg:flex-row flex-col justify-center items-center z-2">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`relative lg:-mr-0.25 py-6 md:py-8 xl:px-12 px-6 block font-code lg:font-semibold lg:leading-5 uppercase text-2xl text-n-1 lg:text-xs transition-colors lg:hover:text-n-1 hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } ${
                  item.url === pathName.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="mr-8 lg:block hidden button text-n-1/50 transition-colors hover:text-n-1"
        >
          New account
        </a>
        <Button href="#login" className="lg:flex hidden">
          Sign in
        </Button>
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
