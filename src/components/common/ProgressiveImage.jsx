import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProgressiveImage({ src, alt, className, style }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden w-full h-full bg-zinc-900 ${className}`} style={style}>
      {/* Blurred Placeholder / Skeleton */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-zinc-800 animate-pulse"
      />
      
      {/* Actual Image */}
      <motion.img
        initial={{ opacity: 0, scale: 1.05 }}
        animate={
          isLoaded 
            ? { opacity: 1, scale: 1 } 
            : { opacity: 0, scale: 1.05 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover`}
        style={style}
      />
    </div>
  )
}
