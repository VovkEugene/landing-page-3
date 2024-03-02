import { useRef } from "react";
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "../constants";
import { BackgroundCircles, Gradient, BottomLine } from "./design/Hero";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      id="hero"
      className="-mt-[5.25rem] pt-[12rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div ref={parallaxRef} className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto mb-[4rem] md:mb-20 lg:mb:[6rem] text-center">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{" "}
            <span className="relative inline-block">
              Brainwave
              <img
                src={curve}
                alt="Curve"
                className="absolute w-full top-full left-0 xl:-mt-2"
                width={624}
                height={28}
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto lg:mb-8 mb-6 text-n-2">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>
        <div className="relative md:max-w-5xl max-w-[23rem] mx-auto xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative rounded-[1rem] bg-n-8">
              <div className="h-[1.4rem] rounded-t-[0.9rem] bg-n-10" />
              <div className="lg:aspect-[1024/490] md:aspect-[688/490] aspect-[33/40] rounded-b-[0.9rem] overflow-hidden">
                <img
                  src={robot}
                  alt="AI"
                  className="w-full md:-translate-y-[10%] lg:-translate-y-[23%] translate-y-[8%] md:scale-[1] scale-[1.7]"
                  width={1024}
                  height={490}
                />
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute bottom-[7.5rem] -left-[5.5rem] py-1 px-1 xl:flex border border-n-1/10 rounded-2xl bg-n-9/40 backdrop-blur">
                    {heroIcons.map((icon, index) => (
                      <li key={index} className="p-5">
                        <img src={icon} alt={icon} width={24} height={25} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute w-[18rem] xl:flex -right-[5.5rem] bottom-[11rem]"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute md:w-[138%] w-[234%] md:-top-[46%] lg:-top-[104%] -top-[54%] left-1/2 -translate-x-1/2">
            <img
              src={heroBackground}
              alt="hero"
              className="w-full"
              width={1440}
              height={1800}
            />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden relative z-10 mt:20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
