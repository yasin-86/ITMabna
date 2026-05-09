import Input from "../components/Input";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex justify-center p-5 h-[90vh]">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900">
            ایجاد حساب کاربری جدید
          </h2>
        </div>
        <form className="mt-12 space-y-6">
          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <label className="sr-only">نام و نام خانوادگی</label>
              <Input
                name="fullName"
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="نام و نام خانوادگی"
              />
            </div>
            <div>
              <label className="sr-only">آدرس ایمیل</label>

              <Input
                name="email"
                type="email"
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="آدرس ایمیل"
              />
            </div>
            <div>
              <label className="sr-only">رمز عبور</label>
              <Input
                name="password"
                type="password"
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="رمز عبور"
              />
            </div>

            <div>
              <label className="sr-only">تأیید رمز عبور</label>
              <Input
                name="confirmPassword"
                type="password"
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="تأیید رمز عبور"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Input
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ml-2"
              />
              <label className="ml-2 block text-sm text-gray-900">
                با شرایط و قوانین موافق هستم
              </label>
            </div>
          </div>
          <div>
            <Input
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              value="ثبت نام"
            />
          </div>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          حساب کاربری دارید؟{" "}
          <Link
            to="/login"
            className="text-blue-500 font-medium hover:underline"
          >
            وارد شوید
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
