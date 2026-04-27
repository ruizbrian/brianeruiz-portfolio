import { motion } from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { EMAIL, LINKEDIN_URL, GITHUB_URL } from '../constants'
import { stagger, fadeUp } from './motion'

const socials = [
  { label: 'LinkedIn', href: LINKEDIN_URL, Icon: FaLinkedinIn },
  { label: 'GitHub',   href: GITHUB_URL,   Icon: FaGithub     },
]

export default function Contact() {
  return (
    <div style={{ borderTop: '1px solid var(--border)' }}>
      <motion.div
        className="section-inner text-center"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p variants={fadeUp} className="section-label">Contact</motion.p>

        <motion.h2
          variants={fadeUp}
          className="font-display font-black leading-none tracking-tight mb-4"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: 'var(--ink)' }}
        >
          Let's work<br />
          <span style={{ color: 'var(--accent)' }}>together.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-body text-base mb-10 max-w-sm mx-auto"
          style={{ color: 'var(--muted)' }}
        >
          Open to new opportunities. Reach out.
        </motion.p>

        {/* Email button */}
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <a href={`mailto:${EMAIL}`} className="btn-primary text-sm">
            <HiOutlineMail size={18} />
            {EMAIL}
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={fadeUp} className="flex justify-center gap-4">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="social-icon"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          variants={fadeUp}
          className="font-mono text-xs mt-24"
          style={{ color: 'var(--muted)', opacity: 0.5 }}
        >
          brianeruiz.com · {new Date().getFullYear()}
        </motion.p>
      </motion.div>
    </div>
  )
}
