import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { RESUME_PATH } from '../constants'
import { heroStagger, heroWord, fadeUp } from './motion'

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      {/* Dot grid overlay */}
      <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl w-full"
        variants={heroStagger}
        initial="hidden"
        animate="show"
      >
        {/* Role label */}
        <motion.p variants={heroWord} className="section-label mb-6">
          Data Analyst &amp; Systems Developer
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={heroWord}
          className="font-display font-black leading-none tracking-tight mb-6"
          style={{ fontSize: 'clamp(3.5rem, 11vw, 8.5rem)' }}
        >
          BRIAN{' '}
          <span style={{ color: 'var(--accent)' }}>RUIZ</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={heroWord}
          className="text-lg md:text-xl font-light mb-12 max-w-md mx-auto"
          style={{ color: 'var(--muted)' }}
        >
          I build systems that work.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            onClick={e => handleScroll(e, '#projects')}
            className="btn-primary"
          >
            See My Work
            <HiArrowDown size={16} />
          </a>
          <a href={RESUME_PATH} download className="btn-secondary">
            Download Resume
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          variants={fadeUp}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        >
          <HiArrowDown size={20} style={{ color: 'var(--muted)', opacity: 0.5 }} />
        </motion.div>
      </motion.div>
    </div>
  )
}
