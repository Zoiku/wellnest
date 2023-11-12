import { useFormik } from "formik";
import useAuth from "./useAuth";
import {
  signInFormInitialValues,
  signUpFormInitialValues,
} from "../states/Index";
import useAxios from "./useAxios";
import { useState } from "react";

const useForm = (handler) => {
  const { post } = useAxios();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  
  const { signIn } = useAuth();

  const handleSignIn = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data } = await post("/patient/login", values);
      signIn(data);
    } catch (error) {
      setErrors([...errors, error]);
    }
    setLoading(false);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
  };

  const formHandler = {
    signIn: {
      initialValues: signInFormInitialValues,
      handleSubmit: handleSignIn,
      handleValidation: () => {},
    },
    signUp: {
      initialValues: signUpFormInitialValues,
      handleSubmit: handleSignUp,
      handleValidation: () => {},
    },
    preferences: {
      initialValues: {},
      handleSubmit: null,
      handleValidation: null,
    },
  };

  const { initialValues, handleSubmit, handleValidation } =
    formHandler[handler];

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validate: handleValidation,
  });

  const { values, handleChange, handleReset } = formik;

  return { errors, values, handleChange, handleReset, handleSubmit, loading };
};

export default useForm;
