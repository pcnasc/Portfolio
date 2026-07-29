"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import ptDict, { type Dict } from "@/messages/pt";
import enDict from "@/messages/en";

export type Locale = "pt" | "en";

type I18nCtx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const Ctx = createContext<I18nCtx | null>(null);
const STORAGE_KEY = "pcnasc.locale";

const dicts: Record<Locale, Dict> = { pt: ptDict, en: enDict };

function isLocale(v: string | null): v is Locale {
  return v === "pt" || v === "en";
}

export function I18nProvider({
  children,
  initial = "pt",
}: {
  children: ReactNode;
  initial?: Locale;
}) {
  // IMPORTANT: the initial state MUST equal the server-rendered value (`initial`)
  // so hydration matches. The SSG HTML is always the default locale; reading the
  // visitor's saved preference here would render different text on the client and
  // trigger a React hydration mismatch (#418). We reconcile the saved preference
  // after mount instead (a 1-frame flash for returning EN visitors is the inherent
  // trade-off of client-toggle i18n without URL-based locale routing).
  const [locale, setLocaleState] = useState<Locale>(initial);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // ignore (private mode / disabled storage)
    }
    // Only reconcile on mount — `locale` is intentionally omitted from deps
    // because we only want to read localStorage once, not on every locale change.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reconcile saved preference after mount
    if (isLocale(stored) && stored !== locale) setLocaleState(stored);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mount-only reconciliation
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  }, []);

  // Keep <html lang> in sync with the active locale for screen readers / a11y.
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    }
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t: dicts[locale] }),
    [locale, setLocale]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n(): I18nCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
