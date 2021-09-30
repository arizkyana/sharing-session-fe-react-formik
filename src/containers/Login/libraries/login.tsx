import { Formik } from "formik";
import { ILoginForm } from "./login.types";
import validationSchema from './login.validation';

import { FormEvent, useState } from "react";

const initialValues: ILoginForm = {
  username: '',
  password: '',
};

export default function LoginContainer() {

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
  }


  return (
    <div className="overflow-hidden w-screen h-screen">
      <div className="app__layout">
        <div className="text-center py-3">
          <h1 className="font-bold text-2xl">Log In</h1>
        </div>

        <form onSubmit={(e) => handleOnSubmit(e)} className="p-3">
          <div className="w-full ">
            <label htmlFor="username" className="flex justify-start items-center w-full rounded">
              <input
                type="text"
                name="username"
                placeholder="username"
                className="outline-none w-full h-14 rounded px-3 text-gray-600 bg-gray-200"

              />
            </label>
            <div className="h-7 text-sm justify-start items-center flex ">
              {/* {
                (touched.username && errors.username) ? (
                  <span className="inline-block text-red-600">{errors.username}</span>
                ) : ''
              } */}
            </div>
          </div>

          <div className="w-full ">
            <label htmlFor="password" className="w-full rounded flex justify-between items-center bg-gray-200">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="password"
                className="outline-none w-full h-14 rounded px-3 text-gray-600 bg-transparent"

              />
              <div className="inline-block">
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                  className="text-green-500 px-3 text-base hover:text-green-600">
                  {showPassword ? 'hide' : 'show'}
                </button>
              </div>
            </label>
            <div className="h-7 text-sm justify-start items-center flex">
              {/* {
                (touched.password && errors.password) ? (
                  <span className="inline-block text-red-600">{errors.password}</span>
                ) : ''
              } */}
            </div>
          </div>

          <div className="w-full mt-8 py-3">
            <button type="submit" className="text-white bg-green-500 rounded-3xl block w-full h-14 hover:bg-green-600">
              Go to My Account
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}