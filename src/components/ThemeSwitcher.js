import { useTheme } from "@/app/ThemeProvider";

export default function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={() => toggleTheme()}>Switch theme, current: {theme}</button>
    )
}