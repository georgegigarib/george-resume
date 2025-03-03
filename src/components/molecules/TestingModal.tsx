import { useState } from 'react'
import ThreeDSlider from './ListOfProjectsThreeDSlider'

export default function ModalComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const openModal = () => {
    setIsVisible(true)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setTimeout(() => setIsVisible(false), 300) // Esperar la duración de la animación
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <button onClick={openModal} className="px-4 py-2 bg-blue-600 text-white rounded-md">
        Abrir Modal
      </button>
      {isVisible && (
        <div className="fixed inset-0 flex z-20 items-center justify-center">
          {/* Backdrop con animación de opacidad */}
          <div
            className={`absolute inset-0 bg-black ${isOpen ? 'animate-fadeIn' : 'animate-fadeOut'}`}
            onClick={closeModal}
          ></div>
          {/* Modal con animación de zoom */}
          <div
            className={`relative bg-white p-6 rounded-lg shadow-lg ${isOpen ? 'animate-zoomIn' : 'animate-zoomOut'}`}
          >
            <ThreeDSlider platform="mobile" />
            <h2 className="text-xl font-bold">Título del Modal</h2>
            <p className="mt-2 text-gray-600">Contenido de ejemplo dentro del modal.</p>
            <button onClick={closeModal} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
