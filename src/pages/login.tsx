import { useEffect } from "react";
import LoginContainer from "../containers/Login";

export default function LoginPage() {
  useEffect(() => {
    document.title = 'Sharing Session FE - React Formik';
  });

  return (
    <LoginContainer />
  )
}