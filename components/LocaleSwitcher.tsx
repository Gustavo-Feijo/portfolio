"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import React from "react";
const locales = [
  { locale: "br", flag: "🇧🇷" },
  { locale: "en", flag: "🇺🇸" },
];
function LocaleSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      className="w-fit h-10 rounded-sm p-2 gap-2 border border-secondary flex items-center cursor-pointer"
      onClick={() => {}}
    >
      {locales.map((locale, index) => (
        <span
          key={index}
          className={cn(
            "text-4xl",
            currentLocale != locale.locale && "opacity-30"
          )}
          onClick={() => {
            if (currentLocale != locale.locale) {
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
