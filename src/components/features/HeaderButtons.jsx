import styles from "../../assets/css/HeaderButtons.module.css";

export default function HeaderButtons({ headerButtons, createHeaderButton, updateHeaderButton }) {
  const handleButtonTypeChange = (index, type) => {
    updateHeaderButton(index, { type, options: [] });
  };

  const handleOptionTextChange = (buttonIndex, optionIndex, text) => {
    const updatedOptions = [...headerButtons[buttonIndex].options];
    updatedOptions[optionIndex] = { ...updatedOptions[optionIndex], text };
    updateHeaderButton(buttonIndex, { options: updatedOptions });
  };

  const handleOptionCopyChange = (buttonIndex, optionIndex, copy) => {
    const updatedOptions = [...headerButtons[buttonIndex].options];
    updatedOptions[optionIndex] = { ...updatedOptions[optionIndex], copy };
    updateHeaderButton(buttonIndex, { options: updatedOptions });
  };

  const addOption = (buttonIndex) => {
    const updatedOptions = [...headerButtons[buttonIndex].options, { text: "", copy: "" }];
    updateHeaderButton(buttonIndex, { options: updatedOptions });
  };

  return (
    <div className={styles.HeaderButtonsGroup}>
      <label className={styles.HeaderButtonsLabel}>
        Add landing page header buttons
      </label>
      <div className={styles.HeaderButtons}>
        <button onClick={createHeaderButton} className={styles.CreateHeaderButton}>
          Add Header Button
        </button>
        {headerButtons?.map((button, index) => {
          return (
            <div className={styles.HeaderButtonGroup} key={`header_button_${index}`}>
              <input
                type="text"
                value={button.text}
                className={styles.ButtonInput}
                onChange={(e) => updateHeaderButton(index, { text: e.target.value })}
              />
              <select
                value={button.type}
                className={styles.ButtonDropdown}
                onChange={(e) => handleButtonTypeChange(index, e.target.value)}
              >
                <option value="standard">Standard</option>
                <option value="dropdown">Dropdown</option>
              </select>
              {button.type === "dropdown" && (
                <div className={styles.DropdownOptions}>
                  {button.options?.map((option, optionIndex) => (
                    <div className={styles.DropdownOptionInputs} key={`option_${optionIndex}`}>
                      <input
                        type="text"
                        placeholder="Option Text"
                        value={option.text}
                        className={styles.OptionTextInput}
                        onChange={(e) => handleOptionTextChange(index, optionIndex, e.target.value)}
                      />
                      <input
                        type="text"
                        className={styles.OptionCopyInput}
                        placeholder="Option Copy"
                        value={option.copy}
                        onChange={(e) => handleOptionCopyChange(index, optionIndex, e.target.value)}
                      />
                    </div>
                  ))}
                  <button onClick={() => addOption(index)}>Add Option</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}