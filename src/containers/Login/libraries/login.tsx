import { ILoginForm } from "./login.types";

import React, { FormEvent, InputHTMLAttributes, useEffect, useState } from "react";
import { Field, Formik, useFormik, useFormikContext } from 'formik';

import validationSchema from './login.validation';

const initialValues: ILoginForm = {
  username: '',
  password: '',
};

interface IInputProps {
  action?: React.ReactNode;
}

function Input(props: InputHTMLAttributes<HTMLInputElement> & IInputProps) {
  const {
    handleChange,
    handleBlur,
    errors,
    touched,
  } = useFormikContext<any>();
  return (
    <div className="w-full ">
      <label htmlFor="username" className="flex justify-start bg-gray-200 items-center w-full rounded">
        <input
          {...props}
          name={props.name}
          placeholder={props.placeholder}
          className="outline-none w-full h-14 rounded px-3 text-gray-600 bg-transparent"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </label>
      <div className="h-7 text-sm justify-start items-center flex ">
        {
          (touched[String(props.name)] && errors[String(props.name)]) ? (
            <span className="inline-block text-red-600">{errors[String(props.name)]}</span>
          ) : (<></>)
        }
      </div>
      {
        props.action && (
          props.action
        )
      }
    </div>
  )
}

export default function LoginContainer() {

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleOnSubmit = (value: ILoginForm) => {
    console.log('form is submitted');
    console.log('value : ', value);
  }

  return (
    <div className="overflow-hidden w-screen h-screen">
      <div className="app__layout">
        <div className="text-center py-3">
          <h1 className="font-bold text-2xl">Log In</h1>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleOnSubmit}
          validationSchema={validationSchema}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            errors,
            touched,
          }) => (
            <form onSubmit={handleSubmit} className="p-3">

              <Input type="text" name="username" placeholder="Username" />

              <Input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" action={
                <div className="inline-block">
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                    className="text-green-500 px-3 text-base hover:text-green-600">
                    {showPassword ? 'hide' : 'show'}
                  </button>
                </div>
              } />

              <div className="w-full mt-8 py-3">
                <button type="submit" className="text-white bg-green-500 rounded-3xl block w-full h-14 hover:bg-green-600">
                  Go to My Account
                </button>
              </div>

            </form>

          )}
        </Formik>

      </div>
    </div>
  );
}