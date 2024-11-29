import { useEffect, useRef } from 'react'

const useInfiniteScroll = (containerId: string) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrame: number
    let scrollPosition = 0

    try {
      // Duplicamos el contenido para permitir un scroll infinito
      const originalContent = container.innerHTML
      container.innerHTML += originalContent

      // Calculamos el ancho total para ajustar el desplazamiento
      const scrollWidth = container.scrollWidth / 2

      const scrollStep = () => {
        scrollPosition += 0.5 // Ajusta la velocidad del desplazamiento aquí
        if (scrollPosition >= scrollWidth) {
          scrollPosition = 0
        }
        container.scrollLeft = scrollPosition
        animationFrame = requestAnimationFrame(scrollStep)
      }

      scrollStep()
    } catch (error) {
      console.error('Error in useInfiniteScroll:', error)
    }

    // Limpieza al desmontar
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [containerId])

  return containerRef
}

export default useInfiniteScroll
