import "../styles/UserPreferencesPrompts.css";
import { useState } from "react";
import { Prompts } from "./UserPreferences";
import Button from "./Button";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import Progress from "./Progress";

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
    setReponses({ ...responses, [prompt]: response });
  };
  const handleSubmit = () => {
    handleCompletePreference();
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
                      responses[currentPromptIndex] === index &&
                      "prompt-option-selected"
                    }`}
                  >
                    <span>{option}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="user-preferences-prompts-navigation">
              <Button
                disabled={currentPromptIndex === 0}
                fullWidth={false}
                onClick={previousPrompt}
                label={"Previous"}
                styles={"101"}
                startIcon={<WestRoundedIcon />}
              />
              {currentPromptIndex + 1 === Prompts.length ? (
                <Button
                  disabled={Object.keys(responses).length < Prompts.length}
                  label={"Save & Continue"}
                  styles={"211"}
                  onClick={handleSubmit}
                />
              ) : (
                <Button
                  disabled={
                    !Object.keys(responses)
                      .map((index) => Number(index))
                      .includes(currentPromptIndex)
                  }
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
