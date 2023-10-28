"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(true);
  return (
    <button
      onClick={() => {
        isDark
          ? document.documentElement.classList.remove("dark")
          : document.documentElement.classList.add("dark");
        setIsDark((d) => !d);
      }}
    >
      {isDark ? <Sun className="text-gray-100" /> : <Moon />}
    </button>
  );
}
