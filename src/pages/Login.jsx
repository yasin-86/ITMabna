import Input from "../components/Input";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center p-5 h-[90vh]">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">خوش آمدید :)</h2>
          <p className="text-gray-500 mt-4">لطفاً وارد حساب کاربری خود شوید</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-3">
              ایمیل
            </label>
            <Input
            name="email"
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-right"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-3">
              رمز عبور
            </label>
            <Input
            name="password"
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-right"
            />
          </div>

          <div className="flex items-center justify-between text-sm mb-7 mt-7">
            <Link className="text-blue-500 hover:underline">
             رمز عبور را فراموش کرده‌اید؟
            </Link>
            <label className="flex items-center space-x-reverse space-x-2">
              <Input
              name="checkbox"
                type="checkbox"
                className="rounded text-blue-500 focus:ring-blue-400"
              />
              <span className="text-gray-600 mr-1">مرا به خاطر بسپار</span>
            </label>
          </div>

          <Input
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
            value="ورود"
          />
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          حساب کاربری ندارید؟{" "}
          <Link
            to="/signup"
            className="text-blue-500 font-medium hover:underline"
          >
            ثبت‌نام کنید
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
