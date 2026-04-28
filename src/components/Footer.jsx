import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 px-12 shadow-inner font-sans">
      <div className="container grid mx-auto grid-col-1 md:grid-cols-3 gap-20">
        <div className="p-7">
          <h2 className="text-blue-300 font-medium text-[20px]">اسم مجموعه</h2>
          <p className="py-2 text-gray-300 font-normal text-[17px]">
            آیتی مبنا
          </p>
          <p className="text-gray-300 font-normal text-[17px]">
            مجموعه تخصصی فناوری اطلاعات مبنا
          </p>
        </div>
        <div className="p-7">
          <h2 className="text-blue-300 font-medium text-[20px]">
            اطلاعات تماس
          </h2>
          <p className="py-2 text-gray-300 font-normal text-[17px]">
            آدرس:شهریار
          </p>
          <p className="text-gray-300 font-normal text-[17px]">
            شماره تماس :0912345678
          </p>
        </div>
        <div className="p-7">
          <h2 className="text-blue-300 font-medium text-[20px]">
            صفحات کاربردی
          </h2>
          <ul>
            <li className="py-2">
              <Link
                to="/services"
                className=" text-gray-300 font-normal text-[17px]"
              >
                خدمات
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className=" text-gray-300 font-normal text-[17px]"
              >
                تماس با ما
              </Link>
            </li>
            <li className="pt-2">
              <Link to="/blog" className=" text-gray-300 font-normal text-[17px]">مقالات</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-gray-400 text-sm pb-6 flex justify-center items-center">
        © {currentYear} حق کپی رایت محفوظ است.
      </p>
    </footer>
  );
}

export default Footer;
