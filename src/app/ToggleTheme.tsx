"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const { resolvedTheme, setTheme } = useTheme();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  },[]);
  if (!loaded) return null;
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {resolvedTheme === "dark" && <Sun className="text-gray-100" />}
      {resolvedTheme === "light" && <Moon />}
    </button>
  );
}
