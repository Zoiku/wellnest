import "../../styles/Preferences.css";
import Centered from "../../components/Centered";
import usePreferences from "../../hooks/usePreferences";
import Button from "../../components/Button";
import { TextField } from "@mui/material";

const Option = ({ value, onChange, selected }) => (
  <div
    onClick={onChange}
    className={`preference-option ${selected && "preference-option-selected"}`}
  >
    {value}
  </div>
);

const Preferences = () => {
  const {
    prompt,
    selected,
    handleNextIndex,
    handlePreviousIndex,
    handleSubmit,
    handleChangePreference,
    handleDisableNextIndex,
    disablehandlePreviousIndex,
    disablehandleSubmit,
    showSubmitButton,
    handleChange,
    values,
  } = usePreferences();

  return (
    <Centered className={"preferences-page"}>
      <div className="preferences-form-wrapper">
        {prompt.heading && (
          <div className="preferences-form-heading">{prompt.heading}</div>
        )}
        <div className="preferences-form">
          <div className="preferences-form-question">{prompt.question}</div>
          <div className="preference-options">
            {prompt.options.map((option, index) => (
              <Option
                selected={selected(option)}
                onChange={handleChangePreference(option)}
                key={index}
                value={option}
              />
            ))}
            {prompt.elaborate &&
              selected(prompt.options.at(prompt.elaboration.choice)) && (
                <TextField
                  name={prompt.name}
                  value={values[prompt.name]}
                  onChange={handleChange}
                  size="small"
                  placeholder={prompt.elaboration.placeholder}
                  fullWidth
                  multiline={true}
                  rows={5}
                />
              )}
          </div>
        </div>
        <div className="preference-controllers">
          <Button
            style={"000"}
            onClick={handlePreviousIndex}
            label={"Previous"}
            disabled={disablehandlePreviousIndex}
          />
          {showSubmitButton ? (
            <Button
              style={"000"}
              onClick={handleSubmit}
              label={"Save & Continue"}
              disabled={disablehandleSubmit}
            />
          ) : (
            <Button
              style={"000"}
              onClick={handleNextIndex}
              label={"Next"}
              disabled={handleDisableNextIndex()}
            />
          )}
        </div>
      </div>
    </Centered>
  );
};

export default Preferences;
