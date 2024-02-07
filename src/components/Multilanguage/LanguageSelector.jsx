import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "French" },
  { code: "hi", lang: "Hindi" },
  { code: "ar", lang: "Arabic" },
];

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "5px",
        justifyContent: "center",
      }}
    >
      {languages?.map((lang) => {
        return (
          <span
            key={lang?.code}
            onClick={() => changeLanguage(lang.code)}
            style={{
              border:
                lang.code === i18n.language
                  ? "1px solid blue"
                  : "1px solid black",
              padding: "5px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {lang?.lang}
          </span>
        );
      })}
    </div>
  );
};
