import { useTranslation } from "react-i18next"
import { useEffect, useRef, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { ArrowRight, Box, ChevronsDown, Code2, Database, Layers3, Pause, Play, Server, SquareTerminal, Table2 } from "lucide-react"
import { Link } from "react-router-dom"
import portrait from "../../assets/images/portrait-960.webp"
import smallPortrait from "../../assets/images/portrait-480.webp"

const stack = [
  { name: "MongoDB", icon: Database },
  { name: "Express", icon: Layers3 },
  { name: "React", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "PostgreSQL", icon: Table2 },
  { name: "Next.js", icon: SquareTerminal },
  { name: "NestJS", icon: Box },
]

const blocks = Array.from({ length: 18 * 15 }, (_, index) => {
  const x = index % 18 - 9
  const z = Math.floor(index / 18) - 7
  const seed = Math.sin((index + 1) * 127.1) * 43758.5453
  const variation = seed - Math.floor(seed)

  return {
    x,
    z,
    width: 0.46 + variation * 0.29,
    height: 0.12 + variation ** 3 * 1.25,
    lit: variation > 0.93,
  }
}).filter(({ x, z }) => x % 4 !== 0 && z % 4 !== 0)

const routes = [
  [[-9, -4], [4, -4], [4, 8]],
  [[-9, 4], [-4, 4], [-4, -7]],
  [[0, -7], [0, 0], [9, 0]],
  [[8, -7], [8, 4], [0, 4], [0, 8]],
  [[-8, -7], [-8, 0], [-4, 0]],
  [[4, -7], [4, 0], [8, 0]],
]

const rainLayers = [38, 30]
const arrowsPerLayer = 30

function paintRain(layers, width, height) {
  const tile = document.createElement("canvas")
  tile.width = Math.min(Math.ceil(width), 1280)
  tile.height = Math.min(Math.ceil(height), 900)
  const brush = tile.getContext("2d")
  if (!brush) return

  brush.lineWidth = 1
  brush.lineCap = "round"
  brush.lineJoin = "round"

  layers.forEach((layer, layerIndex) => {
    brush.clearRect(0, 0, tile.width, tile.height)
    for (let index = 0; index < arrowsPerLayer; index += 1) {
      const column = index % 6
      const row = Math.floor(index / 6)
      const size = 11 + layerIndex * 3
      const left = ((column + 0.25 + layerIndex * 0.5) / 6) * tile.width - size / 2
      const stagger = ((column * 0.381966 + layerIndex * 0.5) % 1) * 0.6 + 0.2
      const top = ((row + stagger) / 5) * tile.height
      const middle = left + size / 2

      brush.beginPath()
      brush.roundRect(left, top, size, size, size * 0.3)
      brush.fillStyle = "#12382f"
      brush.fill()
      brush.strokeStyle = "#397d68"
      brush.stroke()

      brush.beginPath()
      brush.moveTo(middle, top + size * 0.23)
      brush.lineTo(middle, top + size * 0.75)
      brush.moveTo(left + size * 0.29, top + size * 0.54)
      brush.lineTo(middle, top + size * 0.75)
      brush.lineTo(left + size * 0.71, top + size * 0.54)
      brush.strokeStyle = "#a7f3d0"
      brush.stroke()
    }
    layer.style.backgroundImage = 'url(' + tile.toDataURL() + ')'
  })
}

function CityMap({ paused }) {
  const sceneRef = useRef(null)
  const canvasRef = useRef(null)
  const lightsRef = useRef(null)
  const syncRef = useRef(null)

  useEffect(() => {
    const scene = sceneRef.current
    const canvas = canvasRef.current
    const lights = lightsRef.current
    const hero = scene.parentElement
    const context = canvas.getContext("2d")
    const lightContext = lights.getContext("2d")
    if (!context || !lightContext) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const layers = [...scene.querySelectorAll(".portfolio-hero-rain-layer")]
    let frame = 0
    let previousFrame = 0
    let time = 0
    let isVisible = true
    let width = 0
    let height = 0
    let lightPaths = []

    function drawMap() {
      const angle = -0.53
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      const unit = Math.max(width / 23, height / 11)
      const centerX = width * (width < 700 ? 0.53 : 0.69)

      function depth(x, z) {
        return x * sin + z * cos
      }

      function project(x, y, z) {
        const distance = depth(x, z)
        const perspective = 1 / (1 - distance * 0.025)
        return [
          centerX + (x * cos - z * sin) * unit * perspective,
          height * 0.53 + (distance * 0.48 - y) * unit * perspective,
        ]
      }

      function shape(points, fill, stroke) {
        context.beginPath()
        points.forEach(([x, y, z], index) => {
          const [screenX, screenY] = project(x, y, z)
          if (index === 0) context.moveTo(screenX, screenY)
          else context.lineTo(screenX, screenY)
        })
        if (fill) {
          context.closePath()
          context.fillStyle = fill
          context.fill()
        }
        if (stroke) {
          context.strokeStyle = stroke
          context.stroke()
        }
      }

      context.clearRect(0, 0, width, height)
      context.lineWidth = 0.65
      shape([[-9.5, 0, -7.5], [9.5, 0, -7.5], [9.5, 0, 8.5], [-9.5, 0, 8.5]], "#091914", "#254c40")

      for (let x = -9; x <= 9; x += 1) {
        shape([[x, 0, -7.5], [x, 0, 8.5]], null, x % 4 === 0 ? "#376759" : "#16342b")
      }
      for (let z = -7; z <= 8; z += 1) {
        shape([[-9.5, 0, z], [9.5, 0, z]], null, z % 4 === 0 ? "#376759" : "#16342b")
      }

      const orderedBlocks = [...blocks].sort((a, b) => depth(a.x, a.z) - depth(b.x, b.z))
      for (const { x, z, width: side, height: roof, lit } of orderedBlocks) {
        const left = x - side / 2
        const right = x + side / 2
        const back = z - side / 2
        const front = z + side / 2
        const edge = lit ? "#4dab8b" : "#285345"
        shape([[left, roof, back], [left, roof, front], [left, 0, front], [left, 0, back]], lit ? "#235b49" : "#102720", edge)
        shape([[left, roof, front], [right, roof, front], [right, 0, front], [left, 0, front]], lit ? "#1e4d3e" : "#0d201b", edge)
        shape([[left, roof, back], [right, roof, back], [right, roof, front], [left, roof, front]], lit ? "#35816a" : "#1a372e", edge)
      }

      lightPaths = routes.map((route) => {
        const points = route.map(([x, z]) => [x, 0.035, z])
        context.lineWidth = 1
        shape(points, null, "#387c65")

        const path = new Path2D()
        points.forEach(([x, y, z], index) => {
          const [screenX, screenY] = project(x, y, z)
          if (index === 0) path.moveTo(screenX, screenY)
          else path.lineTo(screenX, screenY)
        })
        return path
      })
    }

    function drawLights() {
      lightContext.clearRect(0, 0, width, height)
      lightContext.lineCap = "round"
      lightPaths.forEach((path, index) => {
        lightContext.setLineDash([10, 36])
        lightContext.lineDashOffset = (index % 2 === 0 ? -1 : 1) * (time * (112 + index * 18) + index * 19)
        lightContext.lineWidth = 5
        lightContext.strokeStyle = "#34d39938"
        lightContext.stroke(path)
        lightContext.lineWidth = 1.6
        lightContext.strokeStyle = index % 2 === 0 ? "#a7f3d0" : "#5eead4"
        lightContext.stroke(path)
      })
    }

    function animate(timestamp) {
      if (!previousFrame || timestamp - previousFrame >= 48) {
        if (previousFrame) time += Math.min(timestamp - previousFrame, 70) / 1000
        previousFrame = timestamp
        drawLights()
      }
      frame = window.requestAnimationFrame(animate)
    }

    function syncMotion() {
      window.cancelAnimationFrame(frame)
      previousFrame = 0
      const active = isVisible && !document.hidden
      scene.dataset.active = String(active)
      if (active && hero.dataset.paused !== "true" && !reducedMotion.matches) {
        frame = window.requestAnimationFrame(animate)
      }
    }
    syncRef.current = syncMotion

    function resize() {
      const nextWidth = Math.round(scene.clientWidth)
      const nextHeight = Math.round(scene.clientHeight)
      if (!nextWidth || !nextHeight || (nextWidth === width && nextHeight === height)) return

      width = nextWidth
      height = nextHeight
      const mapScale = Math.min(window.devicePixelRatio || 1, 1.25, 1200 / width)
      const lightScale = Math.min(1, 900 / width)
      canvas.width = Math.round(width * mapScale)
      canvas.height = Math.round(height * mapScale)
      lights.width = Math.round(width * lightScale)
      lights.height = Math.round(height * lightScale)
      context.setTransform(mapScale, 0, 0, mapScale, 0, 0)
      lightContext.setTransform(lightScale, 0, 0, lightScale, 0, 0)
      drawMap()
      drawLights()
      paintRain(layers, width, height)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(scene)
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
      syncMotion()
    })
    visibilityObserver.observe(scene)
    resize()
    syncMotion()
    reducedMotion.addEventListener("change", syncMotion)
    document.addEventListener("visibilitychange", syncMotion)

    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
      visibilityObserver.disconnect()
      reducedMotion.removeEventListener("change", syncMotion)
      document.removeEventListener("visibilitychange", syncMotion)
    }
  }, [])

  useEffect(() => {
    syncRef.current?.()
  }, [paused])

  return (
    <div ref={sceneRef} className="portfolio-hero-scene" aria-hidden="true">
      <div className="portfolio-hero-city">
        <canvas ref={canvasRef} className="portfolio-hero-map" />
        <canvas ref={lightsRef} className="portfolio-hero-lights" />
      </div>
      <div className="portfolio-hero-shade" />
      <div className="portfolio-hero-rain">
        {rainLayers.map((duration) => (
          <div key={duration} className="portfolio-hero-rain-layer" style={{ animationDuration: duration + "s" }} />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useTranslation()
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 650, easing: "ease-out-cubic", once: true })
  }, [])

  return (
    <section
      aria-labelledby="hero-title"
      className="portfolio-hero relative isolate flex min-h-svh flex-col overflow-hidden bg-[#080c11] light:bg-[#eef7f1] px-6 text-slate-100 light:text-slate-950 sm:px-10"
      data-paused={paused}
    >
      <CityMap paused={paused} />

      <div className="relative mx-auto grid w-full max-w-6xl flex-1 content-center items-center gap-4 py-6 sm:gap-6 sm:py-8 lg:grid-cols-[1.08fr_1fr] lg:items-stretch lg:gap-5">
        <div data-aos="fade-up" data-aos-offset="0" className="portfolio-hero-copy">
          <h1 id="hero-title" className="text-[clamp(2.65rem,5.7vw,6.1rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-[#e1f5ee] light:text-slate-950">
            {t("I build web apps")} <span className="block text-emerald-300 light:text-emerald-800">{t("end to end.")}</span>
          </h1>
          <p className="mt-6 max-w-[43ch] text-base leading-relaxed text-slate-300 light:text-slate-700 sm:text-lg">
            {t("I'm Muhammad Shakeel, a full-stack developer building responsive React interfaces and the APIs and databases behind them.")}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/projects" className="group inline-flex items-center gap-3 rounded-lg bg-emerald-300 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 light:focus-visible:outline-emerald-700">
              {t("View my work")}
              <ArrowRight aria-hidden="true" size={18} className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="inline-flex items-center rounded-lg border border-white/20 light:border-emerald-900/25 bg-[#080c11]/55 light:bg-white/80 px-5 py-3 font-semibold transition-colors hover:bg-white/10 light:hover:bg-emerald-900/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 light:focus-visible:outline-emerald-700">
              {t("Get in touch")}
            </Link>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="120" data-aos-offset="0" className="portfolio-hero-stage relative mx-auto w-full max-w-[490px] lg:-left-6">
          <figure className="portfolio-hero-figure portfolio-hero-profile relative mx-auto overflow-hidden rounded-full">
            <img src={portrait} srcSet={smallPortrait + " 480w, " + portrait + " 960w"} sizes="(max-width: 639px) 75vw, (max-width: 1023px) 460px, 40vw" alt={t("Portrait of Muhammad Shakeel")} width="960" height="1280" fetchPriority="high" className="block aspect-square h-auto w-full object-cover object-[50%_30%]" />
            <figcaption className="portfolio-hero-caption">
              <span className="font-medium">{t("Muhammad Shakeel")}</span>
              <a href="https://github.com/MuhmmadShakeel" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-2 py-1 font-medium text-emerald-200 hover:bg-emerald-300/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 light:focus-visible:outline-emerald-700">
                GitHub <ArrowRight aria-hidden="true" size={13} className="-rotate-45" />
              </a>
            </figcaption>
          </figure>

          <ul aria-label={t("Technology stack")} className="portfolio-hero-stack">
            {stack.map((technology) => (
              <li key={technology.name} className="portfolio-hero-marker">
                <technology.icon aria-hidden="true" size={16} className="shrink-0 text-emerald-300 light:text-emerald-800" />
                {technology.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-2 pb-[4.75rem]">
        <a href="#portfolio-intro" className="portfolio-hero-control">
          <span aria-hidden="true" className="portfolio-hero-arrow">
            <ChevronsDown size={17} className="portfolio-hero-scroll" />
          </span>
          {t("Explore portfolio")}
        </a>
        <button type="button" onClick={() => setPaused((value) => !value)} className="portfolio-hero-control portfolio-hero-motion">
          {paused ? <Play aria-hidden="true" size={15} /> : <Pause aria-hidden="true" size={15} />}
          {paused ? t("Resume motion") : t("Pause motion")}
        </button>
      </div>
    </section>
  )
}
