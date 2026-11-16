import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageButton } from "../../components/LanguageButton";
import { UserProfileButton } from "../../components/UserProfileButton";
import type { Language } from "../../types/language";
import Banner from "../../components/Banner/Banner";

export function CourseBanner() {
  const [language, setLanguage] = useState<Language>("en");
  const navigate = useNavigate();

  function onClickLanguageButton() {
    setLanguage(language === "en" ? "fr" : "en"); // could expand to other language later
  }

  return (
    <Banner
      left={<h1>A button here</h1>}
      center={<h1>A search bar</h1>}
      right={
        <>
          <LanguageButton language={language} onClick={onClickLanguageButton} />
          <UserProfileButton
            initial="YC"
            onClick={() => navigate("./schedule")}
          />
        </>
      }
    />
  );
}
