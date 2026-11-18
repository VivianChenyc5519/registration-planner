import languageEn from "../assets/english.png";
import languageFr from "../assets/french.png";
import type { Language } from "../types/Language";
import style from "./SpecialButton.module.css";
import { Funnel, Undo2 } from "lucide-react";

type LanguageButtonProps = {
  language: Language;
  onClick: () => void;
};

const languageImages = {
  en: languageEn,
  fr: languageFr,
};

type UserProfileButtonProps = {
  initial: string;
  onClick: () => void;
};

export function UserProfileButton({ initial, onClick }: UserProfileButtonProps) {
  return (
    <button
      title={initial}
      className={style["user-profile-button"]}
      onClick={onClick}
      aria-label={"User Profile"}
    >
      {initial}
    </button>
  );
}
export function LanguageButton({ language, onClick }: LanguageButtonProps) {
  const nextLanguage = language === "en" ? "French" : "English";

  return (
    <button
      className={style["language-button"]}
      onClick={onClick}
      aria-label={`Switch language to ${nextLanguage}`}
      style={{
        backgroundImage: `url(${languageImages[language]})`
      }}
    >
    </button>
  );
}

export const FilterButton = ({ onClick }: { onClick: () => void }) => {
  return <Funnel className={style['clickable-button']} onClick={onClick} />;
};

export const ReturnButton = ({ onClick }: { onClick: () => void }) => {
  return <Undo2 className={style['clickable-button']} onClick={onClick} />;
};