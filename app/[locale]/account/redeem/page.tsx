import { useTranslations } from "next-intl";
import RedeemForm from "./RedeemForm";

export default function Redeem() {
  const t = useTranslations("Redeem");
  return (
    <RedeemForm
      i18n={{
        redeemInstructions: t("redeemInstructions"),
        redeemSuccess: t("redeemSuccess"),
        redeemSubmit: t("redeemSubmit"),
        setpassPlaceholder: t("setpassPlaceholder"),
        redeemEmailPlaceholder: t("redeemEmailPlaceholder"),
        redeemCouponPlaceholder: t("redeemCouponPlaceholder"),
        setpassHint: t("setpassHint"),
      }}
    />
  );
}
