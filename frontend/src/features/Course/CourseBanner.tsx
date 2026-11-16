import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageButton } from "../../components/LanguageButton";
import { UserProfileButton } from "../../components/UserProfileButton";
import type { Language } from "../../types/language";
import styles from "./Course.module.css";

export function CourseBanner() {
  const [language, setLanguage] = useState<Language>("en");
  const navigate = useNavigate();

  function onClickLanguageButton() {
    setLanguage(language === "en" ? "fr" : "en"); // could expand to other language later
  }

  return (
    <header className={styles.banner}>
      <LanguageButton
        onClick={onClickLanguageButton}
        language={language}
      />
      <UserProfileButton
        initial="YC"
        onClick={() => navigate("/schedule")}
      />
    </header>
  );
}
