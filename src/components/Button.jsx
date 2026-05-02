import { Link } from "react-router-dom";

const Buttontypes = {
  primary: "bg-blue-700",
  secondray: "bg-yellow-500",
};
function Button({
  children,
  onClick,
  to,
  varient = "primary",
  className,
  ...rest
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`btn ${Buttontypes[varient]} ${Buttontypes[varient] == "primary" ? "text-blue-800" : "text-white"} ${className} flex justify-center items-center border-2 border-white py-2 px-4 rounded-lg hover:bg-white hover:border-2 hover:border-blue-700 hover:text-blue-800 transition-colors duration-300 font-semibold`}
    >
      {children}
    </Link>
  );
}

export default Button;
