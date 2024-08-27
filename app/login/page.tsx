import { BlueBtn, GoogleBtn } from "@components/ui/Buttons";
import { Input } from "@components/form/input";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center pb-28 bg-gray-50">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
          <Image
            src="/assets/images/qmi-logo.png"
            width={40}
            height={40}
            alt="qayaami logo"
            className="mx-auto"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log In to Qayaami
          </h2>
        </div>

        <div className="mt-10 px-5 sm:px-0 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow-xl rounded-lg sm:px-10">
            <form action="#" method="POST" className="space-y-6">
              <Input
                name="email"
                type="text"
                label="Phone number or Email"
                htmlFor="email"
                required
              />
              <Input
                name="password"
                type="password"
                required
                label="Password"
                htmlFor="password"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm leading-6">
                  <Link
                    href="#"
                    className="font-semibold text-blue-600 hover:text-blue-500 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              <BlueBtn name="Log In" type="submit" />
            </form>

            <div>
              <div className="relative mt-10">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <GoogleBtn />
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              href="#"
              className="font-semibold leading-6 text-blue-600 hover:text-blue-500 hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
