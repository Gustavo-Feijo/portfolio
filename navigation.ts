import { createSharedPathnamesNavigation } from "next-intl/navigation";
const locales = ["br", "en"];
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
