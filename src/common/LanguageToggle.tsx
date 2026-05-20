"use client";

import { useLang, type Lang } from '@/i18n/LanguageContext';

export default function LanguageToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLang();

  const btn = (target: Lang, label: string) => {
    const active = lang === target;
    return (
      <button
        type="button"
        onClick={() => setLang(target)}
        aria-pressed={active}
        className={`px-3 h-7 rounded-full text-xs font-bold tracking-wider transition-colors ${
          active
            ? 'bg-blue-electric text-white shadow-sm'
            : 'text-navy/70 dark:text-white/70 hover:text-blue-electric'
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div
      className={`inline-flex items-center gap-1 p-1 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-navy/60 ${className}`}
      role="group"
      aria-label="Language"
    >
      {btn('en', 'EN')}
      {btn('vi', 'VI')}
    </div>
  );
}
