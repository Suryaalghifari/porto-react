import { useEffect, useState } from "react";

export const useTheme = () => {
  // Langsung set default 'dark' (tidak cek OS/browser)
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Cek apakah user sudah pernah memilih theme sebelumnya
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as
        | "light"
        | "dark"
        | null;
      // Kalau sudah pernah pilih, pakai itu
      if (savedTheme) return savedTheme;
      // Kalau belum, DEFAULT dark
      return "dark";
    }
    return "dark";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return { theme, toggleTheme };
};
