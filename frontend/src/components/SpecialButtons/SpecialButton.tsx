import type { ButtonHTMLAttributes } from "react";
import languageEn from "../../assets/english.png";
import languageFr from "../../assets/french.png";
import type { Language } from "../../types/Language";
import style from "./SpecialButton.module.css";
import type { LucideIcon } from "lucide-react";

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
  onClick?: () => void;
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

interface IconButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  size?: number;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export function IconButton({
  icon: Icon,
  label,
  onClick,
  size = 24,
  type = "button",
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={style["clickable-button"]}
      aria-label={label}
      onClick={onClick}
    >
      <Icon size={size} aria-hidden="true" />
    </button>
  );
}