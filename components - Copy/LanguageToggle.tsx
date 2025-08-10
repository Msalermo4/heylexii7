"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <Button variant="ghost" size="sm" onClick={toggleLanguage} className="flex items-center gap-2">
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">{language === "es" ? "EN" : "ES"}</span>
    </Button>
  )
}
