import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, color: white }) => {
  const classes = `button relative h-11 ${px || "px-7"} ${
    white ? "text-n-8" : "text-n-1"
  } ${
    className || ""
  } infline-flex justify-center item-center transition-colors hover:text-color-1`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
