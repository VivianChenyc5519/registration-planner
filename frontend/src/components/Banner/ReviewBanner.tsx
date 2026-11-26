import { useNavigate } from "react-router-dom";
import Banner from "./Banner";
import { IconButton } from "../SpecialButtons/SpecialButton";
import { Undo2 } from "lucide-react";
import {
  LanguageButton,
  UserProfileButton,
} from "../SpecialButtons/SpecialButton";
import type { Language } from "../../types/Language";
import { useState } from "react";

export default function ReviewBanner() {
  const [language, setLanguage] = useState<Language>("en");
  const navigate = useNavigate();

  function onClickLanguageButton() {
    setLanguage(language === "en" ? "fr" : "en"); // could expand to other language later
  }
  return (
    <Banner
    //   left={
    //     <IconButton
    //       icon={Undo2}
    //       label="Close filters"
    //       onClick={() => navigate("/courses")}
    //     />
    //   }
      right={
        <>
          <LanguageButton language={language} onClick={onClickLanguageButton} />
        <UserProfileButton initial="YC" onClick={() => navigate("/schedule")}/>
        </>
      }
    />
  );
}
