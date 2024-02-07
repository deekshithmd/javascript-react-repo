import { Trans, useTranslation } from "react-i18next";
import { LanguageSelector } from "./LanguageSelector";

export const Multilanguage = () => {
  const { t } = useTranslation();
  // const { line1, line2 } = t("description", {
  //   name: "Deekshith",
  // });
  const { line1, line2 } = t("description");
  return (
    <div>
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      <Trans
        i18nKey={line1}
        values={{ name: "Deekshith" }}
        components={{ 1: <b /> }}
      />
      <p>{line2}</p>
    </div>
  );
};
