const Heading = ({ title, className }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto lg:mb-20 mb-12`}>
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
};

export default Heading;
