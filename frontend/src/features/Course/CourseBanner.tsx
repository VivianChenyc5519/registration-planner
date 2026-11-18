import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageButton } from "../../components/LanguageButton";
import { UserProfileButton } from "../../components/UserProfileButton";
import type { Language } from "../../types/Language";
import Banner from "../../components/Banner/Banner";
import FilterButton from "../../components/FilterButton";

export function CourseBanner() {
  const [language, setLanguage] = useState<Language>("en");
  const navigate = useNavigate();

  function onClickLanguageButton() {
    setLanguage(language === "en" ? "fr" : "en"); // could expand to other language later
  }

  function onClickFilterButton() {
    alert("Opening filter");
  }

  return (
    <Banner
      left={<FilterButton onClick={onClickFilterButton}/>}
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
