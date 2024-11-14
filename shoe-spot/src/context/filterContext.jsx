import { createContext, useState, useMemo } from "react";
export const filterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [isFilterOn, setIsFilterOn] = useState(false);

  const toggleFilter = () => {
    console.log("filter toggle through context");
    setIsFilterOn((prev) => !prev);
  };

  const value = useMemo(() => ({ isFilterOn, toggleFilter }), [isFilterOn]);

  return (
    <filterContext.Provider value={value}>{children}</filterContext.Provider>
  );
};
