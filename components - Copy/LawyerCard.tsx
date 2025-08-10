"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Phone, Mail, X, Heart, Sparkles, AlertTriangle } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface Lawyer {
  id: number
  name: string
  barNumber: string
  status: string
  licenseDate: string
  practiceAreas: string[]
  practiceAreasEn?: string[]
  firm: string
  firmEn?: string
  phone?: string
  email?: string
  disciplinaryActions: number
  municipality: string
  languages: string[]
  rating: number
  reviewCount: number
  verified: boolean
}

interface LawyerCardProps {
  lawyer: Lawyer
  onLike: (id: number) => void
  onPass: (id: number) => void
  onSuperLike: (id: number) => void
}

export function LawyerCard({ lawyer, onLike, onPass, onSuperLike }: LawyerCardProps) {
  const { language } = useLanguage()
  const [isAnimating, setIsAnimating] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "activo":
      case "active":
        return "bg-green-100 text-green-800 border-green-200"
      case "suspendido":
      case "suspended":
        return "bg-red-100 text-red-800 border-red-200"
      case "probatoria":
      case "probation":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const handleAction = (action: "like" | "pass" | "superlike") => {
    setIsAnimating(true)
    setTimeout(() => {
      switch (action) {
        case "like":
          onLike(lawyer.id)
          break
        case "pass":
          onPass(lawyer.id)
          break
        case "superlike":
          onSuperLike(lawyer.id)
          break
      }
    }, 300)
  }

  const practiceAreas = language === "en" && lawyer.practiceAreasEn ? lawyer.practiceAreasEn : lawyer.practiceAreas
  const firmName = language === "en" && lawyer.firmEn ? lawyer.firmEn : lawyer.firm

  return (
    <Card
      className={`w-full max-w-sm mx-auto shadow-xl transition-all duration-300 ${isAnimating ? "scale-95 opacity-50" : "scale-100 opacity-100"}`}
    >
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2">{lawyer.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <Badge className={`text-xs ${getStatusColor(lawyer.status)}`}>{lawyer.status}</Badge>
              {lawyer.verified && (
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                  {language === "es" ? "Verificado" : "Verified"}
                </Badge>
              )}
            </div>
          </div>
          {lawyer.disciplinaryActions > 0 && (
            <div className="flex items-center text-red-500">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-xs ml-1">{lawyer.disciplinaryActions}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 mb-3">
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          <span className="font-bold text-lg">{lawyer.rating}</span>
          <span className="text-gray-500 text-sm">
            ({lawyer.reviewCount} {language === "es" ? "reseñas" : "reviews"})
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <p className="font-semibold text-gray-900 mb-1">{firmName}</p>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {lawyer.municipality}
          </div>
          <p className="text-sm text-gray-500">#{lawyer.barNumber}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-900 mb-2">
            {language === "es" ? "Áreas de Práctica:" : "Practice Areas:"}
          </p>
          <div className="flex flex-wrap gap-1">
            {practiceAreas.slice(0, 3).map((area, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {area}
              </Badge>
            ))}
            {practiceAreas.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{practiceAreas.length - 3} {language === "es" ? "más" : "more"}
              </Badge>
            )}
          </div>
        </div>

        <div className="space-y-2">
          {lawyer.phone && (
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 mr-2" />
              {lawyer.phone}
            </div>
          )}
          {lawyer.email && (
            <div className="flex items-center text-sm text-gray-600">
              <Mail className="w-4 h-4 mr-2" />
              {lawyer.email}
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="w-16 h-16 rounded-full border-2 border-red-200 hover:border-red-400 hover:bg-red-50 bg-transparent"
              onClick={() => handleAction("pass")}
            >
              <X className="w-6 h-6 text-red-500" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-16 h-16 rounded-full border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 bg-transparent"
              onClick={() => handleAction("superlike")}
            >
              <Sparkles className="w-6 h-6 text-blue-500" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-16 h-16 rounded-full border-2 border-green-200 hover:border-green-400 hover:bg-green-50 bg-transparent"
              onClick={() => handleAction("like")}
            >
              <Heart className="w-6 h-6 text-green-500" />
            </Button>
          </div>

          <div className="flex justify-center gap-8 mt-3 text-xs text-gray-500">
            <span>{language === "es" ? "Pasar" : "Pass"}</span>
            <span>{language === "es" ? "Super" : "Super"}</span>
            <span>{language === "es" ? "Me Gusta" : "Like"}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
