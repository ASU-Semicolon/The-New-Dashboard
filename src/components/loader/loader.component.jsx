import "./loader.styles.css";
import SemiColonLogo from "../../assets/semicolon Logo.png";
const Loader = ({
  pageLoader = false,
  isLoading,
  className,
  ...otherProps
}) => {
  const loaderClass = isLoading ? "active" : "";
  const loaderTypeClass = pageLoader ? "page-loader" : "section-loader";
  return (
    <section
      className={`loader-container ${loaderClass} ${loaderTypeClass} ${
        className ? className : ""
      }`}
      {...otherProps}
    >
      <img src={SemiColonLogo} alt="SemiColon Logo" className="loader-logo" />
      <div className="fade-circle"></div>
      <div className="fade-circle seconde-cirlce"></div>
    </section>
  );
};
export default Loader;
