import { useState, useEffect } from "react";
import { FiMoon } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 bg-gray-200 dark:bg-[#0e142a] rounded cursor-pointer"
    >
      {theme === "dark" ? <IoSunny />: <FiMoon />}
    </button>
  );
};

export default ThemeToggle;
