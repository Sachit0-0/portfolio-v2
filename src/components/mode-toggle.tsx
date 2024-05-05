import { useState } from "react";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    const newTheme = isChecked ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className="slider">
        <div className="circle">
          <div className="divider"></div>
        </div>
      </span>
      <Sun className="sun-icon" />
      <Moon className="moon-icon" />
    </label>
  );
}
