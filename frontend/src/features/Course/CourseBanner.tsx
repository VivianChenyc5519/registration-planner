import { useState } from "react";
import { Link } from "react-router-dom";
import { Funnel } from "lucide-react";
import {
  IconButton,
  LanguageButton,
  UserProfileButton,
} from "../../components/SpecialButtons/SpecialButton";
import type { Language } from "../../types/Language";
import Banner from "../../components/Banner/Banner";
import SearchBar from "../../components/SearchBar/Searchbar";

interface CourseBannerProps {
  onClickFilterButton: () => void;
  className?: string;
  filterOpen: Boolean;
  handleSearch: (term: string) => void;
}

export function CourseBanner({
  onClickFilterButton,
  className,
  filterOpen,
  handleSearch,
}: CourseBannerProps) {
  const [language, setLanguage] = useState<Language>("en");

  function onClickLanguageButton() {
    setLanguage(language === "en" ? "fr" : "en"); // could expand to other language later
  }

  return (
    <Banner
      className={className}
      left={
        !filterOpen && (
          <IconButton
            icon={Funnel}
            label="Open filters"
            onClick={onClickFilterButton}
          />
        )
      }
      center={
        <SearchBar
          onSearch={handleSearch}
          placeholder="Enter a keyword to search for a course"
        />
      }
      right={
        <>
          <LanguageButton language={language} onClick={onClickLanguageButton} />
          <Link to="/schedule">
            <UserProfileButton initial="YC" />
          </Link>
        </>
      }
    />
  );
}
