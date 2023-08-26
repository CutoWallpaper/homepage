import { useTranslations } from "next-intl";
import ResetForm from "./ResetForm";

export default function Reset() {
  const t = useTranslations("Reset");
  return (
    <ResetForm
      i18n={{
        resetInstructions: t("resetInstructions"),
        resetSuccess: t("resetSuccess"),
        resetPassword: t("resetPassword"),
        setpassSuccess: t("setpassSuccess"),
        setpassPlaceholder: t("setpassPlaceholder"),
        setpassEmailPlaceholder: t("setpassEmailPlaceholder"),
        setpassHint: t("setpassHint"),
      }}
    />
  );
}
