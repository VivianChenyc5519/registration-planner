import { Button } from "./Button";
import languageEn from "../assets/english.png";
import languageFr from "../assets/french.png";
import type { Language } from "../types/language";

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
    <Button
      variant="ghost"
      className="language-button"
      onClick={onClick}
      aria-label={`Switch language to ${nextLanguage}`}
      style={{
        backgroundImage: `url(${languageImages[language]})`
      }}
    >
    </Button>
  );
}