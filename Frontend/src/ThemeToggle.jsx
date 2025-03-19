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
      className=" bg-[var(--sign-color)] dark:bg-[var(--dark-theme)] text-2xl rounded cursor-pointer"
      title="switch theme"
    >
      {theme === "dark" ? <IoSunny />: <FiMoon />}
    </button>
  );
};

export default ThemeToggle;
