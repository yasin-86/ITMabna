import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const Menuitems = [
    { name: "خانه", path: "/" },
    { name: "درباره ما", path: "/about" },
    { name: "دوره های آموزشی", path: "/curses" },
    { name: "کلاس های حضوری", path: "/in-person-classes" },
    { name: "کلاس های آنلاین", path: "/online-classes" },
    { name: "سوالات متداول", path: "/faq" },
  ];
  return (
    <nav className="bg-blue-600 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-2xl font-bold hover:text-blue-200 transition-colors duration-300"
        >
          آموزشگاه ITMabna
        </Link>
        <div className="flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {Menuitems.map((item) => {
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white text-[16px] hover:text-blue-200 transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <Button varient="primary" to="/signup">
              ثبت نام
            </Button>
            <Button varient="secondray" to="/login">
              ورود
            </Button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
