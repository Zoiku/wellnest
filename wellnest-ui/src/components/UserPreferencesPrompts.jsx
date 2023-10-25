import "../styles/UserPreferencesPrompts.css";
import { useState } from "react";
import { Prompts } from "./UserPreferences";
import Button from "./Button";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import Progress from "./Progress";
import { TextField } from "@mui/material";

const UserPreferencesPrompts = ({ handleCompletePreference }) => {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const currentPrompt = Prompts.at(currentPromptIndex);
  const nextPrompt = () => {
    setCurrentPromptIndex((currentIndex) => currentIndex + 1);
  };
  const previousPrompt = () => {
    setCurrentPromptIndex((currentIndex) => currentIndex - 1);
  };
  const [responses, setReponses] = useState({});
  const handleResponses = (prompt, response) => () => {
    setReponses({
      ...responses,
      [prompt]: {
        responseIndex: response,
      },
    });
  };
  const handleSubmit = () => {
    handleCompletePreference();
  };

  const handleChangeSupport = (prompt) => (event) => {
    setReponses({
      ...responses,
      [prompt]: {
        ...responses[prompt],
        support: event.target.value,
      },
    });
  };

  const nextPromptButtonDisable = () => {
    if (
      !Object.keys(responses)
        .map((number) => Number(number))
        .includes(currentPromptIndex)
    ) {
      return true;
    } else {
      if (
        responses[currentPromptIndex].responseIndex !==
        currentPrompt?.supporting?.optionIndexTrigger
      ) {
        return false;
      } else {
        if (
          responses[currentPromptIndex].support &&
          String(responses[currentPromptIndex].support).length > 0
        ) {
          return false;
        } else {
          return true;
        }
      }
    }
  };

  const previousPromptButtonDisable = () => {
    if (currentPromptIndex === 0) {
      return true;
    }
    return false;
  };

  const submitPromptButtonDisable = () => {
    if (Object.keys(responses).length === Prompts.length) {
      return false;
    }
    return true;
  };

  return (
    <div className="user-preferences-prompts-page">
      <div className="user-preferences-prompts-page-box">
        {currentPrompt && (
          <div className="prompt-section">
            <div>
              <Progress
                value={Object.keys(responses).length}
                max={Prompts.length}
              />
            </div>

            {currentPrompt.heading && (
              <div className="prompt-heading">{currentPrompt.heading}</div>
            )}

            <div className="prompt-question">
              <div>{currentPrompt.question}</div>
              <div className="prompt-options">
                {currentPrompt.options.map((option, index) => (
                  <div
                    key={index}
                    onClick={handleResponses(currentPrompt.id, index)}
                    className={`prompt-option ${
                      currentPrompt.id === Prompts.at(currentPromptIndex).id &&
                      responses[currentPromptIndex] &&
                      responses[currentPromptIndex].responseIndex === index &&
                      "prompt-option-selected"
                    }`}
                  >
                    <span>{option}</span>
                  </div>
                ))}

                {currentPrompt.supporting &&
                  responses[currentPromptIndex] &&
                  responses[currentPromptIndex].responseIndex ===
                    currentPrompt.supporting.optionIndexTrigger && (
                    <TextField
                      value={responses[currentPromptIndex].support}
                      onChange={handleChangeSupport(currentPrompt.id)}
                      size="small"
                      multiline={
                        currentPrompt.supporting?.multiline ? true : false
                      }
                      rows={
                        currentPrompt.supporting?.multiline?.line ?? undefined
                      }
                      placeholder={currentPrompt.supporting.placeholder}
                      fullWidth
                    />
                  )}
              </div>
            </div>

            <div className="user-preferences-prompts-navigation">
              <Button
                disabled={previousPromptButtonDisable()}
                fullWidth={false}
                onClick={previousPrompt}
                label={"Previous"}
                styles={"101"}
                startIcon={<WestRoundedIcon />}
              />
              {currentPromptIndex + 1 === Prompts.length ? (
                <Button
                  disabled={submitPromptButtonDisable()}
                  label={"Save & Continue"}
                  styles={"211"}
                  onClick={handleSubmit}
                />
              ) : (
                <Button
                  disabled={nextPromptButtonDisable()}
                  onClick={nextPrompt}
                  label={"Next"}
                  styles={"101"}
                  endIcon={<EastRoundedIcon />}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPreferencesPrompts;
