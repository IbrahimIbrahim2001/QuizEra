/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const SelectedOptionContext = createContext();

export default function SelectedOptionProvider({ children }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [seletedOptionValue, setSelectedOptionValue] = useState(null);

  const handleSelectedOptionValue = async (value) => {
    setSelectedOptionValue(value);
  };

  return (
    <SelectedOptionContext.Provider
      value={{
        selectedOption,
        setSelectedOption,
        seletedOptionValue,
        handleSelectedOptionValue,
      }}
    >
      {children}
    </SelectedOptionContext.Provider>
  );
}

export function useQuestionOptionContext() {
  return useContext(SelectedOptionContext);
}
