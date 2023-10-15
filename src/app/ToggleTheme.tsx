"use client";

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
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
}
