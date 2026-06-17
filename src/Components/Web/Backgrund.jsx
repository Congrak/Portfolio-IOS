import { useTheme } from "../../context/ThemeContext";

export const Background = () => {
    const { darkMode } = useTheme();
    return (
        <img
            className="h-screen w-screen object-cover transition-opacity duration-500"
            src="/macos-sonoma.jpg"
            style={{ filter: darkMode ? "none" : "brightness(1.15) saturate(1.2)" }}
            alt="Background"
        />
    );
};