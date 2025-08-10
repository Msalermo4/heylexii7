"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    "common.search": "Buscar",
    "common.back": "Volver",
    "common.loading": "Cargando...",
    "common.error": "Error",
    "common.success": "Éxito",
    "nav.directory": "Directorio",
    "nav.discover": "Descubrir",
    "nav.reviews": "Reseñas",
    "nav.about": "Acerca",
    "search.placeholder": "Buscar por nombre, especialidad, ubicación...",
    "search.results": "resultados encontrados",
    "lawyer.status.active": "Activo",
    "lawyer.status.suspended": "Suspendido",
    "lawyer.status.probation": "Probatoria",
    "lawyer.verified": "Verificado",
    "lawyer.practiceAreas": "Áreas de Práctica",
    "lawyer.viewProfile": "Ver Perfil",
    "discover.title": "Descubre Abogados",
    "discover.noMore": "¡No hay más abogados!",
    "discover.reviewed": "Has revisado todos los abogados disponibles.",
    "discover.reset": "Reiniciar",
    "discover.filters": "Filtros",
    "discover.activeOnly": "Solo Activos",
    "discover.keyboard": "Atajos de teclado:",
    "discover.pass": "Pasar",
    "discover.like": "Me Gusta",
    "discover.superLike": "Super Like",
    "discover.matches": "Matches",
    "discover.favorites": "Favoritos",
    "discover.profile": "Perfil",
  },
  en: {
    "common.search": "Search",
    "common.back": "Back",
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
    "nav.directory": "Directory",
    "nav.discover": "Discover",
    "nav.reviews": "Reviews",
    "nav.about": "About",
    "search.placeholder": "Search by name, specialty, location...",
    "search.results": "results found",
    "lawyer.status.active": "Active",
    "lawyer.status.suspended": "Suspended",
    "lawyer.status.probation": "Probation",
    "lawyer.verified": "Verified",
    "lawyer.practiceAreas": "Practice Areas",
    "lawyer.viewProfile": "View Profile",
    "discover.title": "Discover Lawyers",
    "discover.noMore": "No more lawyers!",
    "discover.reviewed": "You've reviewed all available lawyers.",
    "discover.reset": "Reset",
    "discover.filters": "Filters",
    "discover.activeOnly": "Active Only",
    "discover.keyboard": "Keyboard shortcuts:",
    "discover.pass": "Pass",
    "discover.like": "Like",
    "discover.superLike": "Super Like",
    "discover.matches": "Matches",
    "discover.favorites": "Favorites",
    "discover.profile": "Profile",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
