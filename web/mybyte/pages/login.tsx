import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";
import Link from "next/link";
import Image from "next/image";

import googleLogo from "../public/googleLogo.svg"

interface LoginType {
  email: string;
  password: string;
}
const LoginPage = () => {
    const { logIn, logInWithGoogle, hasFirstAndLastName, user } = useAuth();
    const router = useRouter();

  const methods = useForm<LoginType>({ mode: "onBlur" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (user.uid != null) {
      router.push('/dashboard')
    }
  }, [router, user]);

  const onSubmit = async (data: LoginType) => {
    try {
        const logInSuccessful = await logIn(data.email, data.password);
        if (logInSuccessful) {
          router.push("/dashboard");
        } else {
          alert("Log in unsuccessful, make sure your email is verified")
        }
    } catch (error: any) {
        alert("Email/Password does not exist")
        console.log(error.message);
    }
  };

  const onSubmitGoogle = async () => {
    try {
        console.log("BEFORE LOG IN WITH GOOGLE");
        await logInWithGoogle();
        router.push("/getName");
    } catch (error: any) {
        console.log(error.message);
    }
  }

  return (
    <ProtectedRoute>
      <div className="sign-up-form container mx-auto w-96 mt-12 border-2 border-gray-400 overflow-auto">
        <h2 className="px-12 mt-8 text-center text-2xl font-semibold text-blue-900">Log In</h2>

            <div className="mt-8">
              <div className="mt-16 grid space-y-4 px-4">
                        <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" onClick={onSubmitGoogle}  >
                            <div className="relative flex items-center space-x-4 justify-center">
                                <Image src={googleLogo} className="absolute left-0 w-5" alt="google logo"/>
                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                            </div>
                        </button>
                        <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute left-0 w-5 text-gray-700" viewBox="0 0 16 16">
<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Github</span>
                            </div>
                        </button>
                    </div>
                    <div className="relative flex py-5 items-center px-4">
                      <div className="flex-grow border-t border-gray-400"></div>
                      <span className="flex-shrink mx-4 text-gray-400">OR</span>
                      <div className="flex-grow border-t border-gray-400"></div>
                  </div>
              <FormProvider {...methods}>
              <form action="" className="w-80 mx-auto pb-12 px-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center justify-between">
                <label htmlFor="" className="block mb-3 font-sans text-blue-900">
                  Email
                </label>
              </div>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
              />
              {errors.email && <p className="text-red-400">{errors.email.message}</p>}

            <div className="mt-8">
              <div className="flex items-center justify-between">
                <label htmlFor="" className="block mb-3 font-sans text-blue-900">
                  Password
                </label>
              </div>

              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
              />
              {errors.password && <p className="text-red-400">{errors.password.message}</p>}
            </div>

            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className={`h-12 text-center w-2/3 bg-blue-900 border-2 rounded-md hover:shadow-lg hover:bg-blue-800 text-lg transition`}
              >
                <p className="capitalize text-white font-normal">submit</p>
              </button>
            </div>
              <div className="flex justify-center">
                <p><Link href="/resetPassword">Forgot Password</Link></p>
              </div>
          </form>
        </FormProvider>
      </div>
      </div>
    </ProtectedRoute>
  );
};

export default LoginPage;