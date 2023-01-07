import React, {useEffect, useState} from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

interface RegisterNameType {
    first_name: string;
    last_name: string;
}

const RegisterNamePage = () => {
    const { user, userInfo, storeFirstAndLastName, hasFirstAndLastName, setUserInformation } = useAuth();
    const [hasName, setHasName] = useState(false);
    const router = useRouter();

    const methods = useForm<RegisterNameType>({ mode: "onBlur" });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;

    useEffect(() => {
      // async function get_user_information() {
      //   await setUserInformation();
      //   //setFirstName(userInfo.first_name)
      // }

      // get_user_information();
      console.log(userInfo)
      if (userInfo.first_name != null) {

        router.push("/dashboard")
      }

      // (async () => {
      //   const name = await hasFirstAndLastName();
      //   console.log("INSIDE USE EFFECT NAME");
      //   setHasName(name);
      // })();
      // console.log(hasName);
      // if (hasName) {
      //   console.log("ENTERED GET NAME IF STATEMENT");
      //   router.push("/dashboard");
      // }
    }, [router, userInfo])

    const onSubmit = async (data: RegisterNameType) => {
        try {
            console.log(user);
            //await hasFirstAndLastName();
            storeFirstAndLastName(data.first_name, data.last_name);
            router.push("/dashboard");
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return (
        <div className="sign-up-form container mx-auto w-96 mt-12 border-2 border-gray-400">
          <h2 className="px-12 mt-8 text-center text-2xl font-semibold text-blue-900">Sign Up</h2>
          <FormProvider {...methods}>
            <form action="" className="w-80 mx-auto pb-12 px-4" onSubmit={handleSubmit(onSubmit)}>
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
      );
};

export default RegisterNamePage;