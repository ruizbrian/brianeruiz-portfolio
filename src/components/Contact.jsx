import { motion } from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi'
import { EMAIL, LINKEDIN_URL } from '../constants'
import { stagger, fadeUp } from './motion'

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

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${EMAIL}`}
            className="btn-primary text-sm"
          >
            <HiOutlineMail size={18} />
            {EMAIL}
          </a>

          {LINKEDIN_URL && (
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              LinkedIn
            </a>
          )}
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
