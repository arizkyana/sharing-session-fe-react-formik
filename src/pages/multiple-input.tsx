import { useEffect } from "react";
import MultipleInputContainer from "../containers/MultipleInput";

export default function MultipleInputPage() {
  useEffect(() => {
    document.title = 'Sharing Session FE - React Formik';
  });

  return (
    <MultipleInputContainer />
  )
}