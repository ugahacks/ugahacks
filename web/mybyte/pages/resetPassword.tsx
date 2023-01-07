import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/router';

export default function ResetPassword() {
  interface resetPasswordForm {
    email: string
  }

  const router = useRouter();
  const { resetPassword } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<resetPasswordForm>();
  const onSubmit: SubmitHandler<resetPasswordForm> = data => {
    resetPassword(data.email)
    router.push("/resetPasswordSuccess") // TODO: Add whether the password reset was sent successfully (OPTIONAL)
  }

  return (
    <div className="sign-up-form container mx-auto w-96 mt-12 border-2 border-gray-400">
      <h2 className="px-12 mt-8 text-center text-2xl font-semibold text-blue-900">Password Reset</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <label htmlFor="" className="block mb-3 font-sans text-blue-900">
                Email
              </label>
            </div>

            <input
              {...register("email", {required: "Please enter your email address to reset your password"})}
              type="text"
              className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
            />
            {errors.email && <p className="text-red-400">{errors.email.message}</p>}
          </div>

          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className={`h-12 text-center w-2/3 bg-blue-900 border-2 rounded-md hover:shadow-lg hover:bg-blue-800 text-lg transition`}
            >
              <p className="capitalize text-white font-normal">Submit</p>
            </button>
          </div>
        </form>
    </div>
  );
}
