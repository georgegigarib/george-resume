import { useEffect, useRef } from 'react'

const useInfiniteScroll = (containerId: string) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrame: number
    let scrollPosition = 0

    try {
      // Duplicate the content to allow infinite scrolling
      const originalContent = container.innerHTML
      container.innerHTML += originalContent

      // We calculate the total width to adjust the scrolling
      const scrollWidth = container.scrollWidth / 2

      const scrollStep = () => {
        scrollPosition += 0.5 // Adjust the scrolling speed here
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

    // Clean on unmount
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [containerId])

  return containerRef
}

export default useInfiniteScroll
