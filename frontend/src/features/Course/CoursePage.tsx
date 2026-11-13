import { useState } from "react";
import { LanguageButton } from "../../components/LanguageButton";
import type { Language } from "../../types/language";

export function CoursePage() {
    const [language, setLanguage] = useState<Language>('en');
  function onClickLanguageButton() {
    setLanguage(language === "en" ? "fr" : "en"); // could expand to other language later
  }
  return (<div>
    <LanguageButton
      onClick={onClickLanguageButton}
      language={language}
    ></LanguageButton>
  </div>);
}
