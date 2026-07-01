import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Check, AlertCircle } from 'lucide-react'
import SectionWrapper from '../components/layout/SectionWrapper'
import SEO from '../components/common/SEO'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaqgdabe'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsError(false)
    
    const formData = new FormData(e.target)
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setIsSuccess(true)
        e.target.reset()
        // Reset success message after 4 seconds
        setTimeout(() => setIsSuccess(false), 4000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error(error)
      setIsError(true)
      // Reset error message after 4 seconds
      setTimeout(() => setIsError(false), 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-24">
      <SEO title="Contact | SecoStarr Agency" description="Start a conversation for residential, hospitality, and selected cultural commissions across Indonesia." />
      <SectionWrapper
        eyebrow="Contact"
      title="Start a Conversation"
      description="We welcome inquiries for residential, hospitality, and selected cultural commissions across Indonesia and beyond."
    >
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Inquiries</p>
            <a href="mailto:studio@secostarr.com" className="group mt-4 flex items-center gap-2 font-serif text-3xl md:text-4xl tracking-tight text-zinc-950 transition-colors">
              <span className="relative">
                studio@secostarr.com
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-950 transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowUpRight className="h-6 w-6 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Careers</p>
            <p className="mt-4 text-zinc-600 leading-relaxed max-w-md">
              We are currently looking for a Senior Architect. Please send a single PDF (max 10MB) containing your CV and selected works to:
            </p>
            <a href="mailto:work@secostarr.com" className="mt-3 inline-flex items-center gap-2 font-medium text-zinc-950 hover:text-amber-700 transition-colors border-b border-zinc-950/20 pb-0.5 hover:border-amber-700">
              work@secostarr.com
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Studio</p>
            <address className="mt-4 not-italic text-zinc-600 leading-relaxed">
              Jl. Asia Afrika No. 12<br />
              Bandung, 40111<br />
              Indonesia
            </address>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-10 rounded-none bg-zinc-50 p-8 md:p-12 border border-zinc-100 relative"
        >
          <div className="space-y-3">
            <label htmlFor="name" className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              required
              className="w-full border-b border-zinc-300 bg-transparent py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none transition-colors" 
              placeholder="Your full name"
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required
              className="w-full border-b border-zinc-300 bg-transparent py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none transition-colors" 
              placeholder="your@email.com"
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="project" className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Project Type</label>
            <div className="relative">
              <select 
                id="project" 
                name="projectType"
                className="w-full border-b border-zinc-300 bg-transparent py-3 text-zinc-900 focus:border-zinc-950 focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="Residential">Residential</option>
                <option value="Hospitality">Hospitality</option>
                <option value="Commercial">Commercial</option>
                <option value="Cultural">Cultural</option>
                <option value="Other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Message</label>
            <textarea 
              id="message" 
              name="message"
              rows="4" 
              required
              className="w-full border-b border-zinc-300 bg-transparent py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your project, location, and timeline..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting || isSuccess}
            className="w-full relative overflow-hidden bg-zinc-950 py-5 text-sm font-medium uppercase tracking-[0.2em] text-white hover:bg-zinc-800 transition-colors disabled:bg-zinc-800 disabled:cursor-not-allowed group"
          >
            <AnimatePresence mode="wait">
              {isSubmitting ? (
                <motion.span 
                  key="submitting" 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center gap-3"
                >
                  <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </motion.span>
              ) : isSuccess ? (
                <motion.span 
                  key="success" 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center gap-2 text-green-400"
                >
                  <Check className="h-5 w-5" /> Message Sent Successfully
                </motion.span>
              ) : isError ? (
                <motion.span 
                  key="error" 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center gap-2 text-red-400"
                >
                  <AlertCircle className="h-5 w-5" /> Failed to send. Please ensure ID is set.
                </motion.span>
              ) : (
                <motion.span 
                  key="idle" 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="block relative z-10"
                >
                  Send Inquiry
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.form>
        </div>
      </SectionWrapper>
    </div>
  )
}