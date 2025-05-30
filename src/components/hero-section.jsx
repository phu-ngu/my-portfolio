"use client"

import { forwardRef } from "react"
import { ChevronDown } from "lucide-react"

const HeroSection = forwardRef(({ scrollToSection }, ref) => {
  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-green-100/30"></div>
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-green-500 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl font-bold text-blue-600">
              JD
            </div>
          </div>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-600 to-green-600 bg-clip-text text-transparent">
          John Doe
        </h1>
        <p className="text-2xl md:text-3xl text-blue-700 mb-8 font-light">Bioinformatics Researcher</p>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about unlocking biological insights through computational analysis. I specialize in genomic data
          analysis, machine learning applications in biology, and developing tools for biological research.
        </p>
        <button
          onClick={() => scrollToSection("projects")}
          className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          View My Research
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  )
})

HeroSection.displayName = "HeroSection"
export default HeroSection
