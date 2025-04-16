export default function initCarousel(
  speed: number = -200,
  width: string = '100px',
  height: string = '180px',
  rotate: boolean = true,
  circleRadius: number = 2
): void {
  const odrag = document.getElementById('drag-container') as HTMLElement
  const ospin = document.getElementById('spin-container') as HTMLElement

  // Verificación para asegurar que los elementos existan en el DOM
  if (!odrag || !ospin) {
    console.error('Elements not found')
    return
  }

  const aImg: HTMLCollectionOf<HTMLImageElement> = ospin.getElementsByTagName('img')
  const aVid: HTMLCollectionOf<HTMLVideoElement> = ospin.getElementsByTagName('video')
  const aEle: (HTMLImageElement | HTMLVideoElement)[] = [...aImg, ...aVid]

  // Configuración global
  const rotateSpeed = speed
  const imgWidth = width
  const imgHeight = height
  const autoRotate = rotate
  const radius = circleRadius

  // Tamaño de imágenes y contenedor
  ospin.style.width = `${imgWidth}`
  ospin.style.height = `${imgHeight}`

  const ground = document.getElementById('ground') as HTMLElement
  if (ground) {
    ground.style.width = `${radius * 20}px`
    ground.style.height = `${radius * 20}px`
  }

  // Inicializar elementos en círculo
  for (let i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}vh)`
    aEle[i].style.transition = 'transform 1s'
    aEle[i].style.transitionDelay = `${(aEle.length - i) / 4}s`
  }

  let tX = 0
  let tY = 10
  let desX = 0
  let desY = 0

  const timers = new Map<HTMLElement, ReturnType<typeof setTimeout>>()

  function applyTransform(): void {
    if (tY > 180) tY = 180
    if (tY < 0) tY = 0
    odrag.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`
  }

  // Auto-rotación
  if (autoRotate) {
    ospin.style.animation = `${rotateSpeed > 0 ? 'spin' : 'spinRevert'} ${Math.abs(rotateSpeed)}s infinite linear`
  }

  // Eventos de interacción con el mouse
  document.onpointerdown = function (e: PointerEvent): false {
    const currentTimer = timers.get(odrag)
    if (currentTimer) clearInterval(currentTimer)

    const sX = e.clientX
    const sY = e.clientY

    document.onpointermove = function (e: PointerEvent) {
      const nX = e.clientX
      const nY = e.clientY
      desX = nX - sX
      desY = nY - sY
      tX += desX * 0.03
      tY += desY * 0.01
      applyTransform()
    }

    document.onpointerup = function () {
      const timer = setInterval(() => {
        desX *= 0.95
        desY *= 0.95
        tX += desX * 0.03
        tY += desY * 0.01
        applyTransform()
        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          const currentTimer = timers.get(odrag)
          if (currentTimer) clearInterval(currentTimer)
        }
      }, 13)

      // Guardamos el temporizador en el Map
      timers.set(odrag, timer)

      document.onpointermove = document.onpointerup = null
    }

    return false
  }
}
