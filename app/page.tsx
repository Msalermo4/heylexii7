"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Phone, Mail, Star, Users, Building, Scale, Heart } from "lucide-react"
import Link from "next/link"

// Sample lawyers data
const lawyers = [
  {
    id: 1,
    name: "María Elena Rodríguez Santos",
    barNumber: "PR15234",
    status: "Activo",
    licenseDate: "2018-03-15",
    practiceAreas: ["Derecho Inmobiliario", "Desarrollo de Propiedades", "Bienes Raíces Comerciales"],
    firm: "Bufete Rodríguez Santos",
    phone: "(787) 555-0123",
    email: "maria.rodriguez@rslaw.pr",
    disciplinaryActions: 0,
    municipality: "San Juan",
    languages: ["Español", "Inglés"],
    rating: 4.8,
    reviewCount: 24,
    verified: true,
  },
  {
    id: 2,
    name: "Carlos Alberto Méndez Rivera",
    barNumber: "PR12890",
    status: "Activo",
    licenseDate: "2015-06-22",
    practiceAreas: ["Derecho Penal", "Defensa Criminal", "DUI"],
    firm: "Méndez Rivera & Asociados",
    phone: "(787) 555-0456",
    email: "carlos.mendez@mrlaw.pr",
    disciplinaryActions: 0,
    municipality: "San Juan",
    languages: ["Español", "Inglés"],
    rating: 4.6,
    reviewCount: 18,
    verified: true,
  },
  {
    id: 3,
    name: "Ana Isabel Torres Vega",
    barNumber: "PR18765",
    status: "Activo",
    licenseDate: "2020-09-10",
    practiceAreas: ["Derecho Familiar", "Divorcio", "Custodia"],
    firm: "Torres Vega Law",
    phone: "(787) 555-0789",
    email: "ana.torres@tvlaw.pr",
    disciplinaryActions: 0,
    municipality: "Bayamón",
    languages: ["Español", "Inglés"],
    rating: 4.9,
    reviewCount: 31,
    verified: true,
  },
  {
    id: 4,
    name: "Roberto José Fernández Cruz",
    barNumber: "PR09876",
    status: "Suspendido",
    licenseDate: "2008-01-18",
    practiceAreas: ["Derecho Corporativo", "Fusiones y Adquisiciones"],
    firm: "Anterior: Oficina Legal Fernández Cruz",
    phone: "(787) 555-0321",
    disciplinaryActions: 2,
    municipality: "Bayamón",
    languages: ["Español", "Inglés"],
    rating: 2.1,
    reviewCount: 8,
    verified: true,
  },
  {
    id: 5,
    name: "Carmen Luz Morales Díaz",
    barNumber: "PR14567",
    status: "Activo",
    licenseDate: "2017-04-25",
    practiceAreas: ["Derecho Laboral", "Compensación", "Discriminación"],
    firm: "Morales Díaz & Partners",
    phone: "(787) 555-0654",
    email: "carmen.morales@mdlaw.pr",
    disciplinaryActions: 0,
    municipality: "Carolina",
    languages: ["Español", "Inglés"],
    rating: 4.7,
    reviewCount: 19,
    verified: true,
  },
  {
    id: 6,
    name: "Luis Fernando Jiménez Ramos",
    barNumber: "PR11234",
    status: "Probatoria",
    licenseDate: "2012-11-08",
    practiceAreas: ["Derecho Civil", "Contratos", "Responsabilidad Civil"],
    firm: "Jiménez Ramos Law Office",
    phone: "(787) 555-0987",
    email: "luis.jimenez@jrlaw.pr",
    disciplinaryActions: 1,
    municipality: "Ponce",
    languages: ["Español"],
    rating: 3.8,
    reviewCount: 12,
    verified: true,
  },
]

const municipalities = [
  "Todos los Municipios",
  "San Juan",
  "Bayamón",
  "Carolina",
  "Ponce",
  "Caguas",
  "Guaynabo",
  "Arecibo",
  "Toa Baja",
  "Mayagüez",
]

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMunicipality, setSelectedMunicipality] = useState("Todos los Municipios")

  const filteredLawyers = lawyers.filter((lawyer) => {
    const matchesSearch =
      lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lawyer.practiceAreas.some((area) => area.toLowerCase().includes(searchTerm.toLowerCase())) ||
      lawyer.firm.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesMunicipality =
      selectedMunicipality === "Todos los Municipios" || lawyer.municipality === selectedMunicipality

    return matchesSearch && matchesMunicipality
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Activo":
        return "bg-green-100 text-green-800 border-green-200"
      case "Suspendido":
        return "bg-red-100 text-red-800 border-red-200"
      case "Probatoria":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold text-blue-900">HeyLEXII</h1>
                <p className="text-sm text-gray-600">Directorio Legal de Puerto Rico</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Directorio
              </Link>
              <Link href="/discover" className="text-gray-700 hover:text-blue-600 font-medium">
                Descubrir
              </Link>
              <Link href="/reviews" className="text-gray-700 hover:text-blue-600 font-medium">
                Reseñas
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                Acerca
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Encuentra el Abogado Perfecto en Puerto Rico
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Más de 1,247 abogados verificados, reseñas auténticas y cobertura en los 78 municipios. Toma decisiones
            informadas con datos actualizados del Poder Judicial.
          </p>

          {/* Search Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Buscar por nombre, especialidad, ubicación..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <select
                value={selectedMunicipality}
                onChange={(e) => setSelectedMunicipality(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-12"
              >
                {municipalities.map((municipality) => (
                  <option key={municipality} value={municipality}>
                    {municipality}
                  </option>
                ))}
              </select>
              <Button size="lg" className="h-12 px-8">
                <Search className="w-5 h-5 mr-2" />
                Buscar
              </Button>
            </div>

            <p className="text-gray-600">
              <span className="font-semibold text-blue-600">{filteredLawyers.length}</span> resultados encontrados
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">1,247</div>
              <div className="text-sm text-gray-600">Abogados Registrados</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4">
                <Scale className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">1,156</div>
              <div className="text-sm text-gray-600">Activos</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">78</div>
              <div className="text-sm text-gray-600">Municipios</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-4">
                <Building className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">45+</div>
              <div className="text-sm text-gray-600">Áreas de Práctica</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lawyers Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Abogados Destacados</h3>
            <Link href="/discover">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Heart className="w-4 h-4" />
                Modo Descubrir
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLawyers.slice(0, 6).map((lawyer) => (
              <Card key={lawyer.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">{lawyer.name}</CardTitle>
                    {lawyer.verified && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                        Verificado
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={`text-xs ${getStatusColor(lawyer.status)}`}>{lawyer.status}</Badge>
                    <span className="text-sm text-gray-500">#{lawyer.barNumber}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-sm">{lawyer.rating}</span>
                    <span className="text-gray-500 text-sm">({lawyer.reviewCount} reseñas)</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-sm text-gray-900 mb-1">{lawyer.firm}</p>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {lawyer.municipality}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Áreas de Práctica:</p>
                      <div className="flex flex-wrap gap-1">
                        {lawyer.practiceAreas.slice(0, 2).map((area, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                        {lawyer.practiceAreas.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{lawyer.practiceAreas.length - 2} más
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        {lawyer.phone && (
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-1" />
                            <span className="text-xs">{lawyer.phone}</span>
                          </div>
                        )}
                      </div>
                      <Link href={`/lawyer/${lawyer.id}`}>
                        <Button size="sm" variant="outline">
                          Ver Perfil
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredLawyers.length > 6 && (
            <div className="text-center mt-8">
              <Button size="lg">Ver Todos los Resultados ({filteredLawyers.length})</Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">HeyLEXII</h3>
              <p className="text-gray-400 text-sm">
                El directorio legal más completo de Puerto Rico. Encuentra abogados verificados y toma decisiones
                informadas.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    Acerca de Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Para Abogados</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/claim" className="hover:text-white">
                    Reclamar Perfil
                  </Link>
                </li>
                <li>
                  <Link href="/premium" className="hover:text-white">
                    Membresía Premium
                  </Link>
                </li>
                <li>
                  <Link href="/advertise" className="hover:text-white">
                    Publicidad
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@heylexii.com
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (787) 123-LEXII
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 HeyLEXII. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
