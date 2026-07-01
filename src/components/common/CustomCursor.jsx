import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isHoveringImage, setIsHoveringImage] = useState(false)
  
  // Only render custom cursor on non-touch devices
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    // Check if it's a touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsDesktop(false)
      return
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const updateHoverState = (e) => {
      // Elements that trigger the hover state (buttons, links)
      const isClickable = e.target.closest('a, button, input, textarea, select, [role="button"]')
      // Elements that trigger the image hover state (specifically the image slider)
      const isImageArea = e.target.closest('[data-cursor="image"]')
      
      setIsHovering(!!isClickable)
      setIsHoveringImage(!!isImageArea)
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', updateHoverState)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', updateHoverState)
    }
  }, [])

  if (!isDesktop) return null

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      height: 20,
      width: 20,
      backgroundColor: 'rgba(24, 24, 27, 0.4)',
      border: '1px solid rgba(24, 24, 27, 0.2)',
      mixBlendMode: 'normal'
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: 'rgba(24, 24, 27, 0.1)',
      border: '1px solid rgba(24, 24, 27, 0.8)',
      mixBlendMode: 'normal'
    },
    image: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      border: 'none',
      mixBlendMode: 'normal'
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (pointer: fine) {
          body, body * {
            cursor: none !important;
          }
        }
      `}} />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none flex items-center justify-center text-[10px] font-medium tracking-widest uppercase !z-[999999]"
        variants={variants}
        animate={isHoveringImage ? 'image' : isHovering ? 'hover' : 'default'}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      >
        <AnimatePresence>
          {isHoveringImage && (
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-zinc-950"
            >
              View
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
