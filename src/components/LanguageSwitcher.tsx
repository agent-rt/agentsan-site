import { Button } from '#/components/ui/button'
import { useI18n } from '#/lib/i18n'

export default function LanguageSwitcher() {
  const { locale, setLocale, messages } = useI18n()

  return (
    <div className="flex items-center gap-1 rounded-full border border-border/70 bg-card/80 p-1">
      <span className="sr-only">{messages.language.label}</span>
      <Button
        size="sm"
        variant={locale === 'en' ? 'secondary' : 'ghost'}
        onClick={() => setLocale('en')}
      >
        {messages.language.en}
      </Button>
      <Button
        size="sm"
        variant={locale === 'zh' ? 'secondary' : 'ghost'}
        onClick={() => setLocale('zh')}
      >
        {messages.language.zh}
      </Button>
      <Button
        size="sm"
        variant={locale === 'ja' ? 'secondary' : 'ghost'}
        onClick={() => setLocale('ja')}
      >
        {messages.language.ja}
      </Button>
    </div>
  )
}
