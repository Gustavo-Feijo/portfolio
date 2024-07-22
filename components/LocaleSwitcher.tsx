"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";

interface LocaleList {
  locale: "br" | "en";
  flag: string;
}
// Array contaning the 2 available locales.
const locales: LocaleList[] = [
  { locale: "br", flag: "🇧🇷" },
  { locale: "en", flag: "🇺🇸" },
];

function LocaleSwitcher() {
  // Gets the current locale for highlighting the selected locale.
  const currentLocale = useLocale();
  // Router and Pathname for changing the locale.
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="w-fit h-10 rounded-sm p-2 gap-2 border border-secondary flex items-center cursor-pointer">
      {locales.map((locale, index) => (
        <span
          key={index}
          className={cn(
            "text-4xl",
            currentLocale != locale.locale && "opacity-30"
          )}
          onClick={() => {
            if (currentLocale !== locale.locale) {
              router.push(pathname, { locale: locale.locale });
            }
          }}
        >
          {locale.flag}
        </span>
      ))}
    </div>
  );
}

export default LocaleSwitcher;
