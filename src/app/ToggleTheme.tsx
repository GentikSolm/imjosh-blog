"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);
  return (
    <button
      onClick={() => {
        isDark
          ? document.documentElement.classList.remove("dark")
          : document.documentElement.classList.add("dark");
        setIsDark((d) => !d);
      }}
    >
      {isDark ? <Sun/> : <Moon/>}
    </button>
  );
}
