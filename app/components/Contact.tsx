"use client"

import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-chakra mb-12 dark:text-white">Get in Touch</h2>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg inline-block">
          <div className="space-y-6">
            <a
              href="mailto:yousafxaihuzaifa@gmail.com"
              className="flex  font-chakra items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Mail className="w-6 h-6 mr-3 text-blue-600" />
              yousafxaihuzaifa@gmail.com
            </a>
            <a
              href="tel:+923055356766"
              className="flex  font-chakra items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Phone className="w-6 h-6 mr-3 text-blue-600" />
              +92-343-9442998
            </a>
            <div className="flex  font-chakra items-center justify-center text-gray-600 dark:text-gray-300">
              <MapPin className="w-6 h-6 mr-3 text-blue-600" />
              Lahore, Pakistan
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
