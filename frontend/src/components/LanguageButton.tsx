import languageEn from "../assets/english.png";
import languageFr from "../assets/french.png";
import type { Language } from "../types/Language";
import styles from "./SpecialButton.module.css";

type LanguageButtonProps = {
  language: Language;
  onClick: () => void;
};

const languageImages = {
  en: languageEn,
  fr: languageFr,
};

export function LanguageButton({ language, onClick }: LanguageButtonProps) {
  const nextLanguage = language === "en" ? "French" : "English";

  return (
    <button
      className={styles["language-button"]}
      onClick={onClick}
      aria-label={`Switch language to ${nextLanguage}`}
      style={{
        backgroundImage: `url(${languageImages[language]})`
      }}
    >
    </button>
  );
}