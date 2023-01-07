import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { FirebaseError } from "firebase/app";
import googleLogo from "../public/googleLogo.svg"
import Image from "next/image";

interface SignupType {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    password_confirm: string;
}

const SignupPage = () => {
    const { signUp, logInWithGoogle } = useAuth();
    const router = useRouter();

    const methods = useForm<SignupType>({ mode: "onBlur" });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;

    const onSubmit = async (data: SignupType) => {
        try {
            await signUp(data.first_name, data.last_name, data.email, data.password);
            router.push("/emailVerification");
        } catch (err: any) {
          if (err instanceof FirebaseError) {
            console.log(err.code)
            console.log(err.name)
            if (err.code == "auth/email-already-in-use") {
              alert("This email is already registered with us, please login using that email")
              router.push('/login')
            } else if (err.code == "auth/weak-password") {
              // at least 6 characters long
            }
          }
            console.log(err.message);
        }
    };

    const onSubmitGoogle = async () => {
        try {
            await logInWithGoogle();
            router.push("/getName");
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return (
        <div className="sign-up-form container mx-auto w-96 mt-12 mb-12 border-2 border-gray-400">
          <h2 className="px-12 mt-8 text-center text-2xl font-semibold text-blue-900">Sign Up</h2>
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
              <div className="mt-2">
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
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="block mb-3 font-sans text-blue-900">
                    First Name
                  </label>
                </div>
    
                <input
                  type="text"
                  {...register("first_name", { required: "First name is required" })}
                  className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                />
                {errors.first_name && <p className="text-red-400">{errors.first_name.message}</p>}
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="block mb-3 font-sans text-blue-900">
                    Last Name
                  </label>
                </div>
    
                <input
                  type="text"
                  {...register("last_name", { required: "Last name is required" })}
                  className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                />
                {errors.last_name && <p className="text-red-400">{errors.last_name.message}</p>}
              </div>
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
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="block mb-3 font-sans text-blue-900">
                    Confirm Password
                  </label>
                </div>
    
                <input
                  type="password"
                  {...register("password_confirm", {
                    required: "Verify your password",
                  })}
                  className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                />
                {errors.password_confirm && (
                  <p className="text-red-400">{errors.password_confirm.message}</p>
                )}
              </div>
              <div className="flex justify-center pt-8">
                <button
                  type="submit"
                  className={`h-12 text-center w-2/3 bg-blue-900 border-2 rounded-md hover:shadow-lg hover:bg-blue-800 text-lg transition`}
                >
                  <p className="capitalize text-white font-normal">submit</p>
                </button>
              </div>
            </form>
          </FormProvider>
          </div>
        </div>
      );
};

export default SignupPage;