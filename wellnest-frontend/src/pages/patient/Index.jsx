import "../../styles/Auth.css";
import FormInput, { FormInputs } from "../../components/FormInputs";
import useForm from "../../hooks/useForm";
import Button from "../../components/Button";

const Index = () => {
  const { values, handleChange, handleSubmit, loading, errors } =
    useForm("signIn");

  return (
    <div className="auth-page">
      <div className="auth-form-wrapper">
        <form onSubmit={handleSubmit} className="auth-form">
          <FormInputs>
            <FormInput
              error={errors.length > 0}
              label={"Email"}
              placeholder={"Enter your email"}
              value={values.email}
              onChange={handleChange}
              name={"email"}
              type={"email"}
              required
            />
            <FormInput
              error={errors.length > 0}
              label={"Password"}
              placeholder={"Enter your password"}
              value={values.password}
              onChange={handleChange}
              name={"password"}
              type={"password"}
              required
            />
          </FormInputs>
          <Button
            color={errors.length > 0 ? "error" : undefined}
            fullWidth
            style={"000"}
            type={"submit"}
            label={"Submit"}
            loading={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default Index;
