import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`relative ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } ${className || ""}`}
    >
      {children}
      <div className="hidden absolute w-0.25 h-full top-0 left-5 md:block lg:left-7.5 xl:left-10 bg-stroke-1 pointer-events-none" />
      <div className="hidden absolute w-0.25 h-full top-0 right-5 md:block lg:left-7.5 xl:right-10 bg-stroke-1 pointer-events-none" />
      {crosses && (
        <>
          <div
            className={`hidden absolute h-0.5 top-0 right-7.5 left-7.5 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block right-10 xl:left-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
