import { FieldArray, Formik } from "formik";
import { PlusCircleIcon, TrashIcon, PlusIcon } from '@heroicons/react/solid';
import { ILoginForm } from "./multiple-input.types";
import validationSchema from './multiple-input.validation';

import { useState } from "react";

interface IFormFriends {
  friends: string[];
}

const initialValues: IFormFriends = {
  friends: [],
};

export default function MultipleInputContainer() {

  const handleOnSubmit = (values: IFormFriends) => {
    console.log('values : ', values);
  }

  return (
    <div className="overflow-hidden w-screen h-screen">
      <div className="app__layout">
        <div className="text-center py-3">
          <h1 className="font-bold text-2xl">Multiple Input</h1>
        </div>
        <Formik
          onSubmit={handleOnSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({
            handleSubmit,
            values,
          }) => (
            <form onSubmit={handleSubmit} className="p-3">
              <FieldArray name="friends">
                {({
                  form: {
                    handleBlur,
                    handleChange,
                    touched,
                    errors,
                  },
                  push,
                  remove,
                  insert,
                }) => (
                  <>
                    {
                      values.friends && values.friends.length > 0 && values.friends.map((friend, index) => (
                        <div className="w-full flex justify-between items-center my-3" key={index}>
                          <label htmlFor="username" className="flex justify-start items-center w-full rounded">
                            <input
                              type="text"
                              name={`friends.${index}`}
                              placeholder="Your friend's name"
                              className="outline-none w-full h-14 rounded px-3 text-gray-600 bg-gray-200"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </label>
                          <div className="h-7 text-sm justify-start items-center flex ">
                            {
                              (touched.username && errors.username) ? (
                                <span className="inline-block text-red-600">{errors.username}</span>
                              ) : ''
                            }
                          </div>
                          <>
                            <div>
                              <button type="button" className="px-3 py-2" onClick={() => insert(index, '')}>
                                <PlusIcon className="h-6 w-6" />
                              </button>
                            </div>
                            <div>
                              <button type="button" className="px-3 py-2" onClick={() => remove(index)}>
                                <TrashIcon className="h-6 w-6 text-red-600" />
                              </button>
                            </div>

                          </>

                        </div>
                      ))
                    }
                    {
                      (!values.friends || values.friends.length === 0) && (
                        <div className="flex justify-end items-center">
                          <button type="button" className="px-3 py-2 flex justify-center items-center" onClick={() => push('')}>
                            <PlusCircleIcon className="h-6 w-6 mr-2" /> Add Friend
                          </button>
                        </div>
                      )
                    }
                  </>
                )}
              </FieldArray>




            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}