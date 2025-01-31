export const centerModalInViewport = (isMobile?: boolean) => {
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const modalWidth = isMobile ? viewportWidth - 80 : Math.min(450, viewportWidth * 0.9)
  const modalHeight = 400

  const left = (viewportWidth - modalWidth) / 2
  const top = (viewportHeight - modalHeight) / 2

  return { top, left }
}
