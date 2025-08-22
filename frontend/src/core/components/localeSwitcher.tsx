import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./localSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <div className="top-20 z-50 sticky flex justify-end px-4 sm:px-12">
      <LocaleSwitcherSelect
        defaultValue={locale}
        items={[
          {
            value: "en",
            label: t("en"),
          },
          {
            value: "es",
            label: t("es"),
          },
        ]}
      />
    </div>
  );
}
