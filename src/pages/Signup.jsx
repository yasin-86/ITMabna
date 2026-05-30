import { useState } from "react";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { SignupUserAPI } from "../services/userAPIService";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Signup() {
  const PasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const Schema = yup.object({
    fullName: yup
      .string("نام نامعتبر است")
      .matches(/^(?=.*[a-zA-Z])/, "نام و نام خانوادگی باید شامل حروف باشد")
      .min(6, "حداقل 6 حرف")
      .required("نام و نام خانوادگی الزامی است"),
    email: yup
      .string("نامعتبر است")
      .email("ایمیل معتبر نیست")
      .required("ایمیل الزامی است"),
    password: yup
      .string("نامعتبر است")
      .min(6, "رمز عبور باید دارای حداقل 6 کاراکتر باشد")
      .required("رمز عبور الزامی است")
      .matches(PasswordRegex, "رمز عبور ساده میباشد"),
    confirmPassword: yup
      .string("نام نامعتبر است")
      .oneOf([yup.ref("password"), null], "رمز عبور و تکرار آن یکسان نیستند")
      .required("تکرار رمز عبور الزامی است"),
  });

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: async (values) => {
      setError("");
      const newUser = {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
      };
      try {
        setLoading(true);
        const result = await SignupUserAPI(newUser);
        console.log("user created:", result);
        navigate("/");
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
  });
  console.log(errors);

  return (
    <div className="flex justify-center p-5 h-[90vh]">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900">
            ایجاد حساب کاربری جدید
          </h2>
        </div>
        <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <label className="sr-only">نام و نام خانوادگی</label>
              <Input
                name="fullName"
                className={`relative block w-full appearance-none rounded-md border px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm
                ${
                  errors.fullName
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-green-500 focus:ring-green-500"
                 }`}
                placeholder="نام و نام خانوادگی"
                value={values.fullName}
                onChange={handleChange}
              />
              {errors.fullName ? (
                <p className="text-red-600 mt-1">{errors.fullName}</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <label className="sr-only">آدرس ایمیل</label>

              <Input
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                className={`relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                ${
                  errors.email
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-green-500 focus:ring-green-500"
                 }`}
                placeholder="آدرس ایمیل"
              />
              {errors.email ? (
                <p className="text-red-600 mt-1">{errors.email}</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <label className="sr-only">رمز عبور</label>
              <Input
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                className={`relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm "
                ${
                  errors.password
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-green-500 focus:ring-green-500"
                 }`}
                placeholder="رمز عبور"
              />
              {errors.password ? (
                <p className="text-red-600 mt-1">{errors.password}</p>
              ) : (
                ""
              )}
            </div>

            <div>
              <label className="sr-only">تأیید رمز عبور</label>
              <Input
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                className={`relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                ${
                  errors.confirmPassword
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-green-500 focus:ring-green-500"
                 }`}
                placeholder="تأیید رمز عبور"
              />
              {errors.confirmPassword ? (
                <p className="text-red-600 mt-1">{errors.confirmPassword}</p>
              ) : (
                ""
              )}
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
              value={loading ? "در حال ارسال..." : "تایید"}
            />
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          </div>
        </form>
        <p className="text-center text-sm text-gray-500">
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
