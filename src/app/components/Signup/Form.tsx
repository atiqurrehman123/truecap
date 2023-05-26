
import  React,{useState} from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
 import * as Yup from "yup";

interface MyFormValues {
  email: string;
  password:string
}
const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required Field"),
  password: Yup.string()
    .required("Required Field")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

export const SignUpForm: React.FC<{}> = () => {
  const initialValues: MyFormValues = { email: "" ,password:""};

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
        }}
      >
        {({ errors, touched }) => (
          <Form className="w-80">
            <div className="mb-2">
              {/* Floading filled input field */}
              <div className="relative rounded border-solid border-2 border-gray-500 focus:p-3">
                <input
                  type="email"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700  border-gray-300 appearance-none  dark:text-white dark:border-gray-600 dark:focus:border-blue-500  peer  focus:border-solid focus:border-0 focus:rounded    focus:border-red-600 "
                  placeholder=" "
                />
                <label
                  htmlFor="floating_filled"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Email Address
                </label>
              </div>
              {errors.email && touched.email ? <div className="text-red-500 text-sm my-1 ml-3">{errors.email}</div> : null}
            </div>

            <div className="">
              <div className="relative rounded border-solid border-2 border-gray-500 focus:p-3">
                <input
                  type="text"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500  peer focus:rounded focus:border-solid focus:border-solid focus:border-3 focus:rounded    focus:border-red-600 "
                  placeholder=" "
                />
                <label
                  htmlFor="floating_filled"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Password
                </label>
              </div>{" "}
              {errors.password && touched.password ? (
                <div className="text-red-500 text-sm my-1 ml-3">{errors.password}</div>
              ) : null}
            </div>
            <div className="mt-6 ">
              <button
                className="bg-black h-11 rounded-full text-white w-full"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};